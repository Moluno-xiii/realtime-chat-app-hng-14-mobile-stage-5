import { cn } from 'heroui-native';
import { ReactNode } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import { SafeAreaView, SafeAreaViewProps } from 'react-native-safe-area-context';
import { withUniwind } from 'uniwind';

const UniWindSafeAreaView = withUniwind(SafeAreaView);
const UniWindKeyboardAwareScrollView = withUniwind(KeyboardAwareScrollView);

type SafeAreaWrapperProps = SafeAreaViewProps & {
  children: ReactNode;
  className?: string;
  scrollViewClassName?: string;
  scrollable?: boolean;
  /** Distance between the focused input and the top of the keyboard, in px. */
  bottomOffset?: number;
};

const SafeAreaWrapper = ({
  children,
  className,
  scrollViewClassName,
  scrollable = true,
  bottomOffset = 120,
  ...props
}: SafeAreaWrapperProps) => (
  <UniWindSafeAreaView className={cn('flex-1 bg-bg', className)} {...props}>
    {scrollable ? (
      <UniWindKeyboardAwareScrollView
        contentContainerClassName={cn('grow', scrollViewClassName)}
        keyboardShouldPersistTaps="handled"
        bottomOffset={bottomOffset}
      >
        {children}
      </UniWindKeyboardAwareScrollView>
    ) : (
      children
    )}
  </UniWindSafeAreaView>
);

export default SafeAreaWrapper;
