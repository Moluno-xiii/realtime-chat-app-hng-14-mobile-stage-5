import { IconProps } from './types';
import Svg, { Circle, Path } from 'react-native-svg';

const Search = ({ size = 18, color = 'currentColor' }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 18 18" fill="none">
    <Circle cx="8" cy="8" r="6" stroke={color} strokeWidth={1.8} />
    <Path d="M13 13l4 4" stroke={color} strokeWidth={1.8} strokeLinecap="round" />
  </Svg>
);

export default Search;
