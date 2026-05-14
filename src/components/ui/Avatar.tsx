import { View, Text } from 'react-native';
import { cn } from 'heroui-native';

type AvatarProps = {
  initials: string;
  color: string;
  size?: number;
  ring?: boolean;
  className?: string;
};

const Avatar = ({ initials, color, size = 40, ring = false, className }: AvatarProps) => (
  <View
    className={cn('items-center justify-center', ring && 'border-2 border-bg', className)}
    style={{
      width: size,
      height: size,
      borderRadius: size / 2,
      backgroundColor: color,
    }}
  >
    <Text
      className="font-semibold text-white"
      style={{ fontSize: size * 0.36, letterSpacing: -0.5 }}
    >
      {initials}
    </Text>
  </View>
);

export default Avatar;
