import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaWrapper, TickStatus } from '@/components/ui';
import {
  ChatDetailHeader,
  Composer,
  DayDivider,
  EditingBanner,
  MessageActionsSheet,
  MessageRow,
  TheirTypingBubble,
} from '@/components/chat-detail';
import { AVATARS, INITIAL_MESSAGES, INITIAL_THREADS, Thread } from '@/constants';
import { ChatMessage, ChatReactions, TextMessage } from '@/types/chatMessage';

type ChatDetailScreenProps = { chatId: string };

const nowTime = () => {
  const d = new Date();
  const h12 = d.getHours() % 12 || 12;
  const min = String(d.getMinutes()).padStart(2, '0');
  return `${h12}:${min}`;
};

const pickReply = (text: string) => {
  const lo = text.toLowerCase();
  if (lo.includes('?')) return 'good question — let me think on it';
  if (lo.length < 8) return 'haha 👍';
  return 'totally — that tracks';
};

const advanceStatus = (
  setMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>>,
  id: string,
  status: TickStatus,
) => {
  setMessages((prev) =>
    prev.map((m) => (m.id === id ? ({ ...m, status } as ChatMessage) : m)),
  );
};

const toggleReaction = (
  reactions: ChatReactions | undefined,
  emoji: string,
  who: string,
): ChatReactions | undefined => {
  const next: ChatReactions = { ...(reactions ?? {}) };
  const list = next[emoji] ?? [];
  if (list.includes(who)) {
    const filtered = list.filter((u) => u !== who);
    if (filtered.length === 0) delete next[emoji];
    else next[emoji] = filtered;
  } else {
    next[emoji] = [...list, who];
  }
  return Object.keys(next).length === 0 ? undefined : next;
};

const ChatDetailScreen = ({ chatId }: ChatDetailScreenProps) => {
  const thread: Thread = useMemo(
    () =>
      INITIAL_THREADS.find((t) => t.id === chatId) ?? {
        id: chatId,
        who: 'maya',
        preview: '',
        time: '',
        unread: 0,
        typing: false,
        online: true,
      },
    [chatId],
  );

  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [draft, setDraft] = useState('');
  const [theyTyping, setTheyTyping] = useState(false);
  const [actionsMsg, setActionsMsg] = useState<ChatMessage | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const listRef = useRef<FlatList<ChatMessage>>(null);

  useEffect(() => {
    const id = setInterval(() => setTheyTyping((p) => !p), 9000);
    return () => clearInterval(id);
  }, []);

  const scrollToEnd = useCallback(() => {
    requestAnimationFrame(() => {
      listRef.current?.scrollToEnd({ animated: true });
    });
  }, []);

  const sendNew = () => {
    const text = draft.trim();
    if (!text) return;
    const id = `m${Date.now()}`;
    const msg: TextMessage = {
      id,
      from: 'me',
      kind: 'text',
      text,
      time: nowTime(),
      status: 'sending',
    };
    setMessages((prev) => [...prev, msg]);
    setDraft('');

    setTimeout(() => advanceStatus(setMessages, id, 'sent'), 350);
    setTimeout(() => advanceStatus(setMessages, id, 'delivered'), 1100);
    setTimeout(() => {
      advanceStatus(setMessages, id, 'seen');
      setTheyTyping(true);
      setTimeout(() => {
        setTheyTyping(false);
        const replyId = `m${Date.now()}`;
        const reply: TextMessage = {
          id: replyId,
          from: thread.who === 'me' ? 'maya' : thread.who,
          kind: 'text',
          text: pickReply(text),
          time: nowTime(),
          status: 'seen',
        };
        setMessages((prev) => [...prev, reply]);
      }, 2200);
    }, 2400);
  };

  const saveEdit = () => {
    const text = draft.trim();
    if (!text || !editingId) return;
    setMessages((prev) =>
      prev.map((m) =>
        m.id === editingId && m.kind === 'text'
          ? ({ ...m, text, edited: true } as ChatMessage)
          : m,
      ),
    );
    setEditingId(null);
    setDraft('');
  };

  const cancelEdit = () => {
    setEditingId(null);
    setDraft('');
  };

  const onSend = () => (editingId ? saveEdit() : sendNew());

  const onReact = (emoji: string) => {
    if (!actionsMsg) return;
    setMessages((prev) =>
      prev.map((m) =>
        m.id === actionsMsg.id
          ? ({ ...m, reactions: toggleReaction(m.reactions, emoji, 'me') } as ChatMessage)
          : m,
      ),
    );
    setActionsMsg(null);
  };

  const onEdit = () => {
    if (!actionsMsg || actionsMsg.kind !== 'text' || actionsMsg.from !== 'me') return;
    setEditingId(actionsMsg.id);
    setDraft(actionsMsg.text);
    setActionsMsg(null);
  };

  const onDelete = (scope: 'me' | 'everyone') => {
    if (!actionsMsg) return;
    const id = actionsMsg.id;
    setMessages((prev) =>
      prev.map((m) =>
        m.id === id
          ? ({
              ...m,
              ...(scope === 'me' ? { deletedForMe: true } : { deletedForEveryone: true }),
            } as ChatMessage)
          : m,
      ),
    );
    if (editingId === id) cancelEdit();
    setActionsMsg(null);
  };

  const goBack = () => {
    if (router.canGoBack()) router.back();
    else router.replace('/chats');
  };

  const avatar = AVATARS[thread.who];
  const editingMsg =
    editingId != null ? messages.find((m) => m.id === editingId) : undefined;
  const editingPreview = editingMsg && editingMsg.kind === 'text' ? editingMsg.text : '';

  return (
    <SafeAreaWrapper scrollable={false} edges={['top', 'left', 'right', 'bottom']}>
      <ChatDetailHeader thread={thread} typing={theyTyping} onBack={goBack} />

      <FlatList
        ref={listRef}
        data={messages}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          paddingHorizontal: 12,
          paddingTop: 8,
          paddingBottom: 8,
          gap: 4,
        }}
        ListHeaderComponent={<DayDivider label="Today" />}
        ListFooterComponent={theyTyping ? <TheirTypingBubble who={thread.who} /> : null}
        ListEmptyComponent={
          <View className="py-12 items-center gap-2">
            <Text className="text-ink font-semibold" style={{ fontSize: 16 }}>
              Say hi to {avatar.name}
            </Text>
            <Text className="text-ink-3" style={{ fontSize: 13 }}>
              Your messages will appear here
            </Text>
          </View>
        }
        renderItem={({ item, index }) => {
          const prev = messages[index - 1];
          const next = messages[index + 1];
          const groupStart = !prev || prev.from !== item.from;
          const groupEnd = !next || next.from !== item.from;
          return (
            <MessageRow
              msg={item}
              groupStart={groupStart}
              groupEnd={groupEnd}
              onLongPress={setActionsMsg}
            />
          );
        }}
        onContentSizeChange={scrollToEnd}
        showsVerticalScrollIndicator={false}
      />

      {editingId ? (
        <EditingBanner preview={editingPreview} onCancel={cancelEdit} />
      ) : null}

      <Composer
        draft={draft}
        setDraft={setDraft}
        onSend={onSend}
        editing={editingId !== null}
      />

      <MessageActionsSheet
        msg={actionsMsg}
        onClose={() => setActionsMsg(null)}
        onReact={onReact}
        onReply={() => setActionsMsg(null)}
        onCopy={() => setActionsMsg(null)}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </SafeAreaWrapper>
  );
};

export default ChatDetailScreen;
