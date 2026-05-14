import Svg, { Circle, Path } from 'react-native-svg';
import { IconProps } from './types';

const YouTab = ({ size = 24, color = 'currentColor' }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="12" r="9" stroke={color} strokeWidth={1.7} />
    <Circle cx="12" cy="10" r="2.8" stroke={color} strokeWidth={1.7} />
    <Path
      d="M5.5 19.5c1.7-2.8 3.9-4 6.5-4s4.8 1.2 6.5 4"
      stroke={color}
      strokeWidth={1.7}
      strokeLinecap="round"
    />
  </Svg>
);

export default YouTab;
