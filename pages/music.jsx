import React from 'react';
import Sidebar from '../components/Sidebar';
import MusicCardSimple from '../components/MusicCardSimple';
import { SearchNormal, Notification, Setting, ArrowRight2 } from 'iconsax-react';
import { PlayerProvider } from '../contexts/PlayerContext';

const featuredTracks = [
  {
    id: "7",
    title: "Little Things",
    genre: "Electronic",
    mood: "Chill",
    duration: "3:24",
    url: "/audio/little-things.mp3",
    coverArt: "/images/album7.jpg",
    bpm: 85,
  },
  {
    id: "8",
    title: "Curious George",
    genre: "Hip Hop",
    mood: "Energetic",
    duration: "4:12",
    url: "/audio/curious-george.mp3",
    coverArt: "/images/album8.jpg",
    bpm: 120,
  },
  {
    id: "9",
    title: "Sexy Smile",
    genre: "Electronic",
    mood: "Uplifting",
    duration: "3:45",
    url: "/audio/sexy-smile.mp3",
    coverArt: "/images/album9.jpg",
    bpm: 128,
  },
  {
    id: "10",
    title: "DABOOMJIGGLE",
    genre: "Electronic",
    mood: "Energetic",
    duration: "2:58",
    url: "/audio/daboomjiggle.mp3",
    coverArt: "/images/album10.jpg",
    bpm: 140,
  },
  {
    id: "11",
    title: "Laurel Leaves",
    genre: "Ambient",
    mood: "Peaceful",
    duration: "5:33",
    url: "/audio/laurel-leaves.mp3",
    coverArt: "/images/album11.jpg",
    bpm: 70,
  },
  {
    id: "12",
    title: "Roar",
    genre: "Rock",
    mood: "Intense",
    duration: "3:21",
    url: "/audio/roar.mp3",
    coverArt: "/images/album12.jpg",
    bpm: 150,
  },
];

const musicCategories = [
  { name: "Holiday", color: "bg-red-500" },
  { name: "Fantasy", color: "bg-purple-500" },
  { name: "Electro", color: "bg-blue-500" },
  { name: "Hardcore", color: "bg-orange-500" },
  { name: "Pop", color: "bg-pink-500" },
  { name: "Modern Rock", color: "bg-green-500" },
  { name: "Pop", color: "bg-yellow-500" },
  { name: "Modern Pop", color: "bg-indigo-500" },
  { name: "Pop", color: "bg-teal-500" },
  { name: "Dreampop", color: "bg-rose-500" },
  { name: "Future", color: "bg-cyan-500" },
  { name: "Bass", color: "bg-gray-500" },
];

const Music = () => {
  return (
    <PlayerProvider>
      <div className="flex bg-[#0d0d0d] min-h-screen text-white">
        <Sidebar />
        <div className="ml-64 flex-1 p-8">
          <header className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-white">Music</h1>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search" 
                  className="bg-[#171717] border-2 border-gray-600 rounded-full pl-10 pr-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                />
                <SearchNormal size="20" color="#9CA3AF" className="absolute left-3 top-1/2 transform -translate-y-1/2" />
              </div>
              <Notification size="24" color="#ffffff" className="cursor-pointer hover:scale-110 transition-transform" />
              <Setting size="24" color="#9CA3AF" className="cursor-pointer hover:scale-110 transition-transform" />
            </div>
          </header>

          {/* Discover Music Section */}
          <section className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Discover music made by real artists</h2>
              <button className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors">
                <span>Explore all music</span>
                <ArrowRight2 size="20" />
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {featuredTracks.map((track) => (
                <MusicCardSimple key={track.id} track={track} showDownload={true} showPlayButton={true} />
              ))}
            </div>
          </section>

          {/* Music Categories */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Explore music to match your project</h2>
            <div className="flex flex-wrap gap-3">
              {musicCategories.map((category, index) => (
                <button
                  key={index}
                  className={`${category.color} text-white px-4 py-2 rounded-full font-medium hover:scale-105 transition-transform cursor-pointer`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </section>
        </div>
      </div>
    </PlayerProvider>
  );
};

export default Music;