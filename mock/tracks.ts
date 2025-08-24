import { Track } from '@/types/audio';

export const mockTracks: Track[] = [
  {
    id: "1",
    title: "Chill LoFi Beats",
    genre: "LoFi",
    mood: "Chill",
    duration: "2:30",
    url: "/audio/lofi-sample.mp3",
    coverArt: "/images/lofi-cover.jpg",
    bpm: 85,
    createdAt: "2024-01-15T10:30:00Z"
  },
  {
    id: "2",
    title: "Cinematic Adventure",
    genre: "Cinematic",
    mood: "Epic",
    duration: "3:45",
    url: "/audio/cinematic-sample.mp3",
    coverArt: "/images/cinematic-cover.jpg",
    bpm: 120,
    createdAt: "2024-01-14T15:45:00Z"
  },
  {
    id: "3",
    title: "Electronic Vibes",
    genre: "Electronic",
    mood: "Energetic",
    duration: "4:12",
    url: "/audio/electronic-sample.mp3",
    coverArt: "/images/electronic-cover.jpg",
    bpm: 128,
    createdAt: "2024-01-13T09:20:00Z"
  },
  {
    id: "4",
    title: "Jazz Night",
    genre: "Jazz",
    mood: "Melancholic",
    duration: "3:20",
    url: "/audio/jazz-sample.mp3",
    coverArt: "/images/jazz-cover.jpg",
    bpm: 90,
    createdAt: "2024-01-12T20:15:00Z"
  },
  {
    id: "5",
    title: "Rock Anthem",
    genre: "Rock",
    mood: "Intense",
    duration: "4:50",
    url: "/audio/rock-sample.mp3",
    coverArt: "/images/rock-cover.jpg",
    bpm: 140,
    createdAt: "2024-01-11T14:30:00Z"
  },
  {
    id: "6",
    title: "Ambient Dreams",
    genre: "Ambient",
    mood: "Peaceful",
    duration: "5:15",
    url: "/audio/ambient-sample.mp3",
    coverArt: "/images/ambient-cover.jpg",
    bpm: 70,
    createdAt: "2024-01-10T11:00:00Z"
  }
];

export const genres = ['LoFi', 'Cinematic', 'Electronic', 'Jazz', 'Rock', 'Classical', 'Hip Hop', 'Ambient'];
export const moods = ['Chill', 'Epic', 'Energetic', 'Melancholic', 'Uplifting', 'Dark', 'Peaceful', 'Intense'];
