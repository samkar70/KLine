// data/media.ts
import { MediaItem } from '../types';

export const hubMedia: MediaItem[] = [
  {
    id: 'hub-1',
    title: 'Daniel - Video de Prueba',
    type: 'video',
    url: 'https://youtu.be/Wa0tzNFNNv8', 
    thumbnail: 'https://img.youtube.com/vi/Wa0tzNFNNv8/mqdefault.jpg', // Miniatura estable
    duration: '4:22',
    artist: 'EnCanto'
  },
  {
    id: 'hub-2',
    title: 'Momento de Oración',
    type: 'audio',
    url: 'https://www.w3schools.com/html/horse.mp3',
    thumbnail: 'https://picsum.photos/400/225?random=10',
    duration: '2:30',
    artist: 'Instrumental'
  }
];

export const featuredMedia: MediaItem[] = [
  {
    id: 'feat-1',
    title: 'Nueva Entrevista Exclusiva',
    type: 'video',
    url: 'https://youtu.be/1m0qA9L-_HY', 
    thumbnail: 'https://img.youtube.com/vi/1m0qA9L-_HY/mqdefault.jpg', // Miniatura estable
    duration: '12:40',
    artist: 'EnCanto'
  },
  {
    id: 'feat-2',
    title: 'Bart Millard Interview',
    type: 'video',
    url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', 
    thumbnail: 'https://picsum.photos/400/225?random=22',
    duration: '12:45',
    artist: 'Bart Millard'
  },
  {
    id: 'feat-3',
    title: 'Andrew Ripp Performance',
    type: 'video',
    url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', 
    thumbnail: 'https://picsum.photos/400/225?random=23',
    duration: '05:30',
    artist: 'Andrew Ripp'
  }
];