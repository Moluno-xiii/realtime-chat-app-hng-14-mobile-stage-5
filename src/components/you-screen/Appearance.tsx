import { Text, View } from 'react-native';
import { SectionLabel, SettingsCard, ThemeCard } from '.';
import { ThemeName } from './types';
import { Uniwind, useUniwind } from 'uniwind';

const Appearance = () => {
  const { theme } = useUniwind();
  const activeTheme: ThemeName = theme === 'dark' ? 'dark' : 'light';

  const pickTheme = (next: ThemeName) => {
    if (next !== activeTheme) Uniwind.setTheme(next);
  };
  return (
    <View className="mb-5.5">
      <SectionLabel>Appearance</SectionLabel>
      <SettingsCard>
        <View className="px-4 py-3.5">
          <View className="flex-row items-center justify-between mb-3">
            <Text className="text-ink font-medium" style={{ fontSize: 15 }}>
              Theme
            </Text>
            <Text
              className="text-ink-3"
              style={{ fontSize: 11, fontFamily: 'JetBrainsMono, monospace' }}
            >
              {activeTheme}
            </Text>
          </View>
          <View className="flex-row gap-2">
            <ThemeCard
              id="light"
              label="Light"
              active={activeTheme === 'light'}
              onPress={() => pickTheme('light')}
            />
            <ThemeCard
              id="dark"
              label="Dark"
              active={activeTheme === 'dark'}
              onPress={() => pickTheme('dark')}
            />
          </View>
        </View>
      </SettingsCard>
    </View>
  );
};

export default Appearance;
