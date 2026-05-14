import { createMMKV } from 'react-native-mmkv';
import type { User } from '@/services/auth/types';

const storage = createMMKV();

const KEYS = {
  user: 'auth.user',
  token: 'auth.token',
} as const;

const authStorage = {
  getUser(): User | null {
    const raw = storage.getString(KEYS.user);
    if (!raw) return null;
    try {
      return JSON.parse(raw) as User;
    } catch {
      return null;
    }
  },
  setUser(user: User) {
    storage.set(KEYS.user, JSON.stringify(user));
  },
  getToken(): string | null {
    return storage.getString(KEYS.token) ?? null;
  },
  setToken(token: string) {
    storage.set(KEYS.token, token);
  },
  clear() {
    storage.remove(KEYS.user);
    storage.remove(KEYS.token);
  },
};

export { authStorage };
export default storage;
