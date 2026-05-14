import { View, Text } from 'react-native';
import { ImageMessage } from '@/types/chatMessage';
import MessageMeta from './MessageMeta';
import ReactionPill from './ReactionPill';
import PhotoPlaceholder from './PhotoPlaceholder';
import { bubbleRadius } from './bubbleRadius';

type ImageBubbleProps = {
  msg: ImageMessage;
  mine: boolean;
  groupEnd: boolean;
};

const ImageBubble = ({ msg, mine, groupEnd }: ImageBubbleProps) => {
  const radius = bubbleRadius(mine, groupEnd);
  const tone = mine ? 265 : 25;
  return (
    <View className={mine ? 'items-end' : 'items-start'} style={{ gap: 6 }}>
      <View style={{ ...radius, overflow: 'hidden', position: 'relative' }}>
        <PhotoPlaceholder label={msg.alt} tone={tone} width={240} radius={0} />
        {msg.compressed ? (
          <View
            className="absolute flex-row items-center"
            style={{
              top: 8,
              right: 8,
              backgroundColor: 'rgba(0,0,0,0.55)',
              paddingHorizontal: 7,
              paddingVertical: 3,
              borderRadius: 6,
              gap: 4,
            }}
          >
            <Text
              style={{
                color: 'rgba(255,255,255,0.92)',
                fontSize: 10,
                letterSpacing: 0.2,
                fontFamily: 'JetBrainsMono, monospace',
              }}
            >
              {msg.compressed.from} → {msg.compressed.to}
            </Text>
          </View>
        ) : null}
      </View>
      {msg.caption ? (
        <Text className="text-ink-2 px-1" style={{ fontSize: 13, maxWidth: 240 }}>
          {msg.caption}
        </Text>
      ) : null}
      <MessageMeta msg={msg} mine={mine} />
      <ReactionPill reactions={msg.reactions} />
    </View>
  );
};

export default ImageBubble;
