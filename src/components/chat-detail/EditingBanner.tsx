import { Pressable, Text, View } from 'react-native';
import { CloseIcon, EditIcon } from '@/components/ui/icons';

type EditingBannerProps = {
  preview: string;
  onCancel: () => void;
};

const EditingBanner = ({ preview, onCancel }: EditingBannerProps) => (
  <View
    className="flex-row items-center bg-bg-2 border-t border-line"
    style={{ paddingHorizontal: 12, paddingVertical: 8, gap: 10 }}
  >
    <EditIcon color="#507EF1" size={14} />
    <View className="flex-1 min-w-0">
      <Text className="text-accent" style={{ fontSize: 12, fontWeight: '600' }}>
        Editing message
      </Text>
      <Text
        className="text-ink-2"
        numberOfLines={1}
        style={{ fontSize: 13, marginTop: 1 }}
      >
        {preview}
      </Text>
    </View>
    <Pressable
      onPress={onCancel}
      accessibilityLabel="Cancel edit"
      className="items-center justify-center active:opacity-70"
      style={{ width: 28, height: 28, borderRadius: 14 }}
    >
      <CloseIcon color="#44484E" size={14} />
    </Pressable>
  </View>
);

export default EditingBanner;
