import { Separator } from 'heroui-native/separator';
import { Text, Pressable } from 'react-native';
import { ChevronRightIcon } from '../ui/icons';

const SettingRow = ({
  label,
  detail,
  onPress,
  isLast,
}: {
  label: string;
  detail?: string;
  onPress?: () => void;
  isLast?: boolean;
}) => (
  <>
    <Pressable
      onPress={onPress}
      className="flex-row items-center gap-3 px-4 py-3.5 active:bg-bg-2"
    >
      <Text className="flex-1 text-ink font-medium" style={{ fontSize: 15 }}>
        {label}
      </Text>
      {detail ? (
        <Text className="text-ink-3" style={{ fontSize: 13 }}>
          {detail}
        </Text>
      ) : null}
      <ChevronRightIcon color="#7C8088" />
    </Pressable>
    {isLast ? null : <Separator className="ml-4" />}
  </>
);

export default SettingRow;
