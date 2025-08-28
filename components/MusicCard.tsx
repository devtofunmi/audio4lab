import React from "react";
import { Play } from "iconsax-react";

interface MusicCardProps {
  image: string;
  title: string;
  artist: string;
}

const MusicCard: React.FC<MusicCardProps> = ({ image, title, artist }) => {
  return (
    <div className="relative w-full rounded-xl overflow-hidden group cursor-pointer">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Play size="48" color="#FFD700" variant="Bold" />
      </div>
      <div className="absolute bottom-0 left-0 p-4 w-full">
        <h3 className="text-lg font-bold text-white truncate">{title}</h3>
        <p className="text-sm text-gray-300 truncate">{artist}</p>
      </div>
    </div>
  );
};

export default MusicCard;