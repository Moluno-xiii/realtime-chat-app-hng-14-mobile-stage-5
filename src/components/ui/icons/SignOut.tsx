import Svg, { Path } from 'react-native-svg';
import { IconProps } from './types';

const SignOut = ({ size = 18, color = 'currentColor' }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
    <Path
      d="M12 14l4-4-4-4M16 10H7M11 3H4v14h7"
      stroke={color}
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SignOut;
