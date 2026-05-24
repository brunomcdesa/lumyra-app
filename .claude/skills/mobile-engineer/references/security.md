# Segurança — React Native & Expo

## Checklist de Segurança por Categoria

### 1. Armazenamento de Dados Sensíveis

| Dado | Onde armazenar | Nunca usar |
|---|---|---|
| Tokens JWT / OAuth | `expo-secure-store` | AsyncStorage |
| Senhas | `expo-secure-store` | qualquer storage não encriptado |
| Dados do usuário (não-sensíveis) | AsyncStorage / MMKV | SecureStore (limite de 2KB) |
| Chaves de API | Backend proxy ou EAS Secrets | Bundle do app |
| PII (CPF, cartão) | Backend — nunca no device | qualquer storage local |

```tsx
import * as SecureStore from 'expo-secure-store';

// Salvar token
await SecureStore.setItemAsync('auth_token', token, {
  keychainAccessible: SecureStore.WHEN_UNLOCKED_THIS_DEVICE_ONLY,
});

// Recuperar
const token = await SecureStore.getItemAsync('auth_token');

// Deletar no logout
await SecureStore.deleteItemAsync('auth_token');
```

### 2. Variáveis de Ambiente

```bash
# .env (não commitado)
EXPO_PUBLIC_API_URL=https://api.example.com   # ✅ público, prefixo EXPO_PUBLIC_
SECRET_API_KEY=sk_live_xxx                     # ❌ nunca exponha no bundle
```

```tsx
// No código — só EXPO_PUBLIC_ é acessível
const apiUrl = process.env.EXPO_PUBLIC_API_URL; // ✅

// EAS Secrets (para builds) — nunca chegam no bundle cliente
// eas secret:create --scope project --name SECRET_API_KEY --value "..."
```

**Regra:** Se o dado pode comprometer a segurança se vazado, ele não deve existir no bundle do app. Use um backend proxy.

### 3. Comunicação de Rede

```tsx
// Certificate Pinning com react-native-ssl-pinning
import { fetch } from 'react-native-ssl-pinning';

const response = await fetch('https://api.example.com/data', {
  method: 'GET',
  sslPinning: {
    certs: ['cert_sha256_hash'], // Hash SHA256 do certificado
  },
});
```

- Sempre use HTTPS — nunca HTTP em produção
- Configure `NSAllowsArbitraryLoads: false` no iOS Info.plist
- Bloqueie domínios inseguros no `android:usesCleartextTraffic="false"` (AndroidManifest)
- Certificate pinning para APIs críticas (financeiro, saúde)
- Valide certificados SSL — não desabilite verificação SSL em produção

### 4. Proteção do Bundle

```json
// app.json — Hermes + ofuscação
{
  "expo": {
    "jsEngine": "hermes",
    "android": {
      "enableProguardInReleaseBuilds": true,
      "enableShrinkResourcesInReleaseBuilds": true
    }
  }
}
```

- Hermes já compila para bytecode (dificulta engenharia reversa)
- ProGuard/R8 no Android para ofuscação adicional
- Não armazene lógica crítica de negócio no cliente

### 5. Detecção de Ambiente Comprometido

```tsx
import * as Device from 'expo-device';

// Detectar ambiente de desenvolvimento/emulador
const isRealDevice = Device.isDevice;
const deviceType = await Device.getDeviceTypeAsync();

// Para apps que exigem device real (financeiro, saúde)
if (!Device.isDevice) {
  Alert.alert('Erro', 'Este app não pode ser executado em emuladores.');
  return;
}
```

Para detecção de jailbreak/root em apps críticos, use `jail-monkey` ou `react-native-jail-monkey`.

### 6. Permissões

```tsx
import { Camera } from 'expo-camera';
import * as Location from 'expo-location';

// Sempre explique antes de pedir
const requestCamera = async () => {
  // Mostre um modal explicando O QUE e POR QUÊ antes de requestPermissionsAsync
  const { status } = await Camera.requestCameraPermissionsAsync();
  if (status !== 'granted') {
    // Trate graciosamente — não quebre o fluxo
    return;
  }
};
```

**Info.plist (iOS) — strings obrigatórias:**
```json
{
  "NSCameraUsageDescription": "Usamos a câmera para escanear documentos.",
  "NSLocationWhenInUseUsageDescription": "Usamos sua localização para encontrar lojas próximas.",
  "NSPhotoLibraryUsageDescription": "Acesso à galeria para você escolher sua foto de perfil."
}
```

- Solicite permissões apenas quando o usuário estiver no contexto relevante
- Nunca solicite permissões na inicialização do app sem contexto
- Trate `denied` e `restricted` com fallback gracioso

### 7. Deep Links & Universal Links

```tsx
// Valide parâmetros de deep links — nunca confie cegamente
const { token } = useLocalSearchParams<{ token?: string }>();

// Valide formato antes de usar
if (token && /^[a-zA-Z0-9_-]{20,}$/.test(token)) {
  await verifyToken(token);
}
```

- Configure `associatedDomains` (iOS) e `assetlinks.json` (Android) para universal links
- Valide todos os parâmetros recebidos via deep link
- Não execute ações sensíveis (pagamentos, deleção) apenas com dados de deep link sem reautenticação

### 8. Autenticação & Sessão

```tsx
// Refresh token automático com interceptor
let isRefreshing = false;
let failedQueue: Array<{ resolve: Function; reject: Function }> = [];

api.interceptors.response.use(null, async (error) => {
  const originalRequest = error.config;

  if (error.response?.status === 401 && !originalRequest._retry) {
    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        failedQueue.push({ resolve, reject });
      });
    }

    originalRequest._retry = true;
    isRefreshing = true;

    try {
      const newToken = await refreshAccessToken();
      processQueue(null, newToken);
      return api(originalRequest);
    } catch (err) {
      processQueue(err, null);
      await logout(); // Força logout em falha de refresh
      throw err;
    } finally {
      isRefreshing = false;
    }
  }

  return Promise.reject(error);
});
```

- Token de acesso: vida curta (15min–1h)
- Refresh token: armazenado em SecureStore, rotação a cada uso
- Biometria: `expo-local-authentication` como camada adicional, não substituta
- Logout: apague TODOS os tokens e dados sensíveis do SecureStore

### 9. Validação de Dados

```tsx
import { z } from 'zod';

const UserSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  name: z.string().min(1).max(100),
});

// Valide respostas da API antes de usar
const parseUser = (data: unknown) => {
  const result = UserSchema.safeParse(data);
  if (!result.success) {
    throw new Error(`Invalid user data: ${result.error.message}`);
  }
  return result.data;
};
```

- Valide com Zod toda resposta de API antes de persistir no estado
- Sanitize inputs do usuário antes de enviar ao backend
- Nunca confie que o backend retornou o formato correto

### 10. Logs & Debugging em Produção

```tsx
// Nunca logue dados sensíveis
console.log('User logged in:', user.email); // ❌ em produção
console.log('Token:', token); // ❌ NUNCA

// Use um logger condicional
const log = __DEV__ ? console.log : () => {};
log('Debug info:', nonSensitiveData);

// Para crash reporting (Sentry), filtre PII
Sentry.configureScope((scope) => {
  scope.setUser({ id: user.id }); // ✅ só ID, sem email/nome
});
```

- Remova todos os `console.log` com dados sensíveis antes do build de produção
- Configure Sentry/Bugsnag com scrubbing de PII
- Desabilite o Flipper em builds de produção
