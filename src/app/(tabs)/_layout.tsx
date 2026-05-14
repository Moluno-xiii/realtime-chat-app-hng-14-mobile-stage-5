import { Tabs } from 'expo-router';
import { useUniwind } from 'uniwind';
import { PulseTabBar } from '@/components/ui';

const TabsLayout = () => {
  const { theme } = useUniwind();
  const bg = theme === 'dark' ? '#0e1217' : '#faf8f5';

  return (
    <Tabs
      tabBar={(props) => <PulseTabBar {...props} />}
      screenOptions={{ headerShown: false, sceneStyle: { backgroundColor: bg } }}
    >
      <Tabs.Screen name="index" options={{ title: 'Chats' }} />
      <Tabs.Screen name="you" options={{ title: 'You' }} />
    </Tabs>
  );
};

export default TabsLayout;
