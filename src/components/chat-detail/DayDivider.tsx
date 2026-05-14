import { View, Text } from 'react-native';

type DayDividerProps = { label: string };

const DayDivider = ({ label }: DayDividerProps) => (
  <View className="items-center justify-center" style={{ marginVertical: 14 }}>
    <View
      className="bg-bg-2"
      style={{ paddingVertical: 4, paddingHorizontal: 10, borderRadius: 12 }}
    >
      <Text
        className="text-ink-3 font-medium"
        style={{ fontSize: 11.5, letterSpacing: 0.1 }}
      >
        {label}
      </Text>
    </View>
  </View>
);

export default DayDivider;
