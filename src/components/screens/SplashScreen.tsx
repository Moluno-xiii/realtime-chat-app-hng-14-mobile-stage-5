import { useEffect } from 'react';
import { View, Text } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaWrapper, TypingDots } from '@/components/ui';
import PulseRing from '../PulseRing';
import BrandPulse from '../BrandPulse';

const SplashScreen = () => {
  useEffect(() => {
    const t = setTimeout(() => router.replace('/(auth)/login'), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <SafeAreaWrapper scrollable={false}>
      <View className="flex-1 items-center justify-center relative overflow-hidden">
        <View className="absolute items-center justify-center" style={{ top: '38%' }}>
          <PulseRing delay={0} />
          <PulseRing delay={600} />
          <PulseRing delay={1200} />
        </View>

        <View className="items-center" style={{ marginTop: -32 }}>
          <BrandPulse />
          <Text
            className="mt-7 text-ink font-bold"
            style={{ fontSize: 30, letterSpacing: -0.75 }}
          >
            pulse
          </Text>
          <Text className="mt-1.5 text-ink-3" style={{ fontSize: 13 }}>
            Honest messaging.
          </Text>
        </View>

        <View className="absolute bottom-20 left-0 right-0 items-center">
          <TypingDots />
        </View>
      </View>
    </SafeAreaWrapper>
  );
};

export default SplashScreen;
