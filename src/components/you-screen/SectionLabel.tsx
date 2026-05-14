import { ReactNode } from 'react';
import { Text } from 'react-native';

const SectionLabel = ({ children }: { children: ReactNode }) => (
  <Text
    className="text-ink-3 uppercase px-6 pb-2"
    style={{ fontSize: 10.5, letterSpacing: 0.6, fontFamily: 'JetBrainsMono, monospace' }}
  >
    {children}
  </Text>
);

export default SectionLabel;
