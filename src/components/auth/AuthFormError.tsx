import { View, Text } from 'react-native';
import { withUniwind } from 'uniwind';

const UniView = withUniwind(View);
const UniText = withUniwind(Text);

type AuthFormErrorProps = {
  message: string;
};

export const AuthFormError = ({ message }: AuthFormErrorProps) => (
  <UniView className="mt-3.5 flex-row items-center gap-2 px-3 py-2.5 rounded-xl bg-danger/10">
    <UniView className="w-1.5 h-1.5 rounded-sm bg-danger" />
    <UniText className="text-danger" style={{ fontSize: 13 }}>
      {message}
    </UniText>
  </UniView>
);
