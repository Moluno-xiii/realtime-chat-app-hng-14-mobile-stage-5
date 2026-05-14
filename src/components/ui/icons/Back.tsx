import Svg, { Path } from 'react-native-svg';
import { IconProps } from './types';

const Back = ({ size = 18, color = 'currentColor' }: IconProps) => (
  <Svg width={(size * 11) / 18} height={size} viewBox="0 0 11 18" fill="none">
    <Path
      d="M9 1L2 9l7 8"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Back;
