import { View } from 'react-native';
import { SectionLabel, SettingRow, SettingsCard } from '.';

const AccountSettings = () => {
  return (
    <View className="mb-5.5">
      <SectionLabel>Account</SectionLabel>
      <SettingsCard>
        <SettingRow label="Edit profile" />
        <SettingRow label="Privacy & security" />
        <SettingRow label="Linked devices" detail="2 active" />
        <SettingRow label="Storage" detail="184 MB" isLast />
      </SettingsCard>
    </View>
  );
};

export default AccountSettings;
