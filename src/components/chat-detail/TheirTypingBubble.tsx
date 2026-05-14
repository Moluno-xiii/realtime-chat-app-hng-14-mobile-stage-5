import { View } from 'react-native';
import { Avatar, TypingDots } from '@/components/ui';
import { AVATARS, AvatarKey } from '@/constants';

type TheirTypingBubbleProps = { who: AvatarKey };

const TheirTypingBubble = ({ who }: TheirTypingBubbleProps) => {
  const avatar = AVATARS[who];
  return (
    <View className="flex-row items-end" style={{ gap: 8, marginTop: 4 }}>
      <Avatar initials={avatar.initials} color={avatar.color} size={26} />
      <View
        className="bg-bubble-them border border-line"
        style={{
          paddingVertical: 12,
          paddingHorizontal: 14,
          borderTopLeftRadius: 18,
          borderTopRightRadius: 18,
          borderBottomLeftRadius: 6,
          borderBottomRightRadius: 18,
        }}
      >
        <TypingDots />
      </View>
    </View>
  );
};

export default TheirTypingBubble;
