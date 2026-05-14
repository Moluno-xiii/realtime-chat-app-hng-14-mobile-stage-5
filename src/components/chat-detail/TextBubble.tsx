import { View, Text } from 'react-native';
import { TextMessage } from '@/types/chatMessage';
import MessageMeta from './MessageMeta';
import ReactionPill from './ReactionPill';
import { bubbleRadius } from './bubbleRadius';

type TextBubbleProps = {
  msg: TextMessage;
  mine: boolean;
  groupEnd: boolean;
};

const TextBubble = ({ msg, mine, groupEnd }: TextBubbleProps) => {
  const radius = bubbleRadius(mine, groupEnd);
  return (
    <View
      className={mine ? 'items-end' : 'items-start'}
      style={{ maxWidth: '76%', gap: 4 }}
    >
      <View
        className={mine ? 'bg-bubble-me' : 'bg-bubble-them'}
        style={{
          paddingVertical: 9,
          paddingHorizontal: 13,
          ...radius,
        }}
      >
        <Text
          className={mine ? 'text-white' : 'text-ink'}
          style={{ fontSize: 15, lineHeight: 20, letterSpacing: -0.075 }}
        >
          {msg.text}
          {msg.edited ? (
            <Text
              className={mine ? 'text-white/70' : 'text-ink-3'}
              style={{ fontSize: 11, fontStyle: 'italic' }}
            >
              {'  '}(edited)
            </Text>
          ) : null}
        </Text>
      </View>
      <MessageMeta msg={msg} mine={mine} />
      <ReactionPill reactions={msg.reactions} />
    </View>
  );
};

export default TextBubble;
