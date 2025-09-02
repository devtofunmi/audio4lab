import React from "react";
import Layout from "../components/Layout";
import MusicCardSimple from "../components/MusicCardSimple";
import { DocumentDownload } from "iconsax-react";

import { Track } from "../types/audio";

const downloadedTracks: Track[] = [
  {
    id: "dl1",
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
    id: "dl2",
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
    id: "dl3",
    title: "Rain Drops",
    artist: "Sound Effect",
    genre: "Nature",
    mood: "Calm",
    duration: "0:30",
    url: "/audio/rain-drops.mp3",
    coverArt: "/images/rain-drops-cover.jpg",
    bpm: 0,
  },
  {
    id: "dl4",
    title: "My First Beat",
    artist: "Your Creation",
    genre: "Hip-Hop",
    mood: "Upbeat",
    duration: "2:45",
    url: "/audio/my-first-beat.mp3",
    coverArt: "/images/my-first-beat-cover.jpg",
    bpm: 90,
  },
];

const Downloads = () => {
  return (
    <Layout title="Downloads">
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-6">
          <DocumentDownload size="24" color="#84CC16" variant="Bold" />
          <div>
            <h2 className="text-xl font-bold text-white">Your Downloads</h2>
            <p className="text-gray-400">{downloadedTracks.length} files downloaded</p>
          </div>
        </div>
      </div>

      {downloadedTracks.length > 0 ? (
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
            {downloadedTracks.map((track) => (
              <MusicCardSimple
                key={track.id}
                track={track}
                showDownload={false}
                showPlayButton={true}
              />
            ))}
          </div>
        </section>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mb-6">
            <DocumentDownload size="32" color="#9ca3af" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">No downloads yet</h3>
          <p className="text-gray-400 mb-6 max-w-md">
            Your downloaded tracks and sound effects will appear here for easy access.
          </p>
        </div>
      )}
    </Layout>
  );
};

export default Downloads;