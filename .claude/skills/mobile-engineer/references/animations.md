# Animações — React Native

## Reanimated 3 (padrão)

### Princípios
- Toda animação deve rodar na **UI thread** (não no JS thread)
- Use `useSharedValue`, `useAnimatedStyle`, `withTiming`, `withSpring`, `withSequence`
- **Nunca** acesse shared values diretamente em componentes — use `useAnimatedStyle`
- Worklets rodam na UI thread: funções dentro de `useAnimatedStyle`, handlers de gesto

### Padrões de uso

```tsx
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  withSequence,
  withRepeat,
  runOnJS,
  Easing,
} from 'react-native-reanimated';

// Fade + Scale ao montar
export function AnimatedCard({ children }: { children: React.ReactNode }) {
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.9);

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 300 });
    scale.value = withSpring(1, { damping: 15, stiffness: 150 });
  }, []);

  const animStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }],
  }));

  return <Animated.View style={animStyle}>{children}</Animated.View>;
}

// Loading spinner
const rotation = useSharedValue(0);
rotation.value = withRepeat(
  withTiming(360, { duration: 1000, easing: Easing.linear }),
  -1, // infinito
  false
);
const spinStyle = useAnimatedStyle(() => ({
  transform: [{ rotate: `${rotation.value}deg` }],
}));

// Callback ao terminar animação (runOnJS para chamar função JS da UI thread)
opacity.value = withTiming(0, { duration: 200 }, (finished) => {
  if (finished) runOnJS(onHide)();
});
```

### Layout Animations
```tsx
import { FadeIn, FadeOut, SlideInRight, Layout } from 'react-native-reanimated';

// Anima entrada/saída de items em lista
<Animated.View
  entering={FadeIn.duration(300)}
  exiting={FadeOut.duration(200)}
  layout={Layout.springify()}
>
  {content}
</Animated.View>
```

---

## Gestos (react-native-gesture-handler)

```tsx
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

// Swipe to dismiss
const translateX = useSharedValue(0);
const panGesture = Gesture.Pan()
  .onUpdate((e) => {
    translateX.value = e.translationX;
  })
  .onEnd((e) => {
    if (Math.abs(e.translationX) > 150) {
      translateX.value = withTiming(e.translationX > 0 ? 500 : -500, {}, () => {
        runOnJS(onDismiss)();
      });
    } else {
      translateX.value = withSpring(0);
    }
  });

const swipeStyle = useAnimatedStyle(() => ({
  transform: [{ translateX: translateX.value }],
}));

return (
  <GestureDetector gesture={panGesture}>
    <Animated.View style={swipeStyle}>{content}</Animated.View>
  </GestureDetector>
);
```

**Regras de gesto:**
- Sempre envolva o app com `<GestureHandlerRootView style={{ flex: 1 }}>`
- Use `Gesture.Simultaneous()` / `Gesture.Exclusive()` para combinar gestos
- `ScrollView` dentro de `GestureDetector`: use `NativeViewGestureHandler`

---

## Moti (animações declarativas)

```tsx
import { MotiView, MotiText } from 'moti';

// Skeleton loading
<MotiView
  from={{ opacity: 0.3 }}
  animate={{ opacity: 1 }}
  transition={{ type: 'timing', duration: 600, loop: true }}
  style={[styles.skeleton, { width: 200, height: 20 }]}
/>

// Animação condicional
<MotiView
  animate={{ scale: isActive ? 1.05 : 1, opacity: isActive ? 1 : 0.7 }}
  transition={{ type: 'spring', damping: 20 }}
/>
```

Use Moti quando:
- A animação é simples e declarativa (sem gestos complexos)
- Skeletons e shimmer effects
- Animações condicionais baseadas em estado

---

## Skia (React Native Skia)

Use para:
- Gráficos customizados, charts, visualizações de dados
- Efeitos de blur, sombras complexas, gradientes não-lineares
- Filtros de imagem (saturação, contraste, etc.)
- Paths animados, formas customizadas

```tsx
import { Canvas, Circle, Paint, LinearGradient, vec } from '@shopify/react-native-skia';

<Canvas style={{ width: 200, height: 200 }}>
  <Circle cx={100} cy={100} r={80}>
    <Paint>
      <LinearGradient
        start={vec(0, 0)}
        end={vec(200, 200)}
        colors={['#6EE7F7', '#3B82F6']}
      />
    </Paint>
  </Circle>
</Canvas>
```

**Atenção:** Skia aumenta consideravelmente o tamanho do bundle. Só inclua se realmente necessário.

---

## Reduzindo Motion (acessibilidade)

```tsx
import { useReducedMotion } from 'react-native-reanimated';

function AnimatedButton() {
  const reduceMotion = useReducedMotion();
  const scale = useSharedValue(1);

  const animStyle = useAnimatedStyle(() => ({
    transform: [{ scale: reduceMotion ? 1 : scale.value }],
  }));
  // ...
}
```

Sempre respeite a preferência do sistema para movimento reduzido.

---

## Decisão rápida: qual lib usar?

| Cenário | Lib recomendada |
|---|---|
| Fade, slide, scale simples | Moti ou Reanimated Layout Animations |
| Animação baseada em gesto | Reanimated + RNGH |
| Animações complexas sincronizadas | Reanimated 3 |
| Gráfico / efeito visual | Skia |
| Skeleton / shimmer | Moti |
| Transição de tela | react-native-screens (native stack) |
