import { useEffect } from 'react';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

const PulseRing = ({ delay }: { delay: number }) => {
  const t = useSharedValue(0);

  useEffect(() => {
    t.value = withDelay(
      delay,
      withRepeat(
        withTiming(1, { duration: 2400, easing: Easing.out(Easing.cubic) }),
        -1,
        false,
      ),
    );
  }, [delay, t]);

  const style = useAnimatedStyle(() => ({
    transform: [{ scale: 0.4 + t.value * 1.2 }],
    opacity: t.value < 0.2 ? t.value * 2.5 : Math.max(0, 0.5 - (t.value - 0.2) * 0.625),
  }));

  return (
    <Animated.View
      style={[
        {
          position: 'absolute',
          width: 200,
          height: 200,
          borderRadius: 100,
          borderWidth: 1.5,
          borderColor: '#507EF1',
        },
        style,
      ]}
    />
  );
};

export default PulseRing;
