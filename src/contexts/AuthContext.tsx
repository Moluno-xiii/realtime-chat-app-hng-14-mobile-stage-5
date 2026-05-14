import authService from '@/services/auth';
import { firebaseAuth } from '@/firebase';
import { authStorage } from '@/lib/storage';
import { LoginDTO, SignupDTO, User } from '@/services/auth/types';
import { FirebaseError } from 'firebase/app';
import { onIdTokenChanged, User as FirebaseUser } from 'firebase/auth';
import { createContext, ReactNode, useEffect, useState } from 'react';

type AuthContextType = {
  user: User | null | undefined;
  isLoading: LoadingState | null;
  signup: (data: SignupDTO) => Promise<void>;
  login: (data: LoginDTO) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const toUser = (fb: FirebaseUser): User => ({
  id: fb.uid,
  email: fb.email ?? '',
  displayName: fb.displayName ?? '',
});

const persist = async (fb: FirebaseUser) => {
  const next = toUser(fb);
  authStorage.setUser(next);
  try {
    const token = await fb.getIdToken();
    authStorage.setToken(token);
  } catch {
    // token fetch can fail offline; keep the cached user
  }
  return next;
};

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AuthContextType['user']>(() => authStorage.getUser());
  const [isLoading, setIsLoading] = useState<LoadingState | null>(null);

  useEffect(() => {
    const unsubscribe = onIdTokenChanged(firebaseAuth, async (fb) => {
      if (!fb) return;
      const next = await persist(fb);
      setUser(next);
    });
    return unsubscribe;
  }, []);

  const login = async (loginData: LoginDTO) => {
    try {
      setIsLoading('login');
      await authService.login(loginData);
      if (firebaseAuth.currentUser) {
        const next = await persist(firebaseAuth.currentUser);
        setUser(next);
      }
    } catch (e) {
      throw new Error(handleError(e));
    } finally {
      setIsLoading(null);
    }
  };

  const signup = async (signupData: SignupDTO) => {
    try {
      setIsLoading('signup');
      await authService.signup(signupData);
      if (firebaseAuth.currentUser) {
        const next = await persist(firebaseAuth.currentUser);
        setUser(next);
      }
    } catch (e) {
      throw new Error(handleError(e));
    } finally {
      setIsLoading(null);
    }
  };

  const logout = async () => {
    try {
      setIsLoading('logout');
      await authService.logout();
      authStorage.clear();
      setUser(null);
    } catch (e) {
      throw new Error(handleError(e));
    } finally {
      setIsLoading(null);
    }
  };

  const returnValues = { user, isLoading, signup, login, logout };

  return <AuthContext.Provider value={returnValues}>{children}</AuthContext.Provider>;
};

export { AuthContext, handleError };
export default AuthProvider;

type LoadingState = 'init' | 'logout' | 'login' | 'signup';

const handleError = (e: unknown) => {
  return e instanceof FirebaseError
    ? e.message
    : e instanceof Error
      ? e.message
      : 'Unexpected error';
};
