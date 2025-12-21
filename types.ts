export interface MediaItem {
  id: string;
  title: string;
  type: 'video' | 'audio';
  category: 'Entrevistas' | 'Momentos' | 'Musica' | 
  url: string;
  thumbnail: string; // Tu link manual de imagen
  date: string; // YYYY-MM-DD para el orden
  artist: string;
  description: string;
}