import { ReactNode } from 'react';
import { Pressable } from 'react-native';

type IconButtonProps = {
  children: ReactNode;
  onPress?: () => void;
  accessibilityLabel?: string;
};

const IconButton = ({ children, onPress, accessibilityLabel }: IconButtonProps) => (
  <Pressable
    onPress={onPress}
    accessibilityLabel={accessibilityLabel}
    accessibilityRole="button"
    className="size-10 rounded-xl bg-bg-2 items-center justify-center active:opacity-80"
  >
    {children}
  </Pressable>
);

export default IconButton;
