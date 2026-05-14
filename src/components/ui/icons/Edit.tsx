import Svg, { Path } from 'react-native-svg';
import { IconProps } from './types';

const Edit = ({ size = 16, color = 'currentColor' }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <Path
      d="M11 2l3 3-8 8H3v-3l8-8z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
  </Svg>
);

export default Edit;
