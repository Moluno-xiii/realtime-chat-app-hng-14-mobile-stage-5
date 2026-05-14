import { ReactNode } from 'react';
import { View, Text, Pressable } from 'react-native';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { ChatsTabIcon, YouTabIcon } from './icons';

const ICONS: Record<string, (color: string) => ReactNode> = {
  chats: (color) => <ChatsTabIcon color={color} />,
  you: (color) => <YouTabIcon color={color} />,
};

const LABELS: Record<string, string> = {
  chats: 'Chats',
  you: 'You',
};

const PulseTabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  const activeRoute = state.routes[state.index];
  const activeStyle = descriptors[activeRoute.key]?.options.tabBarStyle as
    | { display?: string }
    | undefined;
  if (activeStyle?.display === 'none') return null;

  return (
    <View className="flex-row border-t border-line bg-bg px-9 pt-2.5">
      {state.routes.map((route, index) => {
        const isActive = state.index === index;
        const color = isActive ? '#507EF1' : '#7C8088';
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isActive && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        return (
          <Pressable
            key={route.key}
            onPress={onPress}
            accessibilityRole="button"
            className="flex-1 items-center gap-1 py-1.5 relative"
          >
            {isActive ? (
              <View
                className="absolute rounded bg-accent"
                style={{ top: -10, left: '50%', marginLeft: -14, width: 28, height: 3 }}
              />
            ) : null}
            {ICONS[route.name]?.(color)}
            <Text
              className="text-[11px]"
              style={{ color, fontWeight: isActive ? '600' : '500' }}
            >
              {LABELS[route.name] ?? route.name}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default PulseTabBar;
