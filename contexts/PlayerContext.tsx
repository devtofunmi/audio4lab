'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Track, PlayerState } from '../types/audio';

interface PlayerContextType {
  playerState: PlayerState;
  setTrack: (track: Track) => void;
  togglePlay: () => void;
  setVolume: (volume: number) => void;
  setCurrentTime: (time: number) => void;
  closePlayer: () => void;
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (!context) {
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
    volume: 1,
  });

  const setTrack = (track: Track) => {
    // Convert duration string (e.g., "3:14") to seconds
    const [minutes, seconds] = track.duration.split(':').map(Number);
    const durationInSeconds = minutes * 60 + seconds;
    
    setPlayerState(prev => ({
      ...prev,
      currentTrack: track,
      isPlaying: true,
      currentTime: 0,
      duration: durationInSeconds,
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

  const setCurrentTime = (currentTime: number) => {
    setPlayerState(prev => ({
      ...prev,
      currentTime,
    }));
  };

  const closePlayer = () => {
    setPlayerState(prev => ({
      ...prev,
      currentTrack: null,
      isPlaying: false,
      currentTime: 0,
    }));
  };

  // Simulate time progression
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (playerState.isPlaying && playerState.currentTrack) {
      interval = setInterval(() => {
        setPlayerState(prev => {
          const newTime = prev.currentTime + 1;
          if (newTime >= prev.duration) {
            return {
              ...prev,
              currentTime: prev.duration,
              isPlaying: false,
            };
          }
          return {
            ...prev,
            currentTime: newTime,
          };
        });
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [playerState.isPlaying, playerState.currentTrack]);

  const value = {
    playerState,
    setTrack,
    togglePlay,
    setVolume,
    setCurrentTime,
    closePlayer,
  };

  return (
    <PlayerContext.Provider value={value}>
      {children}
    </PlayerContext.Provider>
  );
};