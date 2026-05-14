import { useEffect, useRef, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { useUniwind } from 'uniwind';
import { PauseIcon, PlayIcon } from '@/components/ui/icons';

type AudioPlayerProps = {
  duration: number;
  mine: boolean;
};

type TheirPalette = {
  speedBg: string;
  dimBar: string;
  fg: string;
};

const THEIR_PALETTE: Record<'light' | 'dark', TheirPalette> = {
  light: { speedBg: '#faf8f5', dimBar: '#c8cbd0', fg: '#12161d' },
  dark: { speedBg: '#0e1217', dimBar: '#3a3f47', fg: '#f3f1ee' },
};

const BAR_COUNT = 26;

const fmtDur = (s: number) => {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}:${String(sec).padStart(2, '0')}`;
};

const cycleSpeed = (s: number) => (s === 1 ? 1.5 : s === 1.5 ? 2 : 1);

const AudioPlayer = ({ duration, mine }: AudioPlayerProps) => {
  const [playing, setPlaying] = useState(false);
  const [pos, setPos] = useState(0);
  const [speed, setSpeed] = useState(1);
  const tickRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!playing) {
      if (tickRef.current) clearInterval(tickRef.current);
      return;
    }
    tickRef.current = setInterval(() => {
      setPos((p) => {
        const next = p + 0.1 * speed;
        if (next >= duration) {
          setPlaying(false);
          return 0;
        }
        return next;
      });
    }, 100);
    return () => {
      if (tickRef.current) clearInterval(tickRef.current);
    };
  }, [playing, speed, duration]);

  const { theme } = useUniwind();
  const their = THEIR_PALETTE[theme === 'dark' ? 'dark' : 'light'];

  const ratio = pos / duration;
  const remaining = playing ? Math.ceil(duration - pos) : duration;
  const playBg = mine ? 'rgba(255,255,255,0.2)' : '#507EF1';
  const speedBg = mine ? 'rgba(255,255,255,0.18)' : their.speedBg;
  const dimBar = mine ? 'rgba(255,255,255,0.45)' : their.dimBar;
  const progressBar = mine ? '#ffffff' : '#507EF1';
  const fg = mine ? '#fff' : their.fg;

  return (
    <View className="flex-row items-center gap-2.5" style={{ minWidth: 200 }}>
      <Pressable
        onPress={() => setPlaying((p) => !p)}
        className="items-center justify-center"
        style={{ width: 30, height: 30, borderRadius: 15, backgroundColor: playBg }}
        accessibilityLabel={playing ? 'Pause audio' : 'Play audio'}
      >
        {playing ? <PauseIcon color={fg} /> : <PlayIcon color={fg} />}
      </Pressable>

      <View className="flex-1 flex-row items-center" style={{ gap: 2, height: 22 }}>
        {Array.from({ length: BAR_COUNT }).map((_, i) => {
          const seed = (Math.sin(i * 1.3) + 1) / 2;
          const h = 5 + seed * 16;
          const past = i / BAR_COUNT < ratio;
          return (
            <View
              key={i}
              style={{
                width: 2.5,
                height: h,
                borderRadius: 1.5,
                backgroundColor: past ? progressBar : dimBar,
              }}
            />
          );
        })}
      </View>

      <Pressable
        onPress={() => setSpeed(cycleSpeed)}
        className="items-center justify-center"
        style={{
          height: 22,
          paddingHorizontal: 7,
          borderRadius: 11,
          backgroundColor: speedBg,
        }}
      >
        <Text
          style={{
            fontSize: 11,
            fontWeight: '600',
            color: fg,
            fontFamily: 'JetBrainsMono, monospace',
          }}
        >
          {speed}x
        </Text>
      </Pressable>

      <Text
        style={{
          fontSize: 11,
          color: fg,
          opacity: 0.75,
          minWidth: 32,
          textAlign: 'right',
          fontFamily: 'JetBrainsMono, monospace',
        }}
      >
        {fmtDur(remaining)}
      </Text>
    </View>
  );
};

export default AudioPlayer;
