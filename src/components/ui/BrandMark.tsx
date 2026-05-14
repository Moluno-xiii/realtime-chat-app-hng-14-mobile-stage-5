import { View } from 'react-native';

type BrandMarkProps = {
  size?: number;
};

const BrandMark = ({ size = 38 }: BrandMarkProps) => {
  const dotSize = size * 0.47;
  const ringWidth = size * 0.08;
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size * 0.29,
        backgroundColor: '#12161D',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <View
        style={{
          width: dotSize,
          height: dotSize,
          borderRadius: dotSize / 2,
          backgroundColor: '#507EF1',
          shadowColor: '#507EF1',
          shadowOpacity: 1,
          shadowOffset: { width: 0, height: 0 },
          shadowRadius: 0,
          borderWidth: ringWidth,
          borderColor: '#12161D',
        }}
      />
    </View>
  );
};

export default BrandMark;
