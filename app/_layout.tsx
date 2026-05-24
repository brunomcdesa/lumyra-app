import { useAuthStore } from '@/stores/auth.store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Slot, useRouter, useSegments } from 'expo-router';
import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import '../global.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: 1, staleTime: 1000 * 60 * 5 },
  },
});

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
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <AuthGuard />
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
