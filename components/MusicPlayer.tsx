'use client';

import { usePlayer } from '@/contexts/PlayerContext';
import { useState } from 'react';

const MusicPlayer = () => {
  const { playerState, togglePlay, setVolume, setCurrentTime } = usePlayer();
  const [isVolumeExpanded, setIsVolumeExpanded] = useState(false);

  if (!playerState.currentTrack) {
    return null;
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Track Info */}
          <div className="flex items-center space-x-4 flex-1 min-w-0">
            <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-xl text-white">🎵</span>
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="text-white font-medium truncate">
                {playerState.currentTrack.title}
              </h4>
              <p className="text-gray-400 text-sm truncate">
                {playerState.currentTrack.genre} • {playerState.currentTrack.mood}
              </p>
            </div>
          </div>

          {/* Playback Controls */}
          <div className="flex items-center space-x-4 flex-shrink-0">
            <button
              onClick={togglePlay}
              className="w-12 h-12 bg-white hover:bg-gray-200 text-black rounded-full flex items-center justify-center transition-colors"
            >
              {playerState.isPlaying ? (
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                </svg>
              ) : (
                <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              )}
            </button>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center space-x-3 flex-1 max-w-md mx-8">
            <span className="text-gray-400 text-sm w-12 text-right">
              {formatTime(playerState.currentTime)}
            </span>
            <div className="flex-1">
              <input
                type="range"
                min="0"
                max={playerState.duration || 100}
                value={playerState.currentTime}
                onChange={handleProgressChange}
                className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #ffffff 0%, #ffffff ${(playerState.currentTime / (playerState.duration || 100)) * 100}%, #374151 ${(playerState.currentTime / (playerState.duration || 100)) * 100}%, #374151 100%)`
                }}
              />
            </div>
            <span className="text-gray-400 text-sm w-12">
              {formatTime(playerState.duration)}
            </span>
          </div>

          {/* Volume Control */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <button
              onClick={() => setIsVolumeExpanded(!isVolumeExpanded)}
              className="text-gray-400 hover:text-white p-2 transition-colors"
            >
              {playerState.volume === 0 ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
              ) : playerState.volume < 0.5 ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              )}
            </button>
            {isVolumeExpanded && (
              <div className="w-24">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={playerState.volume}
                  onChange={handleVolumeChange}
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #ffffff 0%, #ffffff ${playerState.volume * 100}%, #374151 ${playerState.volume * 100}%, #374151 100%)`
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Custom Slider Styles */}
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #ffffff;
          cursor: pointer;
          border: 2px solid #111111;
        }
        .slider::-moz-range-thumb {
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #ffffff;
          cursor: pointer;
          border: 2px solid #111111;
        }
      `}</style>
    </div>
  );
};

export default MusicPlayer;
