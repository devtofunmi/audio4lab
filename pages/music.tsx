import React from 'react';
import Layout from '../components/Layout';
import MusicCardSimple from '../components/MusicCardSimple';
import { ArrowRight2 } from 'iconsax-react';
import { Track } from '../types/audio';

const featuredTracks: Track[] = [
  {
    id: "7",
    title: "Little Things",
    artist: "Billie Eilish",
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
    artist: "Billie Eilish",
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
    artist: "Billie Eilish",
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
    artist: "Billie Eilish",
    duration: "2:58",
    url: "/audio/daboomjiggle.mp3",
    coverArt: "/images/album10.jpg",
    bpm: 140,
  },
  {
    id: "11",
    title: "Laurel Leaves",
    genre: "Ambient",
    artist: "Billie Eilish",
    mood: "Peaceful",
    duration: "5:33",
    url: "/audio/laurel-leaves.mp3",
    coverArt: "/images/album11.jpg",
    bpm: 70,
  },
  {
    id: "12",
    title: "Roar",
    artist: "Billie Eilish",
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

const Music: React.FC = () => {
  return (
    <Layout title="Music">
      {/* Discover Music Section */}
      <section className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
          <h2 className="text-xl lg:text-2xl font-bold text-white">Discover music made by real artists</h2>
          <button className="flex items-center justify-center sm:justify-start space-x-2 text-white hover:text-gray-300 transition-colors">
            <span>Explore all music</span>
            <ArrowRight2 size="20" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 lg:gap-6">
          {featuredTracks.map((track) => (
            <MusicCardSimple key={track.id} track={track} showDownload={true} showPlayButton={true} />
          ))}
        </div>
      </section>

      {/* Music Categories */}
      <section className="mb-8">
        <h2 className="text-xl lg:text-2xl font-bold text-white mb-6">Explore music to match your project</h2>
        <div className="flex flex-wrap gap-3">
          {musicCategories.map((category, index) => (
            <button
              key={index}
              className={`${category.color} text-white px-3 py-2 lg:px-4 lg:py-2 rounded-full font-medium hover:scale-105 transition-transform cursor-pointer text-sm lg:text-base`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Music;