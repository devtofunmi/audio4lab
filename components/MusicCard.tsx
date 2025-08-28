/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Play } from "iconsax-react";
import { Track } from "@/types/audio";
import { usePlayer } from "@/contexts/PlayerContext";

interface MusicCardProps {
  image?: string;
  title?: string;
  artist?: string;
  track?: Track;
}

const MusicCard: React.FC<MusicCardProps> = ({
  image,
  title,
  artist,
  track,
}) => {
  const { setTrack } = usePlayer();

  // Use track data if provided, otherwise use individual props
  const cardImage = track?.coverArt || image || "/billie.jpg";
  const cardTitle = track?.title || title || "Unknown Title";
  const cardArtist = track?.genre || artist || "Unknown Artist";

  const handlePlay = () => {
    if (track) {
      setTrack(track);
    } else {
      // Create a track object from individual props
      const newTrack: Track = {
        id: `${Date.now()}`,
        title: cardTitle,
        genre: cardArtist,
        mood: "Unknown",
        duration: "3:30",
        url: "",
        coverArt: cardImage,
      };
      setTrack(newTrack);
    }
  };
  return (
    <div
      className="relative w-full rounded-xl overflow-hidden group cursor-pointer"
      onClick={handlePlay}
    >
      <img
        src={cardImage}
        alt={cardTitle}
        className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Play size="48" color="#FFD700" variant="Bold" />
      </div>
      <div className="absolute bottom-0 left-0 p-4 w-full">
        <h3 className="text-lg font-bold text-white truncate">{cardTitle}</h3>
        <p className="text-sm text-gray-300 truncate">{cardArtist}</p>
      </div>
    </div>
  );
};

export default MusicCard;
