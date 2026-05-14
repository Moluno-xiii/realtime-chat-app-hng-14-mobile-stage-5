import { useState } from 'react';
import { View } from 'react-native';
import { router } from 'expo-router';
import { Button, Input, Label, Spinner, TextField } from 'heroui-native';
import { AuthBrandHeader, AuthFooter, AuthFormError } from '@/components/auth';
import { SafeAreaWrapper } from '@/components/ui';
import useAuth from '@/hooks/useAuth';
import { handleError } from '@/contexts/AuthContext';

const SignupScreen = () => {
  const { signup } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    try {
      setError('');
      setLoading(true);
      if (name.trim().length < 2) {
        setError('Tell us your name');
        return;
      }
      if (password !== confirmPassword) {
        setError('Both password fields must match');
        return;
      }
      if (!email.includes('@')) {
        setError('Enter a valid email address');
        return;
      }
      if (password.length < 6) {
        setError('Password must be at least 6 characters');
        return;
      }
      await signup({ email, password, fullName: name });
      router.replace('/(tabs)');
    } catch (e) {
      const error = handleError(e);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaWrapper scrollViewClassName="px-4 pt-12 pb-8">
      <AuthBrandHeader title="Make an account." subtitle="Takes about 20 seconds." />

      <View className="gap-3.5">
        <TextField>
          <Label>Full name</Label>
          <Input
            value={name}
            onChangeText={setName}
            placeholder="James gunn"
            autoCapitalize="words"
            autoFocus
          />
        </TextField>

        <TextField>
          <Label>Email</Label>
          <Input
            value={email}
            onChangeText={setEmail}
            placeholder="gunn@marvel.org"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
        </TextField>

        <TextField>
          <Label>Password</Label>
          <Input
            value={password}
            onChangeText={setPassword}
            placeholder="At least 6 characters"
            secureTextEntry
          />
        </TextField>

        <TextField>
          <Label>Confirm Password</Label>
          <Input
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="At least 6 characters"
            secureTextEntry
          />
        </TextField>
      </View>

      {error ? <AuthFormError message={error} /> : null}

      <Button
        variant="primary"
        size="lg"
        onPress={submit}
        isDisabled={loading}
        className="mt-6 py-4"
      >
        {loading ? <Spinner size="sm" /> : null}
        <Button.Label>{loading ? 'Creating account…' : 'Create account'}</Button.Label>
      </Button>

      <View className="flex-1" />

      <AuthFooter prompt="Already have one?" actionLabel="Sign in" href="/(auth)/login" />
    </SafeAreaWrapper>
  );
};

export default SignupScreen;
