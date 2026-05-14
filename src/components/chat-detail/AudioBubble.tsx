import { View } from 'react-native';
import { AudioMessage } from '@/types/chatMessage';
import MessageMeta from './MessageMeta';
import ReactionPill from './ReactionPill';
import AudioPlayer from './AudioPlayer';
import { bubbleRadius } from './bubbleRadius';

type AudioBubbleProps = {
  msg: AudioMessage;
  mine: boolean;
  groupEnd: boolean;
};

const AudioBubble = ({ msg, mine, groupEnd }: AudioBubbleProps) => {
  const radius = bubbleRadius(mine, groupEnd);
  return (
    <View className={mine ? 'items-end' : 'items-start'} style={{ gap: 4 }}>
      <View
        className={mine ? 'bg-bubble-me' : 'bg-bubble-them'}
        style={{
          paddingVertical: 8,
          paddingHorizontal: 12,
          ...radius,
        }}
      >
        <AudioPlayer duration={msg.duration} mine={mine} />
      </View>
      <MessageMeta msg={msg} mine={mine} />
      <ReactionPill reactions={msg.reactions} />
    </View>
  );
};

export default AudioBubble;
