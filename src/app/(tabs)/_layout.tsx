import { Tabs } from 'expo-router';
import { PulseTabBar } from '@/components/ui';

const TabsLayout = () => (
  <Tabs
    tabBar={(props) => <PulseTabBar {...props} />}
    screenOptions={{ headerShown: false }}
  >
    <Tabs.Screen name="index" options={{ title: 'Chats' }} />
    <Tabs.Screen name="you" options={{ title: 'You' }} />
  </Tabs>
);

export default TabsLayout;
