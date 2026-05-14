import { View, Text } from 'react-native';

type DeletedBubbleProps = {
  mine: boolean;
  forMe?: boolean;
};

const DeletedBubble = ({ mine, forMe }: DeletedBubbleProps) => (
  <View className={mine ? 'items-end' : 'items-start'} style={{ marginTop: 4 }}>
    <View
      className="border border-dashed border-line"
      style={{
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 14,
      }}
    >
      <Text className="text-ink-3" style={{ fontSize: 13, fontStyle: 'italic' }}>
        {forMe || mine ? 'You deleted this message' : 'This message was deleted'}
      </Text>
    </View>
  </View>
);

export default DeletedBubble;
