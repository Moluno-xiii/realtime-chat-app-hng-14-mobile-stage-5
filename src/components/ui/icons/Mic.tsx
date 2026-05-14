import Svg, { Path, Rect } from 'react-native-svg';
import { IconProps } from './types';

const Mic = ({ size = 22, color = 'currentColor' }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 22 22" fill="none">
    <Rect x="8" y="2" width="6" height="11" rx="3" stroke={color} strokeWidth={1.8} />
    <Path
      d="M5 10v1a6 6 0 0012 0v-1M11 18v2"
      stroke={color}
      strokeWidth={1.8}
      strokeLinecap="round"
    />
  </Svg>
);

export default Mic;
