import { View, Text } from 'react-native';
import { Link } from 'expo-router';
import { withUniwind } from 'uniwind';

const UniView = withUniwind(View);
const UniText = withUniwind(Text);

type AuthFooterProps = {
  prompt: string;
  actionLabel: string;
  href: '/(auth)/login' | '/(auth)/signup';
};

export const AuthFooter = ({ prompt, actionLabel, href }: AuthFooterProps) => (
  <UniView className="items-center mt-6">
    <UniText className="text-ink-3" style={{ fontSize: 14 }}>
      {prompt}{' '}
      <Link href={href} replace asChild>
        <UniText className="text-accent font-semibold" style={{ fontSize: 14 }}>
          {actionLabel}
        </UniText>
      </Link>
    </UniText>
  </UniView>
);
