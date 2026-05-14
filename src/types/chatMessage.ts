import { AvatarKey } from '@/constants';
import { TickStatus } from '@/components/ui';

export type ChatMessageKind = 'text' | 'image' | 'audio';

export type ChatReactions = Record<string, string[]>;

interface ChatMessageBase {
  id: string;
  from: AvatarKey;
  time: string;
  status: TickStatus;
  reactions?: ChatReactions;
  edited?: boolean;
  deletedForMe?: boolean;
  deletedForEveryone?: boolean;
}

export interface TextMessage extends ChatMessageBase {
  kind: 'text';
  text: string;
}

export interface ImageMessage extends ChatMessageBase {
  kind: 'image';
  alt: string;
  caption?: string;
  compressed?: { from: string; to: string };
}

export interface AudioMessage extends ChatMessageBase {
  kind: 'audio';
  duration: number;
  transcript?: string;
}

export type ChatMessage = TextMessage | ImageMessage | AudioMessage;
