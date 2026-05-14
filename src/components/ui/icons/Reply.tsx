import Svg, { Path } from 'react-native-svg';
import { IconProps } from './types';

const Reply = ({ size = 16, color = 'currentColor' }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <Path
      d="M7 4L3 8l4 4M3 8h7a3 3 0 013 3v2"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Reply;
