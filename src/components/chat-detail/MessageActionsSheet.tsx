import { ReactNode } from 'react';
import { Pressable, Text, View } from 'react-native';
import { BottomSheet } from 'heroui-native';
import { CopyIcon, EditIcon, ReplyIcon, TrashIcon } from '@/components/ui/icons';
import { EMOJI_QUICK } from '@/constants';
import { ChatMessage } from '@/types/chatMessage';

type MessageActionsSheetProps = {
  msg: ChatMessage | null;
  onClose: () => void;
  onReact: (emoji: string) => void;
  onReply: () => void;
  onCopy: () => void;
  onEdit: () => void;
  onDelete: (scope: 'me' | 'everyone') => void;
};

type ActionRow = {
  key: string;
  label: string;
  icon: ReactNode;
  onPress: () => void;
  danger?: boolean;
};

type SheetRowProps = ActionRow & { isLast: boolean };

const SheetRow = ({ icon, label, onPress, danger, isLast }: SheetRowProps) => (
  <Pressable
    onPress={onPress}
    accessibilityRole="button"
    className={`flex-row items-center active:bg-bg ${isLast ? '' : 'border-b border-line'}`}
    style={{ paddingHorizontal: 16, paddingVertical: 14, gap: 12 }}
  >
    <View style={{ width: 22, alignItems: 'center' }}>{icon}</View>
    <Text
      className={danger ? 'text-danger' : 'text-ink'}
      style={{ fontSize: 15, fontWeight: '500' }}
    >
      {label}
    </Text>
  </Pressable>
);

const buildRows = (
  msg: ChatMessage,
  handlers: Pick<MessageActionsSheetProps, 'onReply' | 'onCopy' | 'onEdit' | 'onDelete'>,
): ActionRow[] => {
  const isMine = msg.from === 'me';
  const isText = msg.kind === 'text';
  const rows: ActionRow[] = [];

  if (isText) {
    rows.push({
      key: 'reply',
      label: 'Reply',
      icon: <ReplyIcon color="#7c8088" />,
      onPress: handlers.onReply,
    });
    rows.push({
      key: 'copy',
      label: 'Copy text',
      icon: <CopyIcon color="#7c8088" />,
      onPress: handlers.onCopy,
    });
  }
  if (isMine && isText) {
    rows.push({
      key: 'edit',
      label: 'Edit message',
      icon: <EditIcon color="#7c8088" />,
      onPress: handlers.onEdit,
    });
  }
  rows.push({
    key: 'delete-me',
    label: 'Delete for me',
    icon: <TrashIcon color="#CF4040" />,
    danger: true,
    onPress: () => handlers.onDelete('me'),
  });
  if (isMine) {
    rows.push({
      key: 'delete-everyone',
      label: 'Delete for everyone',
      icon: <TrashIcon color="#CF4040" />,
      danger: true,
      onPress: () => handlers.onDelete('everyone'),
    });
  }
  return rows;
};

const MessageActionsSheet = ({
  msg,
  onClose,
  onReact,
  onReply,
  onCopy,
  onEdit,
  onDelete,
}: MessageActionsSheetProps) => {
  const isOpen = msg !== null;
  const rows = msg ? buildRows(msg, { onReply, onCopy, onEdit, onDelete }) : [];

  return (
    <BottomSheet
      isOpen={isOpen}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <BottomSheet.Portal>
        <BottomSheet.Overlay />
        <BottomSheet.Content>
          {msg ? (
            <View>
              <View
                className="flex-row items-center justify-between"
                style={{ paddingHorizontal: 4, paddingVertical: 8 }}
              >
                {EMOJI_QUICK.map((emoji) => {
                  const active = !!msg.reactions?.[emoji]?.includes('me');
                  return (
                    <Pressable
                      key={emoji}
                      onPress={() => onReact(emoji)}
                      accessibilityLabel={`React with ${emoji}`}
                      className={
                        active
                          ? 'items-center justify-center bg-accent/15'
                          : 'items-center justify-center'
                      }
                      style={{ width: 40, height: 40, borderRadius: 20 }}
                    >
                      <Text style={{ fontSize: 22 }}>{emoji}</Text>
                    </Pressable>
                  );
                })}
              </View>

              <View
                className="bg-bg-2 overflow-hidden"
                style={{ borderRadius: 14, marginTop: 14 }}
              >
                {rows.map((r, i) => {
                  const { key, ...rest } = r;
                  return <SheetRow key={key} {...rest} isLast={i === rows.length - 1} />;
                })}
              </View>
            </View>
          ) : null}
        </BottomSheet.Content>
      </BottomSheet.Portal>
    </BottomSheet>
  );
};

export default MessageActionsSheet;
