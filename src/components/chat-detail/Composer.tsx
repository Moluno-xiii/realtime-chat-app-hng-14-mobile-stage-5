import { Pressable, TextInput, View } from 'react-native';
import { useUniwind } from 'uniwind';
import { CheckIcon, MicIcon, PlusIcon, SendIcon } from '@/components/ui/icons';

type ComposerProps = {
  draft: string;
  setDraft: (v: string) => void;
  onSend: () => void;
  onAttach?: () => void;
  onStartRecord?: () => void;
  editing?: boolean;
};

const Composer = ({
  draft,
  setDraft,
  onSend,
  onAttach,
  onStartRecord,
  editing = false,
}: ComposerProps) => {
  const { theme } = useUniwind();
  const ink = theme === 'dark' ? '#f3f1ee' : '#12161d';
  const ink2 = theme === 'dark' ? '#b4b7bd' : '#44484e';
  const canSend = draft.trim().length > 0;

  return (
    <View
      className="flex-row items-end bg-bg border-t border-line"
      style={{
        paddingHorizontal: 12,
        paddingTop: 8,
        paddingBottom: 8,
        gap: 8,
      }}
    >
      <Pressable
        onPress={onAttach}
        accessibilityLabel="Attach media"
        className="bg-bg-2 items-center justify-center active:opacity-80"
        style={{ width: 38, height: 38, borderRadius: 19 }}
      >
        <PlusIcon color={ink2} size={20} />
      </Pressable>

      <View
        className="flex-1 bg-bg-2 flex-row items-center"
        style={{
          borderRadius: 20,
          paddingHorizontal: 12,
          paddingVertical: 6,
          minHeight: 38,
          maxHeight: 100,
          gap: 8,
        }}
      >
        <TextInput
          value={draft}
          onChangeText={setDraft}
          placeholder="Message"
          placeholderTextColor="#7c8088"
          multiline
          style={{
            flex: 1,
            fontSize: 15,
            color: ink,
            paddingTop: 4,
            paddingBottom: 4,
            maxHeight: 80,
          }}
        />
      </View>

      {canSend ? (
        <Pressable
          onPress={onSend}
          accessibilityLabel={editing ? 'Save edit' : 'Send message'}
          className="bg-accent items-center justify-center active:opacity-80"
          style={{ width: 38, height: 38, borderRadius: 19 }}
        >
          {editing ? (
            <CheckIcon color="#fff" size={18} />
          ) : (
            <SendIcon color="#fff" size={20} />
          )}
        </Pressable>
      ) : (
        <Pressable
          onPress={onStartRecord}
          accessibilityLabel="Record voice note"
          className="bg-bg-2 items-center justify-center active:opacity-80"
          style={{ width: 38, height: 38, borderRadius: 19 }}
        >
          <MicIcon color={ink2} size={20} />
        </Pressable>
      )}
    </View>
  );
};

export default Composer;
