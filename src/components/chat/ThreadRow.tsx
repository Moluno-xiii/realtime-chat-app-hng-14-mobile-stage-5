import { Pressable, Text, View } from 'react-native';
import { router } from 'expo-router';
import { Avatar, TypingDots } from '../ui';
import { AVATARS, Thread } from '@/constants';

const ThreadRow = ({ thread, isLast }: { thread: Thread; isLast: boolean }) => {
  const avatar = AVATARS[thread.who];
  return (
    <Pressable
      onPress={() => router.push(`/chat/${thread.id}`)}
      accessibilityRole="button"
      accessibilityLabel={`Open conversation with ${avatar.name}`}
      className="flex-row gap-3 py-3 active:bg-bg-2"
    >
      <View className="relative">
        <Avatar initials={avatar.initials} color={avatar.color} size={48} />
        {thread.online ? (
          <View className="absolute bottom-0 right-0 w-3 h-3 rounded-md bg-good border-2 border-bg" />
        ) : null}
      </View>
      <View className={`flex-1 min-w-0 pb-3 ${isLast ? '' : 'border-b border-line'}`}>
        <View className="flex-row items-baseline justify-between gap-2">
          <Text
            className="text-ink font-semibold"
            numberOfLines={1}
            style={{ fontSize: 16, letterSpacing: -0.16 }}
          >
            {avatar.name}
          </Text>
          <Text
            className={thread.unread ? 'text-accent' : 'text-ink-3'}
            style={{ fontSize: 11, fontFamily: 'JetBrainsMono, monospace' }}
          >
            {thread.time}
          </Text>
        </View>
        <View className="flex-row items-center justify-between gap-2 mt-1">
          <View className="flex-1 min-w-0 flex-row items-center gap-1.5">
            {thread.typing ? (
              <>
                <Text className="text-accent" style={{ fontSize: 14 }}>
                  typing
                </Text>
                <TypingDots color="#507EF1" />
              </>
            ) : (
              <Text className="text-ink-2" numberOfLines={1} style={{ fontSize: 14 }}>
                {thread.preview}
              </Text>
            )}
          </View>
          {thread.unread > 0 ? (
            <View className="min-w-5 h-5 px-1.5 rounded-full bg-accent items-center justify-center">
              <Text className="text-white font-semibold" style={{ fontSize: 11 }}>
                {thread.unread}
              </Text>
            </View>
          ) : null}
        </View>
      </View>
    </Pressable>
  );
};

export default ThreadRow;
