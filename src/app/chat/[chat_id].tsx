import { useLocalSearchParams } from 'expo-router';
import ChatDetailScreen from '@/components/screens/ChatDetailScreen';

const ChatDetail = () => {
  const { chat_id } = useLocalSearchParams<{ chat_id: string }>();
  return <ChatDetailScreen chatId={chat_id} />;
};

export default ChatDetail;
