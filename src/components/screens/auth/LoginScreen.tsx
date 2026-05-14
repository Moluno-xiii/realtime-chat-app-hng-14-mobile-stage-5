import { useState } from 'react';
import { View } from 'react-native';
import { router } from 'expo-router';
import { Button, Input, Label, Spinner, TextField } from 'heroui-native';
import { AuthBrandHeader, AuthFooter, AuthFormError } from '@/components/auth';
import { SafeAreaWrapper } from '@/components/ui';

const LoginScreen = () => {
  const [email, setEmail] = useState('demo@pulse.app');
  const [password, setPassword] = useState('demo1234');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = () => {
    setError('');
    if (!email.includes('@')) {
      setError('Enter a valid email address');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.replace('/chats');
    }, 900);
  };

  return (
    <SafeAreaWrapper scrollViewClassName="px-4 pt-12 pb-8">
      <AuthBrandHeader
        title="Welcome back."
        subtitle="Sign in to pick up where you left off."
      />

      <View className="gap-3.5">
        <TextField>
          <Label>Email</Label>
          <Input
            value={email}
            onChangeText={setEmail}
            placeholder="you@domain.com"
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
      </View>

      {error ? <AuthFormError message={error} /> : null}

      <Button
        variant="primary"
        className="mt-10"
        size="lg"
        onPress={submit}
        isDisabled={loading}
      >
        {loading ? <Spinner size="sm" /> : null}
        <Button.Label>{loading ? 'Signing in…' : 'Sign in'}</Button.Label>
      </Button>

      <View className="flex-1" />

      <AuthFooter
        prompt="Don't have an account?"
        actionLabel="Sign up"
        href="/(auth)/signup"
      />
    </SafeAreaWrapper>
  );
};

export default LoginScreen;
