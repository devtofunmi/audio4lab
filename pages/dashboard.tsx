import React from "react";
import Sidebar from "../components/Sidebar";
import MusicCardSimple from "../components/MusicCardSimple";
import MusicPlayer from "../components/MusicPlayer";
import { SearchNormal, Notification } from "iconsax-react";
import { Track } from "../types/audio";
import { PlayerProvider } from "../contexts/PlayerContext";

const homeContent: Track[] = [
  {
    id: "1",
    title: "bad guy",
    genre: "Pop",
    mood: "Energetic",
    duration: "3:14",
    url: "/audio/bad-guy.mp3",
    coverArt: "/images/bad-guy-cover.jpg",
    bpm: 135,
  },
  {
    id: "2",
    title: "Happier Than Ever",
    genre: "Pop-Rock",
    mood: "Melancholic",
    duration: "4:58",
    url: "/audio/happier-than-ever.mp3",
    coverArt: "/images/happier-than-ever-cover.jpg",
    bpm: 81,
  },
  {
    id: "3",
    title: "Therefore I Am",
    genre: "Alternative",
    mood: "Confident",
    duration: "2:54",
    url: "/audio/therefore-i-am.mp3",
    coverArt: "/images/therefore-i-am-cover.jpg",
    bpm: 94,
  },
  {
    id: "4",
    title: "ocean eyes",
    genre: "Indie Pop",
    mood: "Dreamy",
    duration: "3:20",
    url: "/audio/ocean-eyes.mp3",
    coverArt: "/images/ocean-eyes-cover.jpg",
    bpm: 73,
  },
  {
    id: "5",
    title: "when the party's over",
    genre: "Ballad",
    mood: "Sad",
    duration: "3:16",
    url: "/audio/when-the-partys-over.mp3",
    coverArt: "/images/when-the-partys-over-cover.jpg",
    bpm: 62,
  },
  {
    id: "6",
    title: "What Was I Made For?",
    genre: "Ballad",
    mood: "Introspective",
    duration: "3:42",
    url: "/audio/what-was-i-made-for.mp3",
    coverArt: "/images/what-was-i-made-for-cover.jpg",
    bpm: 78,
  },
  {
    id: "7",
    title: "bury a friend",
    genre: "Dark Pop",
    mood: "Eerie",
    duration: "3:13",
    url: "/audio/bury-a-friend.mp3",
    coverArt: "/images/bury-a-friend-cover.jpg",
    bpm: 120,
  },
  {
    id: "8",
    title: "No Time To Die",
    genre: "Orchestral Pop",
    mood: "Dramatic",
    duration: "4:02",
    url: "/audio/no-time-to-die.mp3",
    coverArt: "/images/no-time-to-die-cover.jpg",
    bpm: 75,
  },
  {
    id: "9",
    title: "everything i wanted",
    genre: "Pop",
    mood: "Reflective",
    duration: "4:05",
    url: "/audio/everything-i-wanted.mp3",
    coverArt: "/images/everything-i-wanted-cover.jpg",
    bpm: 120,
  },
  {
    id: "10",
    title: "lovely",
    genre: "Indie Pop",
    mood: "Emotional",
    duration: "3:20",
    url: "/audio/lovely.mp3",
    coverArt: "/images/lovely-cover.jpg",
    bpm: 115,
  },
  {
    id: "11",
    title: "LUNCH",
    genre: "Pop",
    mood: "Flirty",
    duration: "2:59",
    url: "/audio/lunch.mp3",
    coverArt: "/images/lunch-cover.jpg",
    bpm: 125,
  },
  {
    id: "12",
    title: "L'AMOUR DE MA VIE",
    genre: "Synth-Pop",
    mood: "Rebellious",
    duration: "5:33",
    url: "/audio/lamour-de-ma-vie.mp3",
    coverArt: "/images/lamour-de-ma-vie-cover.jpg",
    bpm: 125,
  },
];

const Home = () => {
  return (
    <PlayerProvider>
      <div className="flex bg-[#0d0d0d] min-h-screen text-white">
        <Sidebar />
        <div className="ml-64 flex-1">
          <header className="fixed top-0 left-64 right-0 z-10 flex items-center justify-between p-8 bg-[#0d0d0d] border-b border-gray-800">
            <h1 className="text-3xl font-bold text-white">Home</h1>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-[#171717] border-2 border-gray-600 rounded-full pl-10 pr-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors w-80"
                />
                <SearchNormal
                  size="20"
                  color="#9CA3AF"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2"
                />
              </div>
              <Notification
                size="24"
                color="#ffffff"
                className="cursor-pointer hover:scale-110 transition-transform"
              />
            </div>
          </header>

          <div className="pt-24 p-8 pb-32">
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-6 text-white">
                Recommended for you
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {homeContent.map((track) => (
                  <MusicCardSimple
                    key={track.id}
                    track={track}
                    showDownload={true}
                    showPlayButton={true}
                  />
                ))}
              </div>
            </section>
          </div>
        </div>
        <MusicPlayer />
      </div>
    </PlayerProvider>
  );
};

export default Home;
