import Svg, { Path } from 'react-native-svg';
import { IconProps } from './types';

const Send = ({ size = 20, color = '#fff' }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
    <Path d="M3 10l14-7-5 14-3-6-6-1z" fill={color} />
  </Svg>
);

export default Send;
