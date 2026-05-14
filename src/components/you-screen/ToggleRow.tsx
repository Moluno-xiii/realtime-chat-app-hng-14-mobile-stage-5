import { Separator } from 'heroui-native/separator';
import { Switch } from 'heroui-native/switch';
import { View, Text } from 'react-native';

const ToggleRow = ({
  label,
  sub,
  value,
  onChange,
  isLast,
}: {
  label: string;
  sub?: string;
  value: boolean;
  onChange: (v: boolean) => void;
  isLast?: boolean;
}) => (
  <>
    <View className="flex-row items-center gap-3 px-4 py-3.5">
      <View className="flex-1 min-w-0">
        <Text className="text-ink font-medium" style={{ fontSize: 15 }}>
          {label}
        </Text>
        {sub ? (
          <Text className="text-ink-3 mt-0.5" style={{ fontSize: 12 }}>
            {sub}
          </Text>
        ) : null}
      </View>
      <Switch isSelected={value} onSelectedChange={onChange} />
    </View>
    {isLast ? null : <Separator className="ml-4" />}
  </>
);

export default ToggleRow;
