import { AvatarKey } from './avatars';

export type Thread = {
  id: string;
  who: AvatarKey;
  preview: string;
  time: string;
  unread: number;
  typing: boolean;
  online: boolean;
  group?: boolean;
};

export const INITIAL_THREADS: Thread[] = [
  {
    id: 't1',
    who: 'maya',
    preview: 'okay i recorded a quick voice note',
    time: '11:42',
    unread: 2,
    typing: false,
    online: true,
  },
  {
    id: 't2',
    who: 'team',
    preview: 'Inès: pushed v3 of the gallery layout',
    time: '11:08',
    unread: 0,
    typing: true,
    online: true,
    group: true,
  },
  {
    id: 't3',
    who: 'jonas',
    preview: 'sounds good — see you at 3',
    time: '10:14',
    unread: 0,
    typing: false,
    online: false,
  },
  {
    id: 't4',
    who: 'ines',
    preview: '📎 mood-board.pdf',
    time: 'yesterday',
    unread: 0,
    typing: false,
    online: false,
  },
  {
    id: 't5',
    who: 'noah',
    preview: 'haha fair enough',
    time: 'yesterday',
    unread: 0,
    typing: false,
    online: true,
  },
  {
    id: 't6',
    who: 'ravi',
    preview: 'will dig in tomorrow morning',
    time: 'Mon',
    unread: 0,
    typing: false,
    online: false,
  },
];
