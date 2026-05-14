import { ReactNode } from 'react';
import { View, Text } from 'react-native';

type ScreenHeaderProps = {
  title: string;
  trailing?: ReactNode;
};

const ScreenHeader = ({ title, trailing }: ScreenHeaderProps) => (
  <View className="flex-row items-center justify-between pt-4 pb-2">
    <Text className="text-ink font-bold" style={{ fontSize: 30, letterSpacing: -0.75 }}>
      {title}
    </Text>
    {trailing ? <View className="flex-row gap-2">{trailing}</View> : null}
  </View>
);

export default ScreenHeader;
