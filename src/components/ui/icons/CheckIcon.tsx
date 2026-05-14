import Svg, { Path } from 'react-native-svg';
import { IconProps } from './types';

const CheckIcon = ({ size = 14, color = 'currentColor' }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 14 14" fill="none">
    <Path
      d="M2 7l3 3 7-7"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default CheckIcon;
