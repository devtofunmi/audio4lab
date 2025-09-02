import React, { useState } from 'react';
import Layout from '../components/Layout';
import MusicCardSimple from '../components/MusicCardSimple';
import { ArrowRight2 } from 'iconsax-react';
import { Track } from '../types/audio';

const soundEffects: Track[] = [
  {
    id: "se1",
    title: "Rain Drops",
    genre: "Nature",
    mood: "Calming",
    duration: "0:15",
    artist: "Sound Effects",
    url: "/audio/rain-drops.mp3",
    coverArt: "/images/rain-drops-cover.jpg",
    bpm: 0,
  },
  {
    id: "se2",
    title: "Thunder Storm",
    genre: "Nature",
    artist: "Sound Effects",
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
    artist: "Sound Effects",
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
    artist: "Sound Effects",
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
    artist: "Sound Effects",
    url: "/audio/city-traffic.mp3",
    coverArt: "/images/city-traffic-cover.jpg",
    bpm: 0,
  },
  {
    id: "se6",
    title: "Footsteps",
    artist: "Sound Effects",
    genre: "Foley",
    mood: "Neutral",
    duration: "0:05",
    url: "/audio/footsteps.mp3",
    coverArt: "/images/footsteps-cover.jpg",
    bpm: 0,
  },
  {
    id: "se7",
    title: "Keyboard Typing",
    artist: "Sound Effects",
    genre: "Foley",
    mood: "Neutral",
    duration: "0:07",
    url: "/audio/keyboard-typing.mp3",
    coverArt: "/images/keyboard-typing-cover.jpg",
    bpm: 0,
  },
  {
    id: "se8",
    title: "Door Creak",
    artist: "Sound Effects",
    genre: "Foley",
    mood: "Eerie",
    duration: "0:03",
    url: "/audio/door-creak.mp3",
    coverArt: "/images/door-creak-cover.jpg",
    bpm: 0,
  },
  {
    id: "se9",
    title: "Button Click",
    artist: "Sound Effects",
    genre: "UI",
    mood: "Neutral",
    duration: "0:01",
    url: "/audio/button-click.mp3",
    coverArt: "/images/button-click-cover.jpg",
    bpm: 0,
  },
  {
    id: "se10",
    title: "Notification Ding",
    artist: "Sound Effects",
    genre: "UI",
    mood: "Alert",
    duration: "0:02",
    url: "/audio/notification-ding.mp3",
    coverArt: "/images/notification-ding-cover.jpg",
    bpm: 0,
  },
  {
    id: "se11",
    title: "Whoosh",
    artist: "Sound Effects",
    genre: "Cinematic",
    mood: "Action",
    duration: "0:02",
    url: "/audio/whoosh.mp3",
    coverArt: "/images/whoosh-cover.jpg",
    bpm: 0,
  },
  {
    id: "se12",
    title: "Explosion",
    artist: "Sound Effects",
    genre: "Cinematic",
    mood: "Intense",
    duration: "0:05",
    url: "/audio/explosion.mp3",
    coverArt: "/images/explosion-cover.jpg",
    bpm: 0,
  },
  {
    id: "se13",
    title: "Laser Gun",
    artist: "Sound Effects",
    genre: "Sci-Fi",
    mood: "Action",
    duration: "0:03",
    url: "/audio/laser-gun.mp3",
    coverArt: "/images/laser-gun-cover.jpg",
    bpm: 0,
  },
  {
    id: "se14",
    title: "Spaceship Hum",
    artist: "Sound Effects",
    genre: "Sci-Fi",
    mood: "Ambient",
    duration: "0:18",
    url: "/audio/spaceship-hum.mp3",
    coverArt: "/images/spaceship-hum-cover.jpg",
    bpm: 0,
  },
  {
    id: "se15",
    title: "Cartoon Boing",
    artist: "Sound Effects",
    genre: "Cartoon",
    mood: "Funny",
    duration: "0:02",
    url: "/audio/cartoon-boing.mp3",
    coverArt: "/images/cartoon-boing-cover.jpg",
    bpm: 0,
  },
  {
    id: "se16",
    title: "Sad Trombone",
    artist: "Sound Effects",
    genre: "Cartoon",
    mood: "Funny",
    duration: "0:04",
    url: "/audio/sad-trombone.mp3",
    coverArt: "/images/sad-trombone-cover.jpg",
    bpm: 0,
  },
  {
    id: "se17",
    title: "Crowd Cheering",
    artist: "Sound Effects",
    genre: "Crowd",
    mood: "Excited",
    duration: "0:10",
    url: "/audio/crowd-cheering.mp3",
    coverArt: "/images/crowd-cheering-cover.jpg",
    bpm: 0,
  },
  {
    id: "se18",
    title: "Crowd Clapping",
    artist: "Sound Effects",
    genre: "Crowd",
    mood: "Happy",
    duration: "0:09",
    url: "/audio/crowd-clapping.mp3",
    coverArt: "/images/crowd-clapping-cover.jpg",
    bpm: 0,
  },
  {
    id: "se19",
    title: "Heartbeat",
    artist: "Sound Effects",
    genre: "Medical",
    mood: "Tense",
    duration: "0:10",
    url: "/audio/heartbeat.mp3",
    coverArt: "/images/heartbeat-cover.jpg",
    bpm: 0,
  },
  {
    id: "se20",
    title: "Clock Ticking",
    artist: "Sound Effects",
    genre: "Foley",
    mood: "Suspenseful",
    duration: "0:12",
    url: "/audio/clock-ticking.mp3",
    coverArt: "/images/clock-ticking-cover.jpg",
    bpm: 0,
  },
  {
    id: "se21",
    title: "Fire Crackling",
    artist: "Sound Effects",
    genre: "Nature",
    mood: "Cozy",
    duration: "0:15",
    url: "/audio/fire-crackling.mp3",
    coverArt: "/images/fire-crackling-cover.jpg",
    bpm: 0,
  },
  {
    id: "se22",
    title: "Car Engine",
    artist: "Sound Effects",
    genre: "Urban",
    mood: "Neutral",
    duration: "0:11",
    url: "/audio/car-engine.mp3",
    coverArt: "/images/car-engine-cover.jpg",
    bpm: 0,
  },
  {
    id: "se23",
    title: "Police Siren",
    artist: "Sound Effects",
    genre: "Urban",
    mood: "Urgent",
    duration: "0:09",
    url: "/audio/police-siren.mp3",
    coverArt: "/images/police-siren-cover.jpg",
    bpm: 0,
  },
  {
    id: "se24",
    title: "Record Scratch",
    artist: "Sound Effects",
    genre: "Foley",
    mood: "Abrupt",
    duration: "0:02",
    url: "/audio/record-scratch.mp3",
    coverArt: "/images/record-scratch-cover.jpg",
    bpm: 0,
  },
  {
    id: "se25",
    title: "Magic Wand",
    artist: "Sound Effects",
    genre: "Fantasy",
    mood: "Magical",
    duration: "0:03",
    url: "/audio/magic-wand.mp3",
    coverArt: "/images/magic-wand-cover.jpg",
    bpm: 0,
  },
  {
    id: "se26",
    title: "Dragon Roar",
    artist: "Sound Effects",
    genre: "Fantasy",
    mood: "Intense",
    duration: "0:06",
    url: "/audio/dragon-roar.mp3",
    coverArt: "/images/dragon-roar-cover.jpg",
    bpm: 0,
  },
];

