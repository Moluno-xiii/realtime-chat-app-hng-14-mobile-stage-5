import { Pressable, View } from 'react-native';
import { Avatar } from '@/components/ui';
import { AVATARS } from '@/constants';
import { ChatMessage } from '@/types/chatMessage';
import TextBubble from './TextBubble';
import ImageBubble from './ImageBubble';
import AudioBubble from './AudioBubble';
import DeletedBubble from './DeletedBubble';

type MessageRowProps = {
  msg: ChatMessage;
  groupStart: boolean;
  groupEnd: boolean;
  onLongPress?: (msg: ChatMessage) => void;
};

const MessageRow = ({ msg, groupStart, groupEnd, onLongPress }: MessageRowProps) => {
  const mine = msg.from === 'me';

  if (msg.deletedForEveryone) return <DeletedBubble mine={mine} />;
  if (msg.deletedForMe && mine) return <DeletedBubble mine={mine} forMe />;

  const avatar = AVATARS[msg.from];

  const bubble =
    msg.kind === 'text' ? (
      <TextBubble msg={msg} mine={mine} groupEnd={groupEnd} />
    ) : msg.kind === 'image' ? (
      <ImageBubble msg={msg} mine={mine} groupEnd={groupEnd} />
    ) : (
      <AudioBubble msg={msg} mine={mine} groupEnd={groupEnd} />
    );

  return (
    <View
      className={mine ? 'flex-row items-end justify-end' : 'flex-row items-end'}
      style={{
        gap: 8,
        marginTop: groupStart ? 8 : 1,
      }}
    >
      {!mine ? (
        <View style={{ width: 26, opacity: groupEnd ? 1 : 0 }}>
          <Avatar initials={avatar.initials} color={avatar.color} size={26} />
        </View>
      ) : null}
      <Pressable
        onLongPress={() => onLongPress?.(msg)}
        delayLongPress={380}
        accessibilityLabel="Hold to react or manage message"
      >
        {bubble}
      </Pressable>
    </View>
  );
};

export default MessageRow;
