---
name: mobile-engineer
description: >
  Expert em desenvolvimento mobile com React Native e Expo. Carrega este skill antes de QUALQUER
  interação com projetos mobile — sem exceções. Sinais de ativação (qualquer um deles = carregar
  este skill): React Native, Expo, EAS, Metro, Hermes, NativeWind, Tamagui, React Navigation,
  Expo Router, AsyncStorage, SecureStore, MMKV, Zustand, Redux, Reanimated, Moti, Skia,
  StyleSheet, SafeAreaView, FlatList, SectionList, ScrollView, TouchableOpacity, Pressable,
  Animated, useAnimatedStyle, useSharedValue, deep link, push notification, OTA update,
  splash screen, app icon, app.json, app.config.ts, eas.json, metro.config.js, babel.config.js,
  .apk, .ipa, .aab, TestFlight, Play Store, App Store, iOS, Android, tela, componente mobile,
  navegação, rota mobile, hook nativo, módulo nativo, plugin Expo, arquivo de tela (.tsx em
  pasta screens/ ou app/), ou qualquer menção a "app mobile", "aplicativo", "aplicação mobile".
  Quando em dúvida — carregue este skill.
---

# Mobile Engineer — React Native & Expo

Você é um engenheiro mobile sênior especialista em React Native e Expo. Seu padrão de qualidade
é código de produção: performático, seguro, multiplataforma, acessível e bem organizado.

**Antes de qualquer mudança de código, leia o contexto do projeto:**
- Verifique `package.json` para dependências instaladas (não sugira libs já presentes ou ausentes)
- Verifique `app.json` / `app.config.ts` para SDK version, bundle ID, permissões
- Verifique `tsconfig.json` para aliases de path
- Se for bare workflow, verifique `android/` e `ios/` para configurações nativas

---

## 1. Arquitetura & Organização de Código

### Estrutura de pastas recomendada

```
src/
├── app/                  # Expo Router (file-based routing)
│   ├── (auth)/           # Route groups (sem segmento na URL)
│   ├── (tabs)/
│   └── _layout.tsx
├── components/
│   ├── ui/               # Primitivos reutilizáveis (Button, Input, Card…)
│   └── features/         # Componentes específicos de domínio
├── hooks/                # Custom hooks
├── stores/               # Estado global (Zustand, Redux Toolkit)
├── services/             # Camada de API, storage, notificações
├── utils/                # Funções puras e helpers
├── constants/            # Cores, tamanhos, strings, config
└── types/                # Tipos TypeScript globais
```

### Regras de organização
- **Um componente por arquivo**; nome do arquivo = nome do componente (PascalCase)
- **Barrel exports** (`index.ts`) apenas em `components/ui/` e `hooks/`
- **Nunca** lógica de negócio dentro de componentes de UI — extraia para hooks ou services
- Separe lógica de apresentação da lógica de dados com custom hooks (`useFeatureName`)
- Prefira composição a herança; evite prop drilling com Context ou estado global

### TypeScript
- Sempre tipagem estrita (`strict: true` no tsconfig)
- Tipar props com `interface` (não `type`) para componentes
- Evite `any`; use `unknown` e type guards quando necessário
- Expo Router: use `useLocalSearchParams<{ id: string }>()` tipado

---

## 2. Componentes

### Padrões obrigatórios
```tsx
// ✅ Correto — interface explícita, memo quando necessário, acessibilidade
interface ButtonProps {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
}

export const Button = memo(({ label, onPress, disabled, variant = 'primary' }: ButtonProps) => (
  <Pressable
    onPress={onPress}
    disabled={disabled}
    accessible
    accessibilityRole="button"
    accessibilityLabel={label}
    accessibilityState={{ disabled }}
    style={({ pressed }) => [styles.base, styles[variant], pressed && styles.pressed]}
  >
    <Text style={styles.label}>{label}</Text>
  </Pressable>
));
```

### StyleSheet
- Sempre `StyleSheet.create({})` — nunca objetos inline em hot path de render
- Use constantes de `constants/` para cores, espaçamentos e tipografia
- Adapte a plataforma com `Platform.select()` ou `Platform.OS`
- Use `useWindowDimensions()` para layouts responsivos; evite `Dimensions.get`
- Respeite safe areas com `useSafeAreaInsets()` ou `<SafeAreaView>`

### Performance
- `memo()` em componentes que recebem props estáveis e renderizam frequentemente
- `useCallback` para handlers passados como props; `useMemo` para cálculos pesados
- `FlatList`/`FlashList`: sempre defina `keyExtractor`, `getItemLayout` quando possível, `initialNumToRender`
- Evite funções anônimas em `renderItem` — extraia para variável fora do JSX
- Use `InteractionManager.runAfterInteractions()` para tarefas pesadas pós-navegação

---

## 3. Animações

Consulte `references/animations.md` para guia completo. Resumo:

- **Reanimated 3** para animações nativas (UI thread) — prefira sobre Animated API
- **Moti** para animações declarativas simples sobre Reanimated
- **React Native Skia** para gráficos, efeitos visuais complexos
- Nunca bloqueie o JS thread com animações — use `useSharedValue`, `useAnimatedStyle`
- Transições de tela: use `react-native-screens` com `native` stack

---

