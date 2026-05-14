import { Pressable, Text, View } from 'react-native';
import { Avatar, IconButton, TypingDots } from '@/components/ui';
import { BackIcon, SearchIcon, VideoIcon } from '@/components/ui/icons';
import { AVATARS, Thread } from '@/constants';

type ChatDetailHeaderProps = {
  thread: Thread;
  typing: boolean;
  onBack: () => void;
};

const ChatDetailHeader = ({ thread, typing, onBack }: ChatDetailHeaderProps) => {
  const avatar = AVATARS[thread.who];

  return (
    <View
      className="flex-row items-center bg-bg border-b border-line"
      style={{ paddingTop: 12, paddingBottom: 12, paddingHorizontal: 14, gap: 10 }}
    >
      <Pressable
        onPress={onBack}
        accessibilityLabel="Back"
        accessibilityRole="button"
        className="items-center justify-center active:opacity-70"
        style={{ width: 36, height: 36, borderRadius: 12 }}
      >
        <BackIcon color="#12161d" size={18} />
      </Pressable>

      <View className="relative">
        <Avatar initials={avatar.initials} color={avatar.color} size={38} />
        {thread.online ? (
          <View className="absolute bottom-0 right-0 w-3 h-3 rounded-md bg-good border-2 border-bg" />
        ) : null}
      </View>

      <View className="flex-1 min-w-0">
        <Text
          className="text-ink font-semibold"
          numberOfLines={1}
          style={{ fontSize: 15.5, letterSpacing: -0.155 }}
        >
          {avatar.name}
        </Text>
        <View className="flex-row items-center" style={{ gap: 6, height: 16 }}>
          {typing ? (
            <>
              <Text className="text-accent" style={{ fontSize: 12 }}>
                typing
              </Text>
              <TypingDots color="#507EF1" size={4} />
            </>
          ) : (
            <Text className="text-ink-3" style={{ fontSize: 12 }}>
              {thread.online ? 'Active now' : 'Last seen 10m ago'}
            </Text>
          )}
        </View>
      </View>

      <IconButton accessibilityLabel="Search in conversation">
        <SearchIcon color="#44484E" size={18} />
      </IconButton>
      <IconButton accessibilityLabel="Start video call">
        <VideoIcon color="#44484E" size={20} />
      </IconButton>
    </View>
  );
};

export default ChatDetailHeader;
