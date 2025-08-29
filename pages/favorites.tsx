import React from "react";
import Layout from "../components/Layout";
import MusicCardSimple from "../components/MusicCardSimple";
import { Track } from "../types/audio";
import { Heart } from "iconsax-react";

const favoritesTracks: Track[] = [
  {
    id: "fav1",
    title: "bad guy",
    genre: "Pop",
    mood: "Energetic",
    duration: "3:14",
    url: "/audio/bad-guy.mp3",
    coverArt: "/images/bad-guy-cover.jpg",
    bpm: 135,
  },
  {
    id: "fav2",
    title: "ocean eyes",
    genre: "Indie Pop",
    mood: "Dreamy",
    duration: "3:20",
    url: "/audio/ocean-eyes.mp3",
    coverArt: "/images/ocean-eyes-cover.jpg",
    bpm: 73,
  },
  {
    id: "fav3",
    title: "What Was I Made For?",
    genre: "Ballad",
    mood: "Introspective",
    duration: "3:42",
    url: "/audio/what-was-i-made-for.mp3",
    coverArt: "/images/what-was-i-made-for-cover.jpg",
    bpm: 78,
  },
  {
    id: "fav4",
    title: "lovely",
    genre: "Indie Pop",
    mood: "Emotional",
    duration: "3:20",
    url: "/audio/lovely.mp3",
    coverArt: "/images/lovely-cover.jpg",
    bpm: 115,
  },
];

const Favorites = () => {
  return (
    <Layout title="Favorites">
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-6">
          <Heart size="24" color="#ef4444" variant="Bold" />
          <div>
            <h2 className="text-xl font-bold text-white">Your Favorite Tracks</h2>
            <p className="text-gray-400">{favoritesTracks.length} tracks you love</p>
          </div>
        </div>
      </div>

      {favoritesTracks.length > 0 ? (
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
            {favoritesTracks.map((track) => (
              <MusicCardSimple
                key={track.id}
                track={track}
                showDownload={true}
                showPlayButton={true}
              />
            ))}
          </div>
        </section>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mb-6">
            <Heart size="32" color="#9ca3af" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">No favorites yet</h3>
          <p className="text-gray-400 mb-6 max-w-md">
            Start adding tracks to your favorites by clicking the heart icon on any track.
          </p>
        </div>
      )}
    </Layout>
  );
};

export default Favorites;