const soundEffectCategories = [
  { name: "All", count: soundEffects.length },
  { name: "Nature", count: soundEffects.filter(effect => effect.genre === 'Nature').length },
  { name: "Urban", count: soundEffects.filter(effect => effect.genre === 'Urban').length },
  { name: "Foley", count: soundEffects.filter(effect => effect.genre === 'Foley').length },
  { name: "UI", count: soundEffects.filter(effect => effect.genre === 'UI').length },
  { name: "Cinematic", count: soundEffects.filter(effect => effect.genre === 'Cinematic').length },
  { name: "Sci-Fi", count: soundEffects.filter(effect => effect.genre === 'Sci-Fi').length },
  { name: "Cartoon", count: soundEffects.filter(effect => effect.genre === 'Cartoon').length },
  { name: "Crowd", count: soundEffects.filter(effect => effect.genre === 'Crowd').length },
  { name: "Medical", count: soundEffects.filter(effect => effect.genre === 'Medical').length },
  { name: "Fantasy", count: soundEffects.filter(effect => effect.genre === 'Fantasy').length },
];

const SoundEffects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredEffects = selectedCategory === "All"
    ? soundEffects
    : soundEffects.filter(effect => effect.genre === selectedCategory);

  return (
    <Layout title="Sound Effects">
      {/* Sound Effect Categories */}
      <section className="mb-8">
        <div className='fixed top-18 right-0 left-0 lg:left-64 bg-[#0d0d0d]  px-4 py-6 z-40'>
        <h2 className="text-xl lg:text-2xl font-bold text-white mb-6">Explore sound effects to match your project</h2>
        <div className="flex flex-wrap gap-3">
          {soundEffectCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category.name)}
              className={`${ 
                selectedCategory === category.name
                  ? 'bg-white text-black'
                  : 'bg-[#2b2b2b] text-[#b2b2b2]'
              } px-3 py-2 lg:px-4 lg:py-2 rounded-full font-medium hover:scale-105 transition-transform cursor-pointer text-sm lg:text-base`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
        </div>
      </section>

      {/* Discover Sound Effects Section */}
      <section className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
          <h2 className="text-xl lg:text-2xl font-bold text-white">Discover our library of sound effects</h2>
          <button className="flex items-center justify-center sm:justify-start space-x-2 text-white hover:text-gray-300 transition-colors">
            <span>Explore all sound effects</span>
            <ArrowRight2 size="20" />
          </button>
        </div>
        {filteredEffects.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 mt-30 gap-4 lg:gap-6">
            {filteredEffects.map((track) => (
              <MusicCardSimple key={track.id} track={track} showDownload={true} showPlayButton={true} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-gray-400 mt-8 h-40">
            <p>No sound effects found in this category.</p>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default SoundEffects;