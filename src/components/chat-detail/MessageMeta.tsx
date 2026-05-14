import { View, Text } from 'react-native';
import { StatusTick } from '@/components/ui';
import { ChatMessage } from '@/types/chatMessage';

type MessageMetaProps = {
  msg: ChatMessage;
  mine: boolean;
};

const MessageMeta = ({ msg, mine }: MessageMetaProps) => (
  <View className="flex-row items-center gap-1 px-1" style={{ height: 14 }}>
    <Text
      className="text-ink-3"
      style={{ fontSize: 11, fontFamily: 'JetBrainsMono, monospace' }}
    >
      {msg.time}
    </Text>
    {mine ? (
      <View className="ml-0.5">
        <StatusTick status={msg.status} />
      </View>
    ) : null}
  </View>
);

export default MessageMeta;
