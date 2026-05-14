import Svg, { Path } from 'react-native-svg';
import { IconProps } from './types';

const Trash = ({ size = 16, color = 'currentColor' }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <Path
      d="M3 4h10M6 4V2h4v2M5 4l1 10h4l1-10"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Trash;
