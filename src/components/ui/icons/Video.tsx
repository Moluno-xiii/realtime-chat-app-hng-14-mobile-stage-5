import Svg, { Path } from 'react-native-svg';
import { IconProps } from './types';

const Video = ({ size = 20, color = 'currentColor' }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
    <Path
      d="M3 7a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2V7zM13 9l5-3v8l-5-3"
      stroke={color}
      strokeWidth={1.6}
      strokeLinejoin="round"
    />
  </Svg>
);

export default Video;
