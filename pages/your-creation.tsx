import React, { useState } from "react";
import {
  MusicSquareAdd,
  DocumentUpload,
  MusicPlay,
  ArrowLeft,
  Sound,
  Flash,
  Shuffle,
  PauseCircle,
  PlayCircle,
  VolumeHigh,
} from "iconsax-react";
import Layout from "@/components/Layout";

interface NewCreationFormProps {
  onSubmit: (data: {
    title?: string;
    genre?: string;
    mood?: string;
    file?: File | null;
    type: "upload" | "newProject";
  }) => void;
  onBack: () => void;
}

const NewCreationForm: React.FC<NewCreationFormProps> = ({
  onSubmit,
  onBack,
}) => {
  const [activeTab, setActiveTab] = useState("music");
  const [selectedTrack, setSelectedTrack] = useState({
    id: 1,
    name: "Cinematic scores",
    genre: "Orchestral, Epic, Triumphant, Fantasy",
    image:
      "https://placehold.co/600x600/171717/FFFFFF?text=Cinematic+Scores",
    duration: "02:49",
  });
  const [isPlaying, setIsPlaying] = useState(false);

  const ourPicksMusic = [
    {
      id: 1,
      name: "Cinematic scores",
      genre: "Orchestral, Epic, Triumphant, Fantasy",
      image:
        "https://placehold.co/600x600/171717/FFFFFF?text=Cinematic+Scores",
      duration: "02:49",
    },
    {
      id: 2,
      name: "Conscious Hip Hop",
      genre: "Conscious, Jazzy, Experimental",
      image: "https://placehold.co/600x600/171717/FFFFFF?text=Hip+Hop",
      duration: "03:15",
    },
    {
      id: 3,
      name: "Corporate music",
      genre: "Corporate, Minimalist, Inspiring",
      image:
        "https://placehold.co/600x600/171717/FFFFFF?text=Corporate+Music",
      duration: "01:50",
    },
  ];

  const ourPicksSoundEffects = [
    {
      id: 4,
      name: "Thunder Clap",
      genre: "Weather, Storm, Dramatic",
      image: "https://placehold.co/600x600/171717/FFFFFF?text=Thunder",
      duration: "00:02",
    },
    {
      id: 5,
      name: "Forest Ambience",
      genre: "Nature, Birds, Wind",
      image: "https://placehold.co/600x600/171717/FFFFFF?text=Forest",
      duration: "05:00",
    },
    {
      id: 6,
      name: "Futuristic UI",
      genre: "Sci-Fi, Tech, Interface",
      image: "https://placehold.co/600x600/171717/FFFFFF?text=UI+Sound",
      duration: "00:05",
    },
  ];

  const handleTrackSelection = (track: any) => {
    setSelectedTrack(track);
    setIsPlaying(false);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Helper function to render a single "Our Pick" item
  const OurPickItem = ({ track, isSelected, onClick }: any) => (
    <div
      onClick={onClick}
      className={`cursor-pointer flex items-center p-4 rounded-xl transition-all duration-200 ${
        isSelected
          ? "bg-[#3A3A3A] border border-[#5A5A5A]"
          : "bg-[#1E1E1E] hover:bg-[#2A2A2A]"
      }`}
    >
      <div className="w-12 h-12 flex-shrink-0 rounded-lg overflow-hidden relative">
        <img
          src={track.image}
          alt={track.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="ml-4 flex-1 overflow-hidden">
        <h3 className="text-white font-medium text-lg truncate">
          {track.name}
        </h3>
        <p className="text-gray-400 text-sm truncate">{track.genre}</p>
      </div>
    </div>
  );

  return (
    <Layout title="Your Creation">
      <div className=" lg:p-10 w-full max-w-6xl">
        {/* Top Navigation Tabs */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
          <div className="flex space-x-2 p-1 bg-[#1E1E1E] rounded-full">
            <button
              onClick={() => setActiveTab("music")}
              className={`flex items-center cursor-pointer space-x-2 py-2 px-6 rounded-full font-medium transition-colors duration-200 ${
                activeTab === "music"
                  ? "bg-white text-gray-900 shadow-md"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <MusicSquareAdd size="20" />
              <span>MUSIC</span>
            </button>
            <button
              onClick={() => setActiveTab("sound_effects")}
              className={`flex items-center space-x-2 py-2 px-6 rounded-full font-medium transition-colors duration-200 ${
                activeTab === "sound_effects"
                  ? "bg-white text-gray-900 shadow-md"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Sound size="20" />
              <span>SOUND EFFECTS</span>
            </button>
          </div>
        </div>

        {activeTab === "music" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Content Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Generate Section */}
              <div className="p-6 rounded-xl bg-[#171717] border border-gray-800">
                <h2 className="text-xl font-semibold text-white mb-2 flex items-center space-x-2">
                  <Flash size="24" color="#FFFFFF" />
                  <span>GENERATE A SONG</span>
                </h2>
                <input
                  type="text"
                  placeholder="Describe the type of music you want to generate."
                  className="w-full px-4 py-3 text-white placeholder-gray-400 mb-4"
                />
                <button className="px-8 py-3 cursor-pointer rounded-full bg-gray-700 hover:bg-gray-600 transition-colors text-white font-bold">
                  GENERATE
                </button>
              </div>

              {/* Our Picks Section */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">OUR PICKS</h3>
                <div className="space-y-3">
                  {ourPicksMusic.map((track) => (
                    <OurPickItem
                      key={track.id}
                      track={track}
                      isSelected={selectedTrack.id === track.id}
                      onClick={() => handleTrackSelection(track)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Now Playing Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#171717] to-[#252525] border border-gray-800 shadow-lg flex flex-col items-center">
              <h3 className="text-white text-2xl font-semibold mb-2">
                {selectedTrack.name}
              </h3>
              <p className="text-gray-400 text-sm mb-6 text-center">
                {selectedTrack.genre}
              </p>
              <div className="relative w-48 h-48 mb-8">
                <div className="absolute inset-0 bg-red-500 rounded-full animate-pulse opacity-75 blur-3xl"></div>
                <img
                  src={selectedTrack.image}
                  alt={selectedTrack.name}
                  className="rounded-full w-full h-full object-cover relative z-10"
                />
              </div>

              {/* Player Controls */}
              <div className="w-full flex items-center space-x-4 mb-4">
                <div className="h-1 bg-gray-700 rounded-full flex-grow">
                  <div className="h-full bg-white rounded-full w-1/3"></div>
                </div>
                <span className="text-gray-400 text-sm">
                  00:00 / {selectedTrack.duration}
                </span>
              </div>

              <div className="flex items-center space-x-6">
                <button className="text-gray-400 hover:text-white transition-colors">
                  <Shuffle size="24" />
                </button>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <ArrowLeft size="24" />
                </button>
                <button
                  onClick={handlePlayPause}
                  className="text-white hover:scale-110 transition-transform"
                >
                  {isPlaying ? (
                    <PauseCircle size="64" color="#FFFFFF" variant="Bulk" />
                  ) : (
                    <PlayCircle size="64" color="#FFFFFF" variant="Bulk" />
                  )}
                </button>
                <button className="text-gray-400 hover:text-white transition-colors rotate-180">
                  <ArrowLeft size="24" />
                </button>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <VolumeHigh size="24" />
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === "sound_effects" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Content Column for Sound Effects */}
            <div className="lg:col-span-2 space-y-8">
              {/* Generate Section for Sound Effects */}
              <div className="p-6 rounded-xl bg-[#171717] border border-gray-800">
                <h2 className="text-xl font-semibold text-white mb-2 flex items-center space-x-2">
                  <Flash size="24" color="#FFFFFF" />
                  <span>GENERATE A SOUND EFFECT</span>
                </h2>
                <input
                  type="text"
                  placeholder="Describe the sound effect you want to generate."
                  className="w-full px-4 py-3 text-white placeholder-gray-400  mb-4"
                />
                <button className="px-8 py-3 cursor-pointer rounded-full bg-gray-700 hover:bg-gray-600 transition-colors text-white font-bold">
                  GENERATE
                </button>
              </div>

              {/* Our Picks Section for Sound Effects */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">OUR PICKS</h3>
                <div className="space-y-3">
                  {ourPicksSoundEffects.map((track) => (
                    <OurPickItem
                      key={track.id}
                      track={track}
                      isSelected={selectedTrack.id === track.id}
                      onClick={() => handleTrackSelection(track)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Now Playing Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#171717] to-[#252525] border border-gray-800 shadow-lg flex flex-col items-center">
              <h3 className="text-white text-2xl font-semibold mb-2">
                {selectedTrack.name}
              </h3>
              <p className="text-gray-400 text-sm mb-6 text-center">
                {selectedTrack.genre}
              </p>
              <div className="relative w-48 h-48 mb-8">
                <div className="absolute inset-0 bg-red-500 rounded-full animate-pulse opacity-75 blur-3xl"></div>
                <img
                  src={selectedTrack.image}
                  alt={selectedTrack.name}
                  className="rounded-full w-full h-full object-cover relative z-10"
                />
              </div>

              {/* Player Controls */}
              <div className="w-full flex items-center space-x-4 mb-4">
                <div className="h-1 bg-gray-700 rounded-full flex-grow">
                  <div className="h-full bg-white rounded-full w-1/3"></div>
                </div>
                <span className="text-gray-400 text-sm">
                  00:00 / {selectedTrack.duration}
                </span>
              </div>

              <div className="flex items-center space-x-6">
                <button className="text-gray-400 hover:text-white transition-colors">
                  <Shuffle size="24" />
                </button>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <ArrowLeft size="24" />
                </button>
                <button
                  onClick={handlePlayPause}
                  className="text-white hover:scale-110 transition-transform"
                >
                  {isPlaying ? (
                    <PauseCircle size="64" color="#FFFFFF" variant="Bulk" />
                  ) : (
                    <PlayCircle size="64" color="#FFFFFF" variant="Bulk" />
                  )}
                </button>
                <button className="text-gray-400 hover:text-white transition-colors rotate-180">
                  <ArrowLeft size="24" />
                </button>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <VolumeHigh size="24" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      </Layout>
    
  );
};

export default NewCreationForm;