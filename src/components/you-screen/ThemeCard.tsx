import { Text, View, Pressable } from 'react-native';
import { ThemeName } from './types';
import { CheckIcon } from '../ui/icons';

const ThemeCard = ({
  id,
  label,
  active,
  onPress,
}: {
  id: ThemeName;
  label: string;
  active: boolean;
  onPress: () => void;
}) => {
  const isLight = id === 'light';
  return (
    <Pressable onPress={onPress} className="flex-1 gap-2">
      <View
        className="rounded-xl p-2.5 overflow-hidden relative"
        style={{
          height: 76,
          backgroundColor: isLight ? '#FAF8F5' : '#0E1217',
          borderWidth: active ? 2 : 1.5,
          borderColor: active ? '#507EF1' : '#D8DBE0',
        }}
      >
        <View
          style={{
            width: '100%',
            height: 8,
            borderRadius: 4,
            backgroundColor: isLight ? '#E6E8ED' : '#22272F',
          }}
        />
        <View className="flex-row justify-end mt-1.5">
          <View
            style={{
              width: '70%',
              height: 10,
              borderRadius: 6,
              backgroundColor: '#507EF1',
            }}
          />
        </View>
        <View className="flex-row mt-1">
          <View
            style={{
              width: '55%',
              height: 10,
              borderRadius: 6,
              backgroundColor: isLight ? '#EDEFF3' : '#22272F',
            }}
          />
        </View>
        <View className="flex-row justify-end mt-1">
          <View
            style={{
              width: '40%',
              height: 10,
              borderRadius: 6,
              backgroundColor: '#507EF1',
            }}
          />
        </View>
        {active ? (
          <View
            className="absolute rounded-full bg-accent items-center justify-center"
            style={{ width: 18, height: 18, top: 6, right: 6 }}
          >
            <CheckIcon color="#fff" size={11} />
          </View>
        ) : null}
      </View>
      <Text
        className={`text-center ${active ? 'text-ink font-semibold' : 'text-ink-2 font-medium'}`}
        style={{ fontSize: 13 }}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export default ThemeCard;
