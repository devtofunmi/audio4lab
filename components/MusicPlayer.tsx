"use client";

import { usePlayer } from "../contexts/PlayerContext";
import { useState } from "react";
import {
  Play,
  Pause,
  Previous,
  Next,
  VolumeHigh,
  VolumeLow,
  VolumeSlash,
  Heart,
  More,
  CloseCircle,
} from "iconsax-react";
import Image from "next/image";

const MusicPlayer = () => {
  const { playerState, togglePlay, setVolume, closePlayer } = usePlayer();
  const [isVolumeExpanded, setIsVolumeExpanded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  if (!playerState.currentTrack) {
    return null;
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  // Mock waveform visualization
  const WaveformVisualization = () => {
    const bars = Array.from({ length: 60 }, (_, i) => {
      const height = Math.random() * 40 + 10;
      const isActive =
        i < (playerState.currentTime / (playerState.duration || 100)) * 60;
      return (
        <div
          key={i}
          className={`w-1 rounded-full transition-all duration-150 ${
            isActive ? "bg-white" : "bg-gray-600"
          }`}
          style={{ height: `${height}px` }}
        />
      );
    });

    return (
      <div className="flex items-center justify-center space-x-1 h-12 flex-1 max-w-md">
        {bars}
      </div>
    );
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1a1a1a] border-t border-gray-700 z-50 backdrop-blur-md">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left: Track Info */}
          <div className="flex items-center space-x-4 flex-1 min-w-0 max-w-xs">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
              <Image
                src="/billie.jpg"
                alt={playerState.currentTrack.title}
                width={56}
                height={56}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="text-white font-medium truncate text-sm">
                {playerState.currentTrack.title}
              </h4>
              <p className="text-gray-400 text-xs truncate">ANBR</p>
            </div>
            <button
              onClick={() => setIsLiked(!isLiked)}
              className="text-gray-400 hover:text-white transition-colors p-1"
            >
              <Heart
                size="18"
                color={isLiked ? "#ef4444" : "currentColor"}
                variant={isLiked ? "Bold" : "Outline"}
              />
            </button>
          </div>

          {/* Center: Controls and Waveform */}
          <div className="flex flex-col items-center space-y-2 flex-1 max-w-2xl">
            {/* Controls */}
            <div className="flex items-center space-x-6">
              <button className="text-gray-400 hover:text-white transition-colors">
                <Previous size="20" />
              </button>

              <button
                onClick={togglePlay}
                className="w-10 h-10 bg-white hover:bg-gray-200 text-black rounded-full flex items-center justify-center transition-all hover:scale-105"
              >
                {playerState.isPlaying ? (
                  <Pause size="18" color="#000" variant="Bold" />
                ) : (
                  <Play
                    size="18"
                    color="#000"
                    variant="Bold"
                    className="ml-0.5"
                  />
                )}
              </button>

              <button className="text-gray-400 hover:text-white transition-colors">
                <Next size="20" />
              </button>
            </div>

            {/* Time and Waveform */}
            <div className="flex items-center space-x-4 w-full">
              <span className="text-gray-400 text-xs w-10 text-right">
                {formatTime(playerState.currentTime)}
              </span>

              <WaveformVisualization />

              <span className="text-gray-400 text-xs w-10">
                {formatTime(playerState.duration)}
              </span>
            </div>
          </div>

          {/* Right: Volume and More */}
          <div className="flex items-center space-x-4 flex-1 justify-end max-w-xs">
            <button className="text-gray-400 hover:text-white transition-colors">
              <More size="20" />
            </button>

            <button className="text-gray-400 hover:text-white transition-colors">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </button>

            {/* Volume Control */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsVolumeExpanded(!isVolumeExpanded)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {playerState.volume === 0 ? (
                  <VolumeSlash size="20" />
                ) : playerState.volume < 0.5 ? (
                  <VolumeLow size="20" />
                ) : (
                  <VolumeHigh size="20" />
                )}
              </button>

              <div className="w-20">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={playerState.volume}
                  onChange={handleVolumeChange}
                  className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer volume-slider"
                />
              </div>
            </div>

            <button className="text-gray-400 hover:text-white transition-colors">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                />
              </svg>
            </button>

            <button
              onClick={closePlayer}
              className="text-gray-400 hover:text-red-400 transition-colors"
              title="Close player"
            >
              <CloseCircle size="20" />
            </button>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .volume-slider::-webkit-slider-thumb {
          appearance: none;
          height: 12px;
          width: 12px;
          border-radius: 50%;
          background: #ffffff;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        .volume-slider::-moz-range-thumb {
          height: 12px;
          width: 12px;
          border-radius: 50%;
          background: #ffffff;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        .volume-slider {
          background: linear-gradient(
            to right,
            #ffffff 0%,
            #ffffff ${playerState.volume * 100}%,
            #4b5563 ${playerState.volume * 100}%,
            #4b5563 100%
          );
        }
      `}</style>
    </div>
  );
};

export default MusicPlayer;
