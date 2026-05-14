import Svg, { Path } from 'react-native-svg';
import { IconProps } from './types';

const Play = ({ size = 14, color = '#fff' }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 14 14" fill="none">
    <Path d="M3 2l9 5-9 5V2z" fill={color} />
  </Svg>
);

export default Play;
