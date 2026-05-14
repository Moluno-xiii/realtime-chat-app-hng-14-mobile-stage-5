import { View, Text } from 'react-native';
import { ChatReactions } from '@/types/chatMessage';

type ReactionPillProps = {
  reactions?: ChatReactions;
};

const ReactionPill = ({ reactions }: ReactionPillProps) => {
  if (!reactions || Object.keys(reactions).length === 0) return null;
  return (
    <View className="flex-row gap-1 px-1">
      {Object.entries(reactions).map(([emoji, users]) => {
        const mine = users.includes('me');
        return (
          <View
            key={emoji}
            className={
              mine
                ? 'flex-row items-center gap-1 px-1.5 py-0.5 rounded-[10px] border border-accent'
                : 'flex-row items-center gap-1 px-1.5 py-0.5 rounded-[10px] border border-line bg-bg-2'
            }
            style={mine ? { backgroundColor: 'rgba(80,126,241,0.12)' } : undefined}
          >
            <Text style={{ fontSize: 13 }}>{emoji}</Text>
            <Text className="text-ink-2 font-medium" style={{ fontSize: 12 }}>
              {users.length}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default ReactionPill;
