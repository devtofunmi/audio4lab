import React, { useState } from 'react';
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
  {
    id: "13",
    title: "xanny",
    artist: "Billie Eilish",
    genre: "Alternative",
    mood: "Calm",
    duration: "4:03",
    url: "/audio/xanny.mp3",
    coverArt: "/images/album13.jpg",
    bpm: 110,
  },
  {
    id: "14",
    title: "you should see me in a crown",
    artist: "Billie Eilish",
    genre: "Pop",
    mood: "Confident",
    duration: "3:01",
    url: "/audio/you-should-see-me-in-a-crown.mp3",
    coverArt: "/images/album14.jpg",
    bpm: 150,
  },
  {
    id: "15",
    title: "all the good girls go to hell",
    artist: "Billie Eilish",
    genre: "Pop",
    mood: "Sassy",
    duration: "2:48",
    url: "/audio/all-the-good-girls-go-to-hell.mp3",
    coverArt: "/images/album15.jpg",
    bpm: 185,
  },
  {
    id: "16",
    title: "wish you were gay",
    artist: "Billie Eilish",
    genre: "Pop",
    mood: "Sad",
    duration: "3:41",
    url: "/audio/wish-you-were-gay.mp3",
    coverArt: "/images/album16.jpg",
    bpm: 118,
  },
  {
    id: "17",
    title: "my strange addiction",
    artist: "Billie Eilish",
    genre: "Pop",
    mood: "Quirky",
    duration: "3:00",
    url: "/audio/my-strange-addiction.mp3",
    coverArt: "/images/album17.jpg",
    bpm: 120,
  },
  {
    id: "18",
    title: "ilomilo",
    artist: "Billie Eilish",
    genre: "Electronic",
    mood: "Anxious",
    duration: "2:36",
    url: "/audio/ilomilo.mp3",
    coverArt: "/images/album18.jpg",
    bpm: 120,
  },
  {
    id: "19",
    title: "listen before i go",
    artist: "Billie Eilish",
    genre: "Ballad",
    mood: "Melancholic",
    duration: "4:02",
    url: "/audio/listen-before-i-go.mp3",
    coverArt: "/images/album19.jpg",
    bpm: 74,
  },
  {
    id: "20",
    title: "i love you",
    artist: "Billie Eilish",
    genre: "Ballad",
    mood: "Romantic",
    duration: "4:51",
    url: "/audio/i-love-you.mp3",
    coverArt: "/images/album20.jpg",
    bpm: 55,
  },
  {
    id: "21",
    title: "goodbye",
    artist: "Billie Eilish",
    genre: "Alternative",
    mood: "Sad",
    duration: "1:59",
    url: "/audio/goodbye.mp3",
    coverArt: "/images/album21.jpg",
    bpm: 90,
  },
  {
    id: "22",
    title: "&burn",
    artist: "Billie Eilish",
    genre: "Alternative",
    mood: "Tense",
    duration: "2:59",
    url: "/audio/and-burn.mp3",
    coverArt: "/images/album22.jpg",
    bpm: 120,
  },
  {
    id: "23",
    title: "bellyache",
    artist: "Billie Eilish",
    genre: "Pop",
    mood: "Dark",
    duration: "2:59",
    url: "/audio/bellyache.mp3",
    coverArt: "/images/album23.jpg",
    bpm: 100,
  },
  {
    id: "24",
    title: "bored",
    artist: "Billie Eilish",
    genre: "Alternative",
    mood: "Melancholic",
    duration: "3:00",
    url: "/audio/bored.mp3",
    coverArt: "/images/album24.jpg",
    bpm: 123,
  },
  {
    id: "25",
    title: "come out and play",
    artist: "Billie Eilish",
    genre: "Folk",
    mood: "Gentle",
    duration: "3:30",
    url: "/audio/come-out-and-play.mp3",
    coverArt: "/images/album25.jpg",
    bpm: 80,
  },
  {
    id: "26",
    title: "copycat",
    artist: "Billie Eilish",
    genre: "Pop",
    mood: "Confident",
    duration: "3:13",
    url: "/audio/copycat.mp3",
    coverArt: "/images/album26.jpg",
    bpm: 120,
  },
  {
    id: "27",
    title: "hostage",
    artist: "Billie Eilish",
    genre: "Alternative",
    mood: "Intense",
    duration: "3:49",
    url: "/audio/hostage.mp3",
    coverArt: "/images/album27.jpg",
    bpm: 110,
  },
  {
    id: "28",
    title: "idontwannabeyouanymore",
    artist: "Billie Eilish",
    genre: "Soul",
    mood: "Sad",
    duration: "3:23",
    url: "/audio/idontwannabeyouanymore.mp3",
    coverArt: "/images/album28.jpg",
    bpm: 85,
  },
  {
    id: "29",
    title: "my boy",
    artist: "Billie Eilish",
    genre: "Pop",
    mood: "Sassy",
    duration: "2:50",
    url: "/audio/my-boy.mp3",
    coverArt: "/images/album29.jpg",
    bpm: 120,
  },
  {
    id: "30",
    title: "party favor",
    artist: "Billie Eilish",
    genre: "Indie Pop",
    mood: "Quirky",
    duration: "3:24",
    url: "/audio/party-favor.mp3",
    coverArt: "/images/album30.jpg",
    bpm: 100,
  },
  {
    id: "31",
    title: "she's broken",
    artist: "Billie Eilish",
    genre: "Ballad",
    mood: "Sad",
    duration: "3:53",
    url: "/audio/shes-broken.mp3",
    coverArt: "/images/album31.jpg",
    bpm: 90,
  },
  {
    id: "32",
    title: "six feet under",
    artist: "Billie Eilish",
    genre: "Alternative",
    mood: "Melancholic",
    duration: "3:09",
    url: "/audio/six-feet-under.mp3",
    coverArt: "/images/album32.jpg",
    bpm: 76,
  },
];

