import { View } from 'react-native';
import { SectionLabel, SettingRow, SettingsCard } from '.';

const Help = () => {
  return (
    <View className="mb-5.5">
      <SectionLabel>Help</SectionLabel>
      <SettingsCard>
        <SettingRow label="Help center" />
        <SettingRow label="About" detail="v1.0.0" isLast />
      </SettingsCard>
    </View>
  );
};

export default Help;
