import { useEffect } from 'react';
import { View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
  withDelay,
} from 'react-native-reanimated';

type TypingDotsProps = {
  color?: string;
  size?: number;
};

const Dot = ({ color, size, delay }: { color: string; size: number; delay: number }) => {
  const t = useSharedValue(0);

  useEffect(() => {
    t.value = withDelay(
      delay,
      withRepeat(
        withSequence(withTiming(1, { duration: 360 }), withTiming(0, { duration: 840 })),
        -1,
        false,
      ),
    );
  }, [delay, t]);

  const style = useAnimatedStyle(() => ({
    opacity: 0.25 + t.value * 0.75,
    transform: [{ translateY: -3 * t.value }],
  }));

  return (
    <Animated.View
      style={[
        { width: size, height: size, borderRadius: size / 2, backgroundColor: color },
        style,
      ]}
    />
  );
};

const TypingDots = ({ color = '#7C8088', size = 6 }: TypingDotsProps) => (
  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
    <Dot color={color} size={size} delay={0} />
    <Dot color={color} size={size} delay={180} />
    <Dot color={color} size={size} delay={360} />
  </View>
);

export default TypingDots;
