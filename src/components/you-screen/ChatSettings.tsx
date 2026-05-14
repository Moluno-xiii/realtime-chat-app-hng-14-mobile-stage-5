import { View } from 'react-native';
import { useState } from 'react';
import { SectionLabel, SettingsCard, ToggleRow } from '.';

const ChatSettings = () => {
  const [notifs, setNotifs] = useState(true);
  const [reads, setReads] = useState(true);
  const [haptics, setHaptics] = useState(true);
  const [autoplay, setAutoplay] = useState(false);

  return (
    <View className="mb-5.5">
      <SectionLabel>Chat</SectionLabel>
      <SettingsCard>
        <ToggleRow
          label="Push notifications"
          sub="Messages, calls, reactions"
          value={notifs}
          onChange={setNotifs}
        />
        <ToggleRow
          label="Read receipts"
          sub="Let others see when you've read"
          value={reads}
          onChange={setReads}
        />
        <ToggleRow
          label="Haptics"
          sub="On send, react, long-press"
          value={haptics}
          onChange={setHaptics}
        />
        <ToggleRow
          label="Auto-play videos"
          sub="Wi-Fi only when on"
          value={autoplay}
          onChange={setAutoplay}
          isLast
        />
      </SettingsCard>
    </View>
  );
};

export default ChatSettings;
