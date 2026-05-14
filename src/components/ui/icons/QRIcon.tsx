import Svg, { Rect, Path } from 'react-native-svg';
import { IconProps } from './types';

const QRIcon = ({ size = 20, color = 'currentColor' }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
    <Rect x="3" y="3" width="6" height="6" rx="1" stroke={color} strokeWidth={1.6} />
    <Rect x="11" y="3" width="6" height="6" rx="1" stroke={color} strokeWidth={1.6} />
    <Rect x="3" y="11" width="6" height="6" rx="1" stroke={color} strokeWidth={1.6} />
    <Path
      d="M11 11h2v2M15 11v6M11 15h2M15 13v2"
      stroke={color}
      strokeWidth={1.6}
      strokeLinecap="round"
    />
  </Svg>
);

export default QRIcon;
