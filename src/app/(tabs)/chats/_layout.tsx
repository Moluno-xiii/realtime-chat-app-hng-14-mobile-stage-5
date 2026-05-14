import { Stack } from 'expo-router';
import { useUniwind } from 'uniwind';

const ChatsLayout = () => {
  const { theme } = useUniwind();
  const bg = theme === 'dark' ? '#0e1217' : '#faf8f5';

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: bg },
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="[chat_id]" />
    </Stack>
  );
};

export default ChatsLayout;
