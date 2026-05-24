# Performance — React Native & Expo

## JS Thread vs UI Thread

O React Native tem dois threads principais:
- **JS Thread**: onde seu código React/JS roda. Lento = UI trava.
- **UI Thread (Main Thread)**: onde renderização e animações nativas acontecem.

**Regras:**
- Animações pesadas → Reanimated (UI thread)
- Operações I/O → async/await (não bloqueie o JS thread)
- Listas grandes → FlashList (não FlatList)
- Imagens → `expo-image` (cache inteligente, formatos modernos)

---

## FlashList vs FlatList

```tsx
import { FlashList } from '@shopify/flash-list';

// ✅ FlashList — muito mais performático para listas grandes
<FlashList
  data={items}
  renderItem={({ item }) => <ItemCard item={item} />}
  keyExtractor={(item) => item.id}
  estimatedItemSize={80} // obrigatório — altura estimada do item
  onEndReached={loadMore}
  onEndReachedThreshold={0.5}
/>

// Use FlatList apenas se FlashList não estiver disponível
// Otimizações obrigatórias com FlatList:
<FlatList
  removeClippedSubviews={Platform.OS === 'android'}
  maxToRenderPerBatch={10}
  windowSize={5}
  initialNumToRender={10}
  getItemLayout={(_, index) => ({ length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index })}
/>
```

**Quando usar SectionList:** Listas agrupadas (ex: contatos A-Z). Mesmas otimizações se aplicam.

---

## Imagens

```tsx
import { Image } from 'expo-image';

// ✅ expo-image — cache, placeholders, formatos modernos (WebP, AVIF)
<Image
  source={{ uri: imageUrl }}
  style={styles.image}
  contentFit="cover"
  placeholder={blurhash}
  transition={200}
  cachePolicy="memory-disk"
/>
```

- Prefira `expo-image` ao `Image` do React Native core
- Use blurhash para placeholders (lib `blurhash` ou gerado no backend)
- Imagens locais: use `require()` (bundled) ou `expo-asset`
- Redimensione imagens no backend — não no cliente
- Formatos WebP/AVIF economizam 30–50% de tamanho vs JPEG/PNG

---

## Otimizações de Render

```tsx
// memo para componentes que recebem props estáveis
const ItemCard = memo(({ item }: { item: Item }) => { ... });

// useCallback para funções passadas como props
const handlePress = useCallback((id: string) => {
  navigation.navigate('Detail', { id });
}, [navigation]);

// useMemo para cálculos pesados
const sortedItems = useMemo(
  () => items.slice().sort((a, b) => b.date - a.date),
  [items]
);

// Evite em renderItem de listas
// ❌ <FlatList renderItem={({ item }) => <Card onPress={() => handlePress(item.id)} />} />
// ✅ Extraia e memoize
const renderItem = useCallback(
  ({ item }: { item: Item }) => <ItemCard item={item} onPress={handlePress} />,
  [handlePress]
);
```

### Quando NÃO usar memo/useCallback/useMemo
- Componentes que sempre re-renderizam de qualquer forma (pai muda)
- Funções baratas de calcular
- Props que mudam a cada render (derrota o propósito do memo)

---

## Profiling & Diagnóstico

### Ferramentas
1. **Flipper** (dev) — Network inspector, React DevTools, Performance
2. **React DevTools Profiler** — Encontre componentes que re-renderizam demais
3. **Hermes Profiler** — CPU profiling do JS thread
4. **Android Studio Profiler** — Memory, CPU, Network no Android
5. **Instruments (Xcode)** — Profiling no iOS (Time Profiler, Allocations)

### Detectar re-renders excessivos
```tsx
// Temporário — adicione para debugar
const renderCount = useRef(0);
renderCount.current++;
console.log(`MyComponent rendered ${renderCount.current} times`);

// Ou use a lib why-did-you-render (dev only)
```

### Performance do Metro
```js
// metro.config.js — habilitar cache e transformações paralelas
const { getDefaultConfig } = require('expo/metro-config');
const config = getDefaultConfig(__dirname);

config.transformer.minifierConfig = {
  compress: { reduce_funcs: false }, // compatibilidade Hermes
};

module.exports = config;
```

---

## Bundle Size

```bash
# Analisar bundle
npx expo export --dump-sourcemap
npx source-map-explorer dist/_expo/static/js/web/*.js

# Ou com bundle-analyzer
npx react-native-bundle-visualizer
```

**Reduções comuns:**
- Importe só o que precisa: `import { format } from 'date-fns'` não `import * as dateFns`
- Substitua `moment.js` por `date-fns` ou `dayjs` (muito menores)
- Lazy loading de telas com `React.lazy` + `Suspense` (só web/Expo Router)
- `expo-av` é grande — use `expo-video` / `expo-audio` separados se possível

---

## Hermes

Hermes é o engine JS padrão do React Native (Expo SDK 48+). Benefícios:
- Startup mais rápido (bytecode pré-compilado)
- Menor uso de memória
- Melhor TTI (Time to Interactive)

```json
// app.json — garanta que Hermes está ativo
{
  "expo": {
    "jsEngine": "hermes"
  }
}
```

**Compatibilidade Hermes:**
- Evite `Array.prototype.flat()` com profundidade > 1 (lento no Hermes antigo)
- `Proxy` tem suporte limitado — evite em código crítico de performance
- `for...of` em arrays grandes: prefira `.forEach` ou `for` clássico

---

## Startup Time

```tsx
// app/_layout.tsx — evite operações pesadas no mount inicial
export default function RootLayout() {
  // ❌ Não faça isso — bloqueia renderização inicial
  const data = JSON.parse(fs.readFileSync('huge-file.json'));

  // ✅ Use SplashScreen + carregue assincronamente
  useEffect(() => {
    loadCriticalData().then(() => SplashScreen.hideAsync());
  }, []);
}
```

```tsx
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync(); // Chame antes do render

// Esconda só quando o app estiver pronto
await Promise.all([
  loadFonts(),
  loadInitialData(),
  prefetchCriticalImages(),
]);
SplashScreen.hideAsync();
```

**Targets de startup:**
- Cold start: < 2s em devices mid-range
- Warm start: < 500ms
- Meça com Android Studio / Instruments, não apenas percepção

---

## Memória

- Cancele subscriptions e timers no cleanup do `useEffect`
- Limpe listeners de eventos (`AppState`, `Keyboard`, `NetInfo`)
- `Image` com cache: defina limites (`expo-image` tem configuração de cache size)
- Evite closures que retêm objetos grandes desnecessariamente

```tsx
useEffect(() => {
  const subscription = AppState.addEventListener('change', handleAppStateChange);
  return () => subscription.remove(); // ✅ Cleanup obrigatório
}, []);
```
