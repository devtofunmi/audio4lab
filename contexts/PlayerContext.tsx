'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Track, PlayerState } from '@/types/audio';

interface PlayerContextType {
  playerState: PlayerState;
  setTrack: (track: Track) => void;
  togglePlay: () => void;
  setVolume: (volume: number) => void;
  setCurrentTime: (time: number) => void;
  clearTrack: () => void;
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (context === undefined) {
    throw new Error('usePlayer must be used within a PlayerProvider');
  }
  return context;
};

interface PlayerProviderProps {
  children: ReactNode;
}

export const PlayerProvider: React.FC<PlayerProviderProps> = ({ children }) => {
  const [playerState, setPlayerState] = useState<PlayerState>({
    currentTrack: null,
    isPlaying: false,
    currentTime: 0,
    duration: 0,
    volume: 0.7,
  });

  const setTrack = (track: Track) => {
    setPlayerState(prev => ({
      ...prev,
      currentTrack: track,
      isPlaying: false,
      currentTime: 0,
      duration: 0,
    }));
  };

  const togglePlay = () => {
    setPlayerState(prev => ({
      ...prev,
      isPlaying: !prev.isPlaying,
    }));
  };

  const setVolume = (volume: number) => {
    setPlayerState(prev => ({
      ...prev,
      volume,
    }));
  };

  const setCurrentTime = (time: number) => {
    setPlayerState(prev => ({
      ...prev,
      currentTime: time,
    }));
  };

  const clearTrack = () => {
    setPlayerState(prev => ({
      ...prev,
      currentTrack: null,
      isPlaying: false,
      currentTime: 0,
      duration: 0,
    }));
  };

  const value: PlayerContextType = {
    playerState,
    setTrack,
    togglePlay,
    setVolume,
    setCurrentTime,
    clearTrack,
  };

  return (
    <PlayerContext.Provider value={value}>
      {children}
    </PlayerContext.Provider>
  );
};
