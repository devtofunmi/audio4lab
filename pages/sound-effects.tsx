import React from "react";
import Layout from "../components/Layout";
import MusicCardSimple from "../components/MusicCardSimple";
import { Track } from "../types/audio";

const soundEffects: Track[] = [
  {
    id: "se1",
    title: "Rain Drops",
    genre: "Nature",
    mood: "Calming",
    duration: "0:15",
    artist: "Billie Eilish",
    url: "/audio/rain-drops.mp3",
    coverArt: "/images/rain-drops-cover.jpg",
    bpm: 0,
  },
  {
    id: "se2",
    title: "Thunder Storm",
    genre: "Nature",
    artist: "Billie Eilish",
    mood: "Dramatic",
    duration: "0:08",
    url: "/audio/thunder-storm.mp3",
    coverArt: "/images/thunder-storm-cover.jpg",
    bpm: 0,
  },
  {
    id: "se3",
    title: "Ocean Waves",
    genre: "Nature",
    mood: "Peaceful",
    duration: "0:12",
    url: "/audio/ocean-waves.mp3",
    coverArt: "/images/ocean-waves-cover.jpg",
    bpm: 0,
  },
  {
    id: "se4",
    title: "Forest Birds",
    genre: "Nature",
    mood: "Serene",
    artist: "Billie Eilish",
    duration: "0:20",
    url: "/audio/forest-birds.mp3",
    coverArt: "/images/forest-birds-cover.jpg",
    bpm: 0,
  },
  {
    id: "se5",
    title: "City Traffic",
    genre: "Urban",
    mood: "Busy",
    duration: "0:10",
    artist: "Billie Eilish",
    url: "/audio/city-traffic.mp3",
    coverArt: "/images/city-traffic-cover.jpg",
    bpm: 0,
  },
  {
    id: "se6",
    title: "Footsteps",
    artist: "Billie Eilish",
    genre: "Foley",
    mood: "Neutral",
    duration: "0:05",
    url: "/audio/footsteps.mp3",
    coverArt: "/images/footsteps-cover.jpg",
    bpm: 0,
  },
];

const categories = [
  { name: "All", count: soundEffects.length },
  { name: "Nature", count: 4 },
  { name: "Urban", count: 1 },
  { name: "Foley", count: 1 },
];

const SoundEffects = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredEffects = selectedCategory === "All" 
    ? soundEffects 
    : soundEffects.filter(effect => effect.genre === selectedCategory);

  return (
    <Layout title="Sound Effects">
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 lg:gap-4 mb-6">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.name
                  ? 'bg-white text-black'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
      </div>

      <section>
        <h2 className="text-xl font-bold mb-6 text-white">
          {selectedCategory === "All" ? "All Sound Effects" : `${selectedCategory} Sounds`}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
          {filteredEffects.map((effect) => (
            <MusicCardSimple
              key={effect.id}
              track={effect}
              showDownload={true}
              showPlayButton={true}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default SoundEffects;