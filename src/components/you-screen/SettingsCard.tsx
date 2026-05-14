import { Surface } from 'heroui-native/surface';
import { ReactNode } from 'react';

const SettingsCard = ({ children }: { children: ReactNode }) => (
  <Surface className="rounded-2xl overflow-hidden">{children}</Surface>
);

export default SettingsCard;
