import { View, Text } from 'react-native';

type PhotoPlaceholderProps = {
  label?: string;
  tone?: number;
  width?: number;
  height?: number;
  radius?: number;
};

const stripeFromTone = (tone: number) => {
  const hue = tone % 360;
  const lightA = `hsl(${hue}, 45%, 62%)`;
  const lightB = `hsl(${hue}, 50%, 54%)`;
  return { lightA, lightB };
};

const Stripes = ({ tone, count = 14 }: { tone: number; count?: number }) => {
  const { lightA, lightB } = stripeFromTone(tone);
  return (
    <View className="absolute inset-0 flex-row">
      {Array.from({ length: count }).map((_, i) => (
        <View
          key={i}
          style={{
            flex: 1,
            backgroundColor: i % 2 === 0 ? lightA : lightB,
            transform: [{ skewX: '-20deg' }],
          }}
        />
      ))}
    </View>
  );
};

const PhotoPlaceholder = ({
  label = 'photo',
  tone = 265,
  width = 240,
  height,
  radius = 16,
}: PhotoPlaceholderProps) => {
  const h = height ?? Math.round((width * 3) / 4);
  return (
    <View
      style={{
        width,
        height: h,
        borderRadius: radius,
        overflow: 'hidden',
      }}
      className="items-center justify-center"
    >
      <Stripes tone={tone} />
      <View className="px-2 py-1 rounded" style={{ backgroundColor: 'rgba(0,0,0,0.35)' }}>
        <Text
          className="text-white"
          style={{
            fontSize: 11,
            letterSpacing: 0.55,
            textTransform: 'uppercase',
            fontFamily: 'JetBrainsMono, monospace',
          }}
        >
          {label}
        </Text>
      </View>
    </View>
  );
};

export default PhotoPlaceholder;
