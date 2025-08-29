/* eslint-disable @next/next/no-img-element */
import React from "react";
import { usePlayer } from "@/contexts/PlayerContext";
import {
  Play,
  Pause,
  VolumeHigh,
  CloseCircle,
  Previous,
  Next,
} from "iconsax-react";

const MusicPlayer: React.FC = () => {
  const {
    playerState,
    togglePlay,
    setVolume,
    setCurrentTime,
    nextTrack,
    previousTrack,
    closePlayer,
  } = usePlayer();

  if (!playerState.currentTrack) return null;

  const { currentTrack, isPlaying, currentTime, duration, volume } =
    playerState;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = (parseFloat(e.target.value) / 100) * duration;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(e.target.value) / 100);
  };

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#181818] text-white px-3 sm:px-6 py-2 sm:py-3 z-50 border-t border-gray-800">
      {/* Desktop Layout */}
      <div className="hidden md:flex items-center justify-between w-full">
        {/* Left: Track Info */}
        <div className="flex items-center space-x-3 w-[20%]">
          <img
            src="/billie.jpg"
            alt={currentTrack.title}
            className="w-12 h-12 rounded-md object-cover"
          />
          <div className="min-w-0">
            <h4 className="text-sm font-medium truncate">
              {currentTrack.title}
            </h4>
            <p className="text-gray-400 text-xs truncate">
              {currentTrack.genre}
            </p>
          </div>
        </div>

        {/* Center: Controls + Progress */}
        <div className="flex flex-col items-center flex-1 mx-8">
          {/* Controls */}
          <div className="flex items-center space-x-6 mb-1">
            <button
              onClick={previousTrack}
              className="text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <Previous size="20" color="#9CA3AF" />
            </button>

            <button
              onClick={togglePlay}
              className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center hover:scale-105 transition-transform"
            >
              {isPlaying ? (
                <Pause size="20" color="#000000" variant="Bold" />
              ) : (
                <Play size="20" color="#000000" variant="Bold" />
              )}
            </button>

            <button
              onClick={nextTrack}
              className="text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <Next size="20" color="#9CA3AF" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center space-x-2 w-full">
            <span className="text-xs text-gray-400 min-w-[30px] text-right">
              {formatTime(currentTime)}
            </span>
            <div className="flex-1 h-1 bg-gray-700 rounded-full relative group cursor-pointer">
              <div
                className="h-full bg-white rounded-full"
                style={{ width: `${progressPercentage}%` }}
              ></div>
              <input
                type="range"
                min="0"
                max="100"
                value={progressPercentage}
                onChange={handleProgressChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer 
                           [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 
                           [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full 
                           [&::-webkit-slider-thumb]:opacity-0 group-hover:[&::-webkit-slider-thumb]:opacity-100"
              />
            </div>
            <span className="text-xs text-gray-400 min-w-[30px] text-left">
              {formatTime(duration)}
            </span>
          </div>
        </div>

        {/* Right: Volume + Actions */}
        <div className="flex items-center space-x-4 w-[20%] justify-end">
          <button className="text-gray-400 hover:text-white transition-colors cursor-pointer">
            <span className="text-lg">♡</span>
          </button>

          <div className="flex items-center space-x-2">
            <VolumeHigh
              size="18"
              color="#9CA3AF"
              className="hover:text-white cursor-pointer"
            />
            <div className="w-20 h-1 bg-gray-700 rounded-full relative group cursor-pointer">
              <div
                className="h-full bg-white rounded-full"
                style={{ width: `${volume * 100}%` }}
              ></div>
              <input
                type="range"
                min="0"
                max="100"
                value={volume * 100}
                onChange={handleVolumeChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer
                           [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 
                           [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full 
                           [&::-webkit-slider-thumb]:opacity-0 group-hover:[&::-webkit-slider-thumb]:opacity-100"
              />
            </div>
          </div>

          <button
            onClick={closePlayer}
            className="text-gray-400 hover:text-white transition-colors cursor-pointer ml-2"
            title="Close player"
          >
            <CloseCircle size="20" color="#9CA3AF" />
          </button>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        {/* Top Row: Track Info + Close */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-3 flex-1 min-w-0">
            <img
              src="/billie.jpg"
              alt={currentTrack.title}
              className="w-10 h-10 rounded-md object-cover flex-shrink-0"
            />
            <div className="min-w-0 flex-1">
              <h4 className="text-sm font-medium truncate">
                {currentTrack.title}
              </h4>
              <p className="text-gray-400 text-xs truncate">
                {currentTrack.genre}
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 flex-shrink-0">
            <button className="text-gray-400 hover:text-white transition-colors cursor-pointer p-1">
              <span className="text-lg">♡</span>
            </button>
            <button
              onClick={closePlayer}
              className="text-gray-400 hover:text-white transition-colors cursor-pointer p-1"
              title="Close player"
            >
              <CloseCircle size="18" color="#9CA3AF" />
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-xs text-gray-400 min-w-[30px] text-right">
            {formatTime(currentTime)}
          </span>
          <div className="flex-1 h-1 bg-gray-700 rounded-full relative group cursor-pointer">
            <div
              className="h-full bg-white rounded-full"
              style={{ width: `${progressPercentage}%` }}
            ></div>
            <input
              type="range"
              min="0"
              max="100"
              value={progressPercentage}
              onChange={handleProgressChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer 
                         [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 
                         [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full 
                         [&::-webkit-slider-thumb]:opacity-0 group-hover:[&::-webkit-slider-thumb]:opacity-100"
            />
          </div>
          <span className="text-xs text-gray-400 min-w-[30px] text-left">
            {formatTime(duration)}
          </span>
        </div>

        {/* Bottom Row: Centered Controls + Volume */}
        <div className="flex items-center justify-center relative">
          {/* Controls - Centered */}
          <div className="flex items-center space-x-4">
            <button
              onClick={previousTrack}
              className="text-gray-400 hover:text-white transition-colors cursor-pointer p-1"
            >
              <Previous size="18" color="#9CA3AF" />
            </button>

            <button
              onClick={togglePlay}
              className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center hover:scale-105 transition-transform"
            >
              {isPlaying ? (
                <Pause size="16" color="#000000" variant="Bold" />
              ) : (
                <Play size="16" color="#000000" variant="Bold" />
              )}
            </button>

            <button
              onClick={nextTrack}
              className="text-gray-400 hover:text-white transition-colors cursor-pointer p-1"
            >
              <Next size="18" color="#9CA3AF" />
            </button>
          </div>

          {/* Volume Control - Positioned to the right */}
          <div className="absolute right-0 flex items-center space-x-2">
            <VolumeHigh
              size="16"
              color="#9CA3AF"
              className="hover:text-white cursor-pointer"
            />
            <div className="w-16 h-1 bg-gray-700 rounded-full relative group cursor-pointer">
              <div
                className="h-full bg-white rounded-full"
                style={{ width: `${volume * 100}%` }}
              ></div>
              <input
                type="range"
                min="0"
                max="100"
                value={volume * 100}
                onChange={handleVolumeChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer
                           [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 
                           [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full 
                           [&::-webkit-slider-thumb]:opacity-0 group-hover:[&::-webkit-slider-thumb]:opacity-100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
