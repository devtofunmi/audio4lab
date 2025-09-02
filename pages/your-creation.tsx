import React, { useState } from "react";
import Layout from "../components/Layout";
import MusicCardSimple from "../components/MusicCardSimple";
import NewCreationForm from "../components/NewCreationForm"; // Import the new form component

import { Track } from "../types/audio";
import { Add, MusicPlay } from "iconsax-react";
// Removed useRouter

const userCreations: Track[] = [
  {
    id: "uc1",
    title: "My First Beat",
    genre: "Hip-Hop",
    mood: "Energetic",
    artist: "Billie Eilish",
    duration: "2:45",
    url: "/audio/my-first-beat.mp3",
    coverArt: "/images/my-first-beat-cover.jpg",
    bpm: 120,
  },
  {
    id: "uc2",
    title: "Chill Vibes",
    genre: "Lo-Fi",
    mood: "Relaxed",
    artist: "Billie Eilish",
    duration: "3:20",
    url: "/audio/chill-vibes.mp3",
    coverArt: "/images/chill-vibes-cover.jpg",
    bpm: 85,
  },
  {
    id: "uc3",
    title: "Electronic Dreams",
    genre: "Electronic",
    artist: "Billie Eilish",
    mood: "Futuristic",
    duration: "4:15",
    url: "/audio/electronic-dreams.mp3",
    coverArt: "/images/electronic-dreams-cover.jpg",
    bpm: 128,
  },
];

const YourCreation = () => {
  const [showNewCreationForm, setShowNewCreationForm] = useState(false);

  const handleNewCreationClick = () => {
    setShowNewCreationForm(true);
  };

  const handleFormSubmit = (data: { title?: string; genre?: string; mood?: string; file?: File | null; type: 'upload' | 'newProject' }) => {
    console.log("New Creation Data:", data);
    if (data.type === 'upload') {
      alert(`Uploading file: ${data.file?.name}`);
      // Handle file upload logic here
    } else if (data.type === 'newProject') {
      alert(`Creating new project: ${data.title} (Genre: ${data.genre}, Mood: ${data.mood})`);
      // Handle new project creation logic here
    }
    setShowNewCreationForm(false); // Hide form after submission
  };

  const handleFormBack = () => {
    setShowNewCreationForm(false); // Hide form when back button is clicked
  };

  return (
    <Layout title="Your Creation">
      {showNewCreationForm ? (
        <NewCreationForm onSubmit={handleFormSubmit} onBack={handleFormBack} />
      ) : (
        <>
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
              <div>
                <h2 className="text-xl font-bold text-white mb-2">Your Tracks</h2>
                <p className="text-gray-400">Create and manage your original compositions</p>
              </div>
              <button 
                onClick={handleNewCreationClick}
                className="flex items-center justify-center space-x-2 bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors w-full sm:w-auto"
              >
                <Add size="20" />
                <span>New Creation</span>
              </button>
            </div>
          </div>

          {userCreations.length > 0 ? (
            <section>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
                {userCreations.map((track) => (
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
                <MusicPlay size="32" color="#9ca3af" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No creations yet</h3>
              <p className="text-gray-400 mb-6 max-w-md">
                Start creating your own music and sound effects. Your compositions will appear here.
              </p>
              <button 
                onClick={handleNewCreationClick}
                className="flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                <Add size="20" />
                <span>Create Your First Track</span>
              </button>
            </div>
          )}
        </>
      )}
    </Layout>
  );
};

export default YourCreation;