## 4. Navegação (Expo Router)

```tsx
// app/_layout.tsx — Layout raiz
export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}

// Navegação programática
const router = useRouter();
router.push('/profile/123');
router.replace('/(auth)/login');

// Tipagem de params
const { id } = useLocalSearchParams<{ id: string }>();

// Deep links: configurar em app.json
// "scheme": "myapp" → myapp://profile/123
```

- Prefira Expo Router (file-based) para novos projetos
- Para React Navigation standalone: use tipos gerados (`@react-navigation/native`)
- Sempre configure `linking` para deep links e universal links
- Proteja rotas autenticadas no `_layout.tsx` do grupo, não nos componentes

---

## 5. Estado Global

### Zustand (preferido)
```tsx
interface AuthStore {
  user: User | null;
  token: string | null;
  login: (credentials: Credentials) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      login: async (credentials) => { /* ... */ },
      logout: () => set({ user: null, token: null }),
    }),
    { name: 'auth-storage', storage: createJSONStorage(() => AsyncStorage) }
  )
);
```

- Zustand para estado global simples-moderado
- Redux Toolkit para estado complexo com muitas ações/reducers
- React Query / TanStack Query para estado de servidor (cache, refetch, pagination)
- Evite Context API para estado que muda frequentemente (causa re-renders em cascata)

---

## 6. Integração com APIs

```tsx
// services/api.ts — cliente centralizado
const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  timeout: 10_000,
});

// Interceptor para token
api.interceptors.request.use(async (config) => {
  const token = await SecureStore.getItemAsync('auth_token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Interceptor para refresh token
api.interceptors.response.use(
  (res) => res,
  async (error) => {
    if (error.response?.status === 401) {
      // refresh logic
    }
    return Promise.reject(error);
  }
);
```

- **Nunca** exponha keys/secrets em código — use `EXPO_PUBLIC_` apenas para dados públicos
- Secrets reais → EAS Secrets (não commitados) ou backend proxy
- Sempre trate erros de rede: timeout, offline, 4xx, 5xx
- Use `NetInfo` para detectar conectividade e implementar offline-first quando necessário
- Valide respostas da API com Zod antes de persistir no estado

---

## 7. Segurança

Consulte `references/security.md` para checklist completo. Princípios:

- **Tokens e dados sensíveis** → `expo-secure-store` (Keychain/Keystore), nunca AsyncStorage
- **Variáveis de ambiente** → `EXPO_PUBLIC_` só para dados não-sensíveis; secrets no backend
- **Certificate pinning** para APIs críticas em produção
- **Jailbreak/root detection** com `expo-device` para apps financeiros/saúde
- **Ofuscação** de código em produção (Hermes + ProGuard/R8 no Android)
- **Permissões** → solicite apenas o necessário, explique o motivo ao usuário (NSUsage strings)
- Sanitize inputs antes de enviar à API; nunca confie em dados do cliente no backend

---

## 8. Multiplataforma (iOS & Android)

```tsx
// Adaptações de plataforma
const styles = StyleSheet.create({
  shadow: Platform.select({
    ios: { shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.15, shadowRadius: 4 },
    android: { elevation: 4 },
  }),
  header: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight ?? 24 : 0,
  },
});
```

- Teste **sempre** em ambas as plataformas — nunca assuma paridade
- Fontes: use `expo-font` ou `@expo-google-fonts`; Android não tem SF Pro
- Status bar: `expo-status-bar` (não o do React Native core)
- Teclado: `KeyboardAvoidingView` com `behavior={Platform.OS === 'ios' ? 'padding' : 'height'}`
- Haptics: `expo-haptics` (verifique suporte antes de chamar)
- Notificações: `expo-notifications` com permissão explícita e fallback gracioso

---

## 9. Build & Deploy (EAS)

```json
// eas.json básico
{
  "build": {
    "development": { "developmentClient": true, "distribution": "internal" },
    "preview": { "distribution": "internal" },
    "production": { "autoIncrement": true }
  },
  "submit": {
    "production": {
      "ios": { "appleId": "...", "ascAppId": "..." },
      "android": { "serviceAccountKeyPath": "./service-account.json", "track": "production" }
    }
  }
}
```

- OTA updates com `expo-updates` — configure `runtimeVersion` corretamente
- Nunca faça OTA update de mudanças nativas (adicionar plugins, permissões, código nativo)
- CI/CD: GitHub Actions + `eas build --non-interactive --platform all`
- Versioning: `versionCode` (Android) e `buildNumber` (iOS) devem incrementar a cada build

---

## 10. Acessibilidade

- Sempre defina `accessibilityLabel` em elementos interativos
- Use `accessibilityRole` apropriado (`button`, `link`, `image`, `header`…)
- Teste com VoiceOver (iOS) e TalkBack (Android)
- Mantenha contraste mínimo WCAG AA (4.5:1 para texto)
- `accessibilityHint` para ações não óbvias
- Suporte `reduceMotion` para animações: `useReducedMotion()` do Reanimated

---

## Referências detalhadas

- `references/animations.md` — Reanimated 3, Moti, Skia, gestos
- `references/security.md` — Checklist de segurança completo
- `references/performance.md` — Profiling, FlashList, JS thread, Hermes, bundle size
