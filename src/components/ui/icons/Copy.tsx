import Svg, { Path, Rect } from 'react-native-svg';
import { IconProps } from './types';

const Copy = ({ size = 16, color = 'currentColor' }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <Rect x="5" y="5" width="9" height="9" rx="1.5" stroke={color} strokeWidth={1.5} />
    <Path
      d="M11 5V3a1 1 0 00-1-1H3a1 1 0 00-1 1v7a1 1 0 001 1h2"
      stroke={color}
      strokeWidth={1.5}
      fill="none"
    />
  </Svg>
);

export default Copy;
