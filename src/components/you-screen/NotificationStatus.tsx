import { View } from 'react-native';
import { SectionLabel, SettingsCard, StatusRow } from '.';
import { useState } from 'react';

const NotificationStatus = () => {
  const [status, setStatus] = useState<'available' | 'busy' | 'dnd'>('available');

  return (
    <View className="mb-5.5">
      <SectionLabel>Status</SectionLabel>
      <SettingsCard>
        <StatusRow
          active={status === 'available'}
          color="#349D62"
          title="Available"
          sub="Notifications on"
          onPress={() => setStatus('available')}
        />
        <StatusRow
          active={status === 'busy'}
          color="#E58212"
          title="Busy"
          sub="Muted until you change it"
          onPress={() => setStatus('busy')}
        />
        <StatusRow
          active={status === 'dnd'}
          color="#CF4040"
          title="Do not disturb"
          sub="Hide notifications system-wide"
          onPress={() => setStatus('dnd')}
          isLast
        />
      </SettingsCard>
    </View>
  );
};

export default NotificationStatus;
