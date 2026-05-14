import Svg, { Path } from 'react-native-svg';
import { IconProps } from './types';

const Plus = ({ size = 22, color = 'currentColor' }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 22 22" fill="none">
    <Path d="M11 4v14M4 11h14" stroke={color} strokeWidth={2} strokeLinecap="round" />
  </Svg>
);

export default Plus;
