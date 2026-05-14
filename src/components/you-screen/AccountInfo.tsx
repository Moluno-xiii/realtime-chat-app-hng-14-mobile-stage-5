import { Surface } from 'heroui-native/surface';
import { View, Text } from 'react-native';
import { Avatar } from '../ui';
import { EditIcon } from '../ui/icons';
import { AVATARS } from '@/constants';

const AccountInfo = () => {
  const me = AVATARS.me;
  return (
    <View className="mb-6 mt-3">
      <Surface className="rounded-2xl p-4.5 flex-row items-center gap-3.5">
        <View className="relative">
          <Avatar initials={me.initials} color={me.color} size={58} />
          <View
            className="absolute rounded-full bg-accent items-center justify-center border-2 border-bg"
            style={{ width: 22, height: 22, bottom: -2, right: -2 }}
          >
            <EditIcon color="#fff" size={12} />
          </View>
        </View>
        <View className="flex-1 min-w-0">
          <Text
            className="text-ink font-semibold"
            style={{ fontSize: 17, letterSpacing: -0.17 }}
          >
            Demo Account
          </Text>
          <Text className="text-ink-3 mt-0.5" style={{ fontSize: 13 }}>
            demo@pulse.app
          </Text>
          <View className="flex-row items-center gap-1.5 mt-1.5">
            <View className="w-1.5 h-1.5 rounded-full bg-good" />
            <Text className="text-ink-2 font-medium" style={{ fontSize: 12 }}>
              Available
            </Text>
          </View>
        </View>
      </Surface>
    </View>
  );
};

export default AccountInfo;
