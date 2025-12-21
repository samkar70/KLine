// src/types.ts
export interface MediaItem {
  id: string;
  title: string;
  type: 'video' | 'audio';
  category: string;
  url: string;
  thumbnail: string;
  artist: string;
  description: string;
}