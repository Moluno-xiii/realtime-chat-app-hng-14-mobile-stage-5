import Svg, { Path, Circle } from 'react-native-svg';

export type TickStatus = 'sending' | 'sent' | 'delivered' | 'seen';

type StatusTickProps = {
  status: TickStatus;
  size?: number;
};

const StatusTick = ({ status, size = 14 }: StatusTickProps) => {
  const seen = status === 'seen';
  const color = seen ? '#5BB5FF' : 'rgba(255,255,255,0.7)';

  if (status === 'sending') {
    return (
      <Svg width={size} height={size} viewBox="0 0 14 14">
        <Circle
          cx="7"
          cy="7"
          r="5"
          stroke={color}
          strokeWidth={1.5}
          fill="none"
          strokeDasharray="6 6"
        />
      </Svg>
    );
  }

  if (status === 'sent') {
    return (
      <Svg width={size} height={size} viewBox="0 0 14 14">
        <Path
          d="M2 7l3 3 7-7"
          stroke={color}
          strokeWidth={1.5}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    );
  }

  return (
    <Svg width={size + 2} height={size} viewBox="0 0 16 14">
      <Path
        d="M1 7l3 3 6-6"
        stroke={color}
        strokeWidth={1.5}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5 10l3 3 7-7"
        stroke={color}
        strokeWidth={1.5}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default StatusTick;
