import { Pressable, Text, View } from 'react-native';
import { CheckIcon } from '../ui/icons';
import { Separator } from 'heroui-native/separator';

const StatusRow = ({
  active,
  color,
  title,
  sub,
  onPress,
  isLast,
}: {
  active: boolean;
  color: string;
  title: string;
  sub: string;
  onPress: () => void;
  isLast?: boolean;
}) => (
  <>
    <Pressable
      onPress={onPress}
      className="flex-row items-center gap-3 px-4 py-3.5 active:bg-bg-2"
    >
      <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: color }} />
      <View className="flex-1 min-w-0">
        <Text className="text-ink font-medium" style={{ fontSize: 15 }}>
          {title}
        </Text>
        <Text className="text-ink-3 mt-0.5" style={{ fontSize: 12 }}>
          {sub}
        </Text>
      </View>
      <View
        className={`w-5 h-5 rounded-full items-center justify-center ${
          active ? 'bg-accent' : 'border-2 border-line'
        }`}
      >
        {active ? <CheckIcon color="#fff" size={12} /> : null}
      </View>
    </Pressable>
    {isLast ? null : <Separator className="ml-4" />}
  </>
);

export default StatusRow;
