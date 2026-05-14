import Svg, { Path } from 'react-native-svg';
import { IconProps } from './types';

const ChevronRight = ({ size = 12, color = 'currentColor' }: IconProps) => (
  <Svg width={size * 0.6} height={size} viewBox="0 0 7 12" fill="none">
    <Path
      d="M1 1l5 5-5 5"
      stroke={color}
      strokeWidth={1.6}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ChevronRight;
