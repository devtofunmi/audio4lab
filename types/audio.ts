export interface Track {
  id: string;
  title: string;
  artist: string;
  genre: string;
  mood: string;
  duration: string;
  url: string;
  coverArt?: string;
  bpm?: number;
  createdAt?: string;
}

export interface GenerationForm {
  genre: string;
  mood: string;
  duration: number;
  tempo: number;
}

export interface PlayerState {
  currentTrack: Track | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
}

export type Genre = 'LoFi' | 'Cinematic' | 'Electronic' | 'Jazz' | 'Rock' | 'Classical' | 'Hip Hop' | 'Ambient';
export type Mood = 'Chill' | 'Epic' | 'Energetic' | 'Melancholic' | 'Uplifting' | 'Dark' | 'Peaceful' | 'Intense';
