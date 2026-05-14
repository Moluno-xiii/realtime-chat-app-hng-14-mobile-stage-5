import { firebaseAuth } from '@/firebase';
import { FirebaseError } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { LoginDTO, SignupDTO } from './types';

class AuthService {
  async login(data: LoginDTO) {
    console.log('login attempt made');
    // const data = await customTryCatch('');
    try {
      const request = await signInWithEmailAndPassword(
        firebaseAuth,
        data.email,
        data.password,
      );
      console.log('logindata', request);
      return request;
    } catch (e) {
      const error =
        e instanceof FirebaseError
          ? e.message
          : e instanceof Error
            ? e.message
            : 'Unexpected auth error';
      console.error('Auth error', e);
      throw new Error(error);
    }
  }

  async signup(data: SignupDTO) {
    try {
      const request = await createUserWithEmailAndPassword(
        firebaseAuth,
        data.email,
        data.password,
      );
      await updateProfile(request.user, { displayName: data.fullName });
      return request;
    } catch (e) {
      const error =
        e instanceof FirebaseError
          ? e.message
          : e instanceof Error
            ? e.message
            : 'Unexpected auth error';
      console.error('Auth error', e);
      throw new Error(error);
    }
  }

  async logout() {
    await signOut(firebaseAuth);
  }
}

const authService = new AuthService();

export default authService;
