import Svg, { Path } from 'react-native-svg';
import { IconProps } from './types';

const Close = ({ size = 18, color = 'currentColor' }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 18 18" fill="none">
    <Path
      d="M3 3l12 12M15 3L3 15"
      stroke={color}
      strokeWidth={1.8}
      strokeLinecap="round"
    />
  </Svg>
);

export default Close;
