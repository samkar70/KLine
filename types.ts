// types.ts
export interface MediaItem {
  id: string;
  title: string;
  type: 'video' | 'audio';
  url: string;
  thumbnail: string;
  duration: string;
  artist: string;
}