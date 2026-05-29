import { useAuthStore } from '@/stores/auth.store';
// Imports por subpath de peso: o bundle carrega só os .ttf usados (não todos os pesos do pacote).
import { Fraunces_400Regular } from '@expo-google-fonts/fraunces/400Regular';
import { Fraunces_400Regular_Italic } from '@expo-google-fonts/fraunces/400Regular_Italic';
import { Fraunces_500Medium } from '@expo-google-fonts/fraunces/500Medium';
import { Fraunces_500Medium_Italic } from '@expo-google-fonts/fraunces/500Medium_Italic';
import { Fraunces_600SemiBold } from '@expo-google-fonts/fraunces/600SemiBold';
import { Fraunces_700Bold } from '@expo-google-fonts/fraunces/700Bold';
import { Inter_400Regular } from '@expo-google-fonts/inter/400Regular';
import { Inter_500Medium } from '@expo-google-fonts/inter/500Medium';
import { Inter_600SemiBold } from '@expo-google-fonts/inter/600SemiBold';
import { Inter_700Bold } from '@expo-google-fonts/inter/700Bold';
import { JetBrainsMono_400Regular } from '@expo-google-fonts/jetbrains-mono/400Regular';
import { JetBrainsMono_500Medium } from '@expo-google-fonts/jetbrains-mono/500Medium';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useFonts } from 'expo-font';
import { Slot, useRouter, useSegments } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import '../global.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: 1, staleTime: 1000 * 60 * 5 },
  },
});

// Mantém o splash nativo até as fontes carregarem (evita flash de fonte de sistema).
SplashScreen.preventAutoHideAsync();

function AuthGuard() {
  const router = useRouter();
  const segments = useSegments();
  const { user, token } = useAuthStore();

  useEffect(() => {
    const inAuthGroup = segments[0] === '(auth)';

    if (!token) {
      if (!inAuthGroup) router.replace('/(auth)/login');
      return;
    }

    if (user?.role === 'PROFESSIONAL' && segments[0] !== '(professional)') {
      router.replace('/(professional)/dashboard');
    } else if (user?.role === 'CLIENT' && segments[0] !== '(client)') {
      router.replace('/(client)/dashboard');
    }
  }, [token, user, segments, router]);

  return <Slot />;
}

export default function RootLayout() {
  // Chaves customizadas batem com os tokens de `constants/theme.ts` (font.*).
  const [fontsLoaded, fontError] = useFonts({
    Fraunces: Fraunces_400Regular,
    'Fraunces-Medium': Fraunces_500Medium,
    'Fraunces-SemiBold': Fraunces_600SemiBold,
    'Fraunces-Bold': Fraunces_700Bold,
    'Fraunces-Italic': Fraunces_400Regular_Italic,
    'Fraunces-MediumItalic': Fraunces_500Medium_Italic,
    Inter: Inter_400Regular,
    'Inter-Medium': Inter_500Medium,
    'Inter-SemiBold': Inter_600SemiBold,
    'Inter-Bold': Inter_700Bold,
    JetBrainsMono: JetBrainsMono_400Regular,
    'JetBrainsMono-Medium': JetBrainsMono_500Medium,
  });

  const onLayout = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // Segura a renderização até as fontes resolverem (carregadas ou falha) para não piscar.
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider onLayout={onLayout}>
        <AuthGuard />
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
