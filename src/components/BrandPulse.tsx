import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { BrandMark } from './ui';
import { useEffect } from 'react';

const BrandPulse = () => {
  const s = useSharedValue(1);

  useEffect(() => {
    s.value = withDelay(
      300,
      withRepeat(
        withSequence(
          withTiming(1.08, { duration: 800 }),
          withTiming(1, { duration: 800 }),
        ),
        -1,
        false,
      ),
    );
  }, [s]);

  const style = useAnimatedStyle(() => ({
    transform: [{ scale: s.value }],
  }));

  return (
    <Animated.View style={style}>
      <BrandMark size={76} />
    </Animated.View>
  );
};

export default BrandPulse;
