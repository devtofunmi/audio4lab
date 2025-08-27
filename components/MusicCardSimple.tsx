'use client';

import { Track } from '@/types/audio';
import { usePlayer } from '@/contexts/PlayerContext';
import { useState } from 'react';
import { Play, Pause, DocumentDownload } from 'iconsax-react';
import Image from 'next/image';

interface MusicCardProps {
  track: Track;
  showDownload?: boolean;
  showPlayButton?: boolean;
}

const MusicCardSimple: React.FC<MusicCardProps> = ({ 
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
      className="bg-[#171717] rounded-md  hover:border-gray-500 transition-all duration-300 group hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Cover Art */}
      <div className="relative mb-4">
        <div className="w-full h-40 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center overflow-hidden">
          {track.coverArt ? (
            <Image 
              src='/billie.jpg'
              alt={track.title} 
              width={160}
              height={160}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-4xl text-white">🎵</span>
          )}
        </div>
        
        {/* Action Buttons Overlay */}
        <div className={`absolute inset-0 flex items-center justify-center space-x-4 bg-black/50 bg-opacity-50 rounded-xl transition-all duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          {showPlayButton && (
            <button
              onClick={handlePlayClick}
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
            >
              {isPlaying ? (
                <Pause size="20" color="#000" variant="Bold" />
              ) : (
                <Play size="20" color="#000" variant="Bold" />
              )}
            </button>
          )}
          
          {showDownload && (
            <button
              onClick={handleDownload}
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
            >
              <DocumentDownload size="20" color="#000" variant="Bold" />
            </button>
          )}
        </div>
      </div>

      {/* Track Info */}
      <div className="space-y-2 p-1">
        <h3 className="text-white font-semibold text-md truncate">{track.title}</h3>
              
      </div>
    </div>
  );
};

export default MusicCardSimple;