// src/data/media.ts
import { MediaItem } from '../types'; // Asume que types.ts ya está en la raíz o ajusta la ruta

export const mediaData: MediaItem[] = [
  {
    id: '1',
    title: 'Coastal Waves',
    type: 'video',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4', // URL de ejemplo
    thumbnail: 'https://picsum.photos/id/1018/200/150', // Miniatura de ejemplo
    duration: '0:59',
    artist: ''
  },
  {
    id: '2',
    title: 'Mountain Ascent',
    type: 'video',
    url: 'https://www.w3schools.com/html/movie.mp4', // URL de ejemplo
    thumbnail: 'https://picsum.photos/id/1015/200/150', // Miniatura de ejemplo
    duration: '8:15',
    artist: ''
  },
  {
    id: '3',
    title: 'Tech House Groove',
    type: 'audio',
    url: 'https://www.w3schools.com/html/horse.mp3', // URL de ejemplo
    thumbnail: 'https://picsum.photos/id/1016/200/150', // Miniatura de ejemplo
    duration: '2:05',
    artist: 'Alejandro Magaña'
  },
  {
    id: '4',
    title: 'City Night Life',
    type: 'video',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4', // Otra URL de ejemplo
    thumbnail: 'https://picsum.photos/id/103/200/150', // Miniatura de ejemplo
    duration: '0:29',
    artist: ''
  },
  {
    id: '5',
    title: 'Dreamy Inspiring Piano',
    type: 'audio',
    url: 'https://www.w3schools.com/html/horse.mp3', // Otra URL de ejemplo
    thumbnail: 'https://picsum.photos/id/1025/200/150', // Miniatura de ejemplo
    duration: '2:11',
    artist: 'Ahjay Stelino'
  },
  {
    id: '6',
    title: 'Autumn Forest',
    type: 'video',
    url: 'https://www.w3schools.com/html/movie.mp4', // Otra URL de ejemplo
    thumbnail: 'https://picsum.photos/id/1067/200/150', // Miniatura de ejemplo
    duration: '0:15',
    artist: ''
  },
];