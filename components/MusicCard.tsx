'use client';

import { Track } from '@/types/audio';
import { usePlayer } from '@/contexts/PlayerContext';
import { useState } from 'react';

interface MusicCardProps {
  track: Track;
  showDownload?: boolean;
  showPlayButton?: boolean;
}

const MusicCard: React.FC<MusicCardProps> = ({ 
  track, 
  showDownload = true, 
  showPlayButton = true 
}) => {
  const { playerState, setTrack, togglePlay } = usePlayer();
  const [isHovered, setIsHovered] = useState(false);
  
  const isCurrentTrack = playerState.currentTrack?.id === track.id;
  const isPlaying = isCurrentTrack && playerState.isPlaying;

  const handlePlayClick = () => {
    if (isCurrentTrack) {
      togglePlay();
    } else {
      setTrack(track);
    }
  };

  const handleDownload = () => {
    // Mock download functionality
    const link = document.createElement('a');
    link.href = track.url;
    link.download = `${track.title}.mp3`;
    link.click();
  };

  return (
    <div
      className="bg-gray-900 rounded-lg p-4 hover:bg-gray-800 transition-all duration-200 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Cover Art */}
      <div className="relative mb-4">
        <div className="w-full h-40 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center">
          <span className="text-4xl text-white">🎵</span>
        </div>
        
        {/* Play Button Overlay */}
        {showPlayButton && (
          <button
            onClick={handlePlayClick}
            className={`absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg transition-all duration-200 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className={`w-16 h-16 rounded-full bg-white flex items-center justify-center transition-transform ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}>
              {isPlaying ? (
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                </svg>
              ) : (
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              )}
            </div>
          </button>
        )}
      </div>

      {/* Track Info */}
      <div className="space-y-2">
        <h3 className="text-white font-semibold text-lg truncate">{track.title}</h3>
        
        <div className="flex items-center justify-between text-sm text-gray-400">
          <span className="bg-white bg-opacity-20 text-white px-2 py-1 rounded-full">
            {track.genre}
          </span>
          <span className="bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
            {track.mood}
          </span>
        </div>
        
        <div className="flex items-center justify-between text-sm text-gray-400">
          <span>⏱️ {track.duration}</span>
          {track.bpm && <span>🎯 {track.bpm} BPM</span>}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-4 flex items-center justify-between">
        {showPlayButton && (
          <button
            onClick={handlePlayClick}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
              isCurrentTrack
                ? 'bg-white text-black'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            {isPlaying ? (
              <>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                </svg>
                <span>Pause</span>
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                <span>Play</span>
              </>
            )}
          </button>
        )}
        
        {showDownload && (
          <button
            onClick={handleDownload}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Download</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default MusicCard;