const musicCategories = [
  { name: "All" },
  { name: "Holiday" },
  { name: "Fantasy" },
  { name: "Electronic" },
  { name: "Hardcore" },
  { name: "Pop" },
  { name: "Modern Rock" },
  { name: "Modern Pop" },
  { name: "Dreampop" },
  { name: "Future" },
  { name: "Bass" },
  { name: "Rock" },
  { name: "Ambient" },
  { name: "Hip Hop" },
];

const Music: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTracks = selectedCategory === "All"
    ? featuredTracks
    : featuredTracks.filter(track => track.genre === selectedCategory);

  return (
    <Layout title="Music">
      {/* Music Categories */}
      <section className="mb-8">
        <div className='fixed top-18 right-0 left-0 lg:left-64 bg-[#0d0d0d]  px-4 py-6 z-40'>
        <h2 className="text-xl lg:text-2xl font-bold text-white mb-6">Explore music to match your project</h2>
        <div className="flex flex-wrap gap-3">
          {musicCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category.name)}
              className={`${ 
                selectedCategory === category.name
                  ? 'bg-white text-black'
                  : 'bg-[#2b2b2b] text-[#b2b2b2]'
              } px-3 py-2 lg:px-4 lg:py-2 rounded-full font-medium hover:scale-105 transition-transform cursor-pointer text-sm `}
            >
              {category.name}
            </button>
          ))}
        </div>
        </div>
      </section>

      {/* Discover Music Section */}
      <section className="mb-8 mt-40">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
          <h2 className="text-xl lg:text-2xl font-bold text-white">Discover music made by real artists</h2>
          <button className="flex items-center justify-center sm:justify-start space-x-2 text-white hover:text-gray-300 transition-colors">
            <span>Explore all music</span>
            <ArrowRight2 size="20" />
          </button>
        </div>
        {filteredTracks.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 lg:gap-6">
            {filteredTracks.map((track) => (
              <MusicCardSimple key={track.id} track={track} showDownload={true} showPlayButton={true} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-gray-400 mt-8 h-40">
            <p>No music found in this category.</p>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Music;