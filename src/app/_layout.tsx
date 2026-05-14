import '../global.css';
import { Stack } from 'expo-router';
import { HeroUINativeProvider } from 'heroui-native/provider';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useUniwind } from 'uniwind';
import AuthProvider from '@/contexts/AuthContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      gcTime: 60_000,
    },
  },
});

const RootLayout = () => {
  const { theme } = useUniwind();
  const bg = theme === 'dark' ? '#0e1217' : '#faf8f5';
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <GestureHandlerRootView>
          <SafeAreaProvider>
            <KeyboardProvider>
              <HeroUINativeProvider>
                <Stack
                  screenOptions={{
                    headerShown: false,
                    contentStyle: { backgroundColor: bg },
                  }}
                >
                  <Stack.Screen name="index" />
                </Stack>
              </HeroUINativeProvider>
            </KeyboardProvider>
          </SafeAreaProvider>
        </GestureHandlerRootView>
      </QueryClientProvider>
    </AuthProvider>
  );
};

export default RootLayout;
