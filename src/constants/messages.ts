import { ChatMessage } from '@/types/chatMessage';

export const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 'm1',
    from: 'maya',
    kind: 'text',
    text: 'morning! did you get a chance to look at the proposal draft?',
    time: '11:32',
    status: 'seen',
  },
  {
    id: 'm2',
    from: 'me',
    kind: 'text',
    text: 'yep, made it through section two. the framing is way tighter now',
    time: '11:34',
    status: 'seen',
  },
  {
    id: 'm3',
    from: 'me',
    kind: 'text',
    text: 'one thing — the pricing table on page 6 feels buried',
    time: '11:34',
    status: 'seen',
    reactions: { '💯': ['maya'] },
  },
  {
    id: 'm4',
    from: 'maya',
    kind: 'text',
    text: 'totally agree. i think we pull it up under the value prop?',
    time: '11:36',
    status: 'seen',
  },
  {
    id: 'm5',
    from: 'me',
    kind: 'image',
    alt: 'screenshot of the pricing layout',
    time: '11:38',
    status: 'seen',
    caption: 'this is roughly what i had in mind',
    compressed: { from: '4.2 MB', to: '486 KB' },
  },
  {
    id: 'm6',
    from: 'maya',
    kind: 'text',
    text: 'oh nice, that lays out much better',
    time: '11:40',
    status: 'seen',
    reactions: { '🔥': ['me'] },
  },
  {
    id: 'm7',
    from: 'maya',
    kind: 'audio',
    duration: 14,
    time: '11:42',
    status: 'seen',
    transcript: 'okay i recorded a quick voice note',
  },
];

export const EMOJI_QUICK = ['❤️', '😂', '😮', '😢', '🙏', '🔥', '💯', '👀'];
