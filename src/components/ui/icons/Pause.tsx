import Svg, { Rect } from 'react-native-svg';
import { IconProps } from './types';

const Pause = ({ size = 14, color = '#fff' }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 14 14" fill="none">
    <Rect x="3" y="2" width="3" height="10" rx="1" fill={color} />
    <Rect x="8" y="2" width="3" height="10" rx="1" fill={color} />
  </Svg>
);

export default Pause;
