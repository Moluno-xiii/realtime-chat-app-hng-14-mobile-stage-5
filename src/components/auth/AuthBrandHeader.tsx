import { View, Text } from 'react-native';
import { withUniwind } from 'uniwind';
import { BrandMark } from '@/components/ui';

const UniView = withUniwind(View);
const UniText = withUniwind(Text);

type AuthBrandHeaderProps = {
  title: string;
  subtitle: string;
};

export const AuthBrandHeader = ({ title, subtitle }: AuthBrandHeaderProps) => (
  <>
    <UniView className="flex-row items-center gap-2.5 mb-11">
      <BrandMark size={38} />
      <UniText
        className="text-ink font-bold"
        style={{ fontSize: 22, letterSpacing: -0.44 }}
      >
        pulse
      </UniText>
    </UniView>

    <UniView className="mb-8">
      <UniText
        className="text-ink font-bold"
        style={{ fontSize: 32, letterSpacing: -0.8, lineHeight: 36 }}
      >
        {title}
      </UniText>
      <UniText className="text-ink-3 mt-2" style={{ fontSize: 15, lineHeight: 22 }}>
        {subtitle}
      </UniText>
    </UniView>
  </>
);
