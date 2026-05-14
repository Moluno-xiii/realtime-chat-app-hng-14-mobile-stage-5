import { Text } from 'react-native';

const Footer = () => {
  return (
    <Text
      className="text-ink-3 text-center my-4"
      style={{
        fontSize: 10.5,
        letterSpacing: 0.4,
        fontFamily: 'JetBrainsMono, monospace',
      }}
    >
      PULSE · v1.0.0 <Text className="font-semibold text-base">&copy;Moluno</Text>
    </Text>
  );
};

export default Footer;
