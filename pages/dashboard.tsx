import React, { useEffect } from "react";
import Layout from "../components/Layout";
import MusicCardSimple from "../components/MusicCardSimple";
import { Track } from "../types/audio";
import { usePlayer } from "../contexts/PlayerContext";

const homeContent: Track[] = [
  {
    id: "1",
    title: "bad guy",
    artist: "Billie Eilish",
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
    artist: "Billie Eilish",
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
    artist: "Billie Eilish",
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
    artist: "Billie Eilish",
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
    artist: "Billie Eilish",
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
    artist: "Billie Eilish",
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
    artist: "Billie Eilish",
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
    artist: "Billie Eilish",
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
    artist: "Billie Eilish",
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
    artist: "Billie Eilish",
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
    artist: "Billie Eilish",
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
    artist: "Billie Eilish",
    genre: "Synth-Pop",
    mood: "Rebellious",
    duration: "5:33",
    url: "/audio/lamour-de-ma-vie.mp3",
    coverArt: "/images/lamour-de-ma-vie-cover.jpg",
    bpm: 125,
  },
];

const Home = () => {
  const { setPlaylist } = usePlayer();

  useEffect(() => {
    // Set the playlist when the component mounts
    setPlaylist(homeContent);
  }, [setPlaylist]);

  return (
    <Layout title="Home">
      <section className="mb-8">
        <h1>Welcome to Audio4lab</h1>
        <h2 className="text-4xl font-bold mt-3 text-white">
        Its time to begin your creative journey.
        </h2>
        <h2 className="text-lg font-bold mb-6 mt-5 text-white">
        Recommend for you
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
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
    </Layout>
  );
};

export default Home;