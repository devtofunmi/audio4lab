import React, { useState } from "react";
import { MusicSquareAdd, DocumentUpload, MusicPlay, ArrowLeft } from "iconsax-react"; // Added ArrowLeft
// Removed useRouter

interface NewCreationFormProps {
  onSubmit: (data: { title?: string; genre?: string; mood?: string; file?: File | null; type: 'upload' | 'newProject' }) => void;
  onBack: () => void; // Callback for the back button
}

const NewCreationForm: React.FC<NewCreationFormProps> = ({ onSubmit, onBack }) => {

  const [creationType, setCreationType] = useState<'initial' | 'upload' | 'newProject'>('initial');
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [mood, setMood] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleUploadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (file) {
      onSubmit({ file, type: 'upload' });
      setFile(null);
    }
  };

  const handleNewProjectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, genre, mood, type: 'newProject' });
    setTitle("");
    setGenre("");
    setMood("");
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <button onClick={onBack} className="cursor-pointer text-gray-400 hover:text-white transition-colors flex items-center space-x-2 mb-6">
        <ArrowLeft size="24" />
        <span className="text-base font-semibold">Back to Your Creations</span>
      </button>
      <h2 className="text-3xl font-bold text-white mb-6 flex items-center space-x-3">
        <MusicSquareAdd size="32" color="#FFFFFF" />
        <span>Create New Audio</span>
      </h2>
      <p className="text-gray-300 mb-8">
        Choose an option to start your new audio creation.
      </p>

        {creationType === 'initial' && (
          <div className="space-y-6">
            <button
              onClick={() => setCreationType('upload')}
              className="cursor-pointer w-full flex flex-col items-center justify-center space-y-3 p-8 rounded-xl bg-[#171717] text-white border border-gray-700 hover:bg-[#2f2f2f] transition-colors duration-200 ease-in-out text-xl font-medium focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            > 
              <DocumentUpload size="40" className="mx-auto" />
              <span>Upload an Existing Track</span>
            </button>
            <button
              onClick={() => setCreationType('newProject')}
              className="cursor-pointer w-full flex flex-col items-center justify-center space-y-3 p-8 rounded-xl bg-[#171717] text-white border border-gray-700 hover:bg-[#2f2f2f] transition-colors duration-200 ease-in-out text-xl font-medium focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            >
              <MusicPlay size="40" />
              <span>Start a New Project</span>
            </button>
          </div>
        )}

        {creationType === 'upload' && (
          <form onSubmit={handleUploadSubmit} className="space-y-4">
            <div>
              <label htmlFor="file" className="block text-gray-300 text-base font-medium mb-2">Select Audio File</label>
              <label
                htmlFor="file"
                className="w-full p-4 rounded-xl bg-transparent text-white border border-gray-700 flex items-center justify-between cursor-pointer hover:bg-[#2f2f2f] transition-colors duration-200 ease-in-out focus-within:ring-2 focus-within:ring-white focus-within:border-white"
              >
                <span className="text-gray-400">{file ? file.name : "No file chosen"}</span>
                <span className="px-4 py-2 rounded-full border-0 text-sm font-semibold bg-[#171717] text-white hover:bg-[#2f2f2f] transition-colors duration-200 ease-in-out">Browse</span>
              </label>
              <input
                type="file"
                id="file"
                accept="audio/*"
                className="hidden" // Hide the default input
                onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
                required
              />
            </div>
            <div className="flex justify-end space-x-3 mt-6">
              <button
                type="button"
                onClick={() => setCreationType('initial')}
                className="cursor-pointer px-6 py-3 rounded-xl font-semibold text-gray-300 bg-[#171717] hover:bg-[#2f2f2f] transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
              >
                Back
              </button>
              <button
                type="submit"
                className="cursor-pointer px-6 py-3 rounded-xl font-semibold bg-[#171717] text-white hover:bg-[#2f2f2f] transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              >
                Upload
              </button>
            </div>
          </form>
        )}

        {creationType === 'newProject' && (
          <form onSubmit={handleNewProjectSubmit} className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-gray-300 text-base font-medium mb-2">Project Title</label>
              <input
                type="text"
                id="title"
                className="w-full p-4 rounded-xl bg-transparent text-white border border-gray-700 focus:ring-2 focus:ring-white focus:border-white outline-none"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g., My New Song, Soundscape for Game"
                required
              />
            </div>

            <div>
              <label htmlFor="genre" className="block text-gray-300 text-base font-medium mb-2">Genre</label>
              <input
                type="text"
                id="genre"
                className="w-full p-4 rounded-xl bg-transparent text-white border border-gray-700 focus:ring-2 focus:ring-white focus:border-white outline-none"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                placeholder="e.g., Electronic, Orchestral, Ambient"
                required
              />
            </div>

            <div>
              <label htmlFor="mood" className="block text-gray-300 text-base font-medium mb-2">Mood</label>
              <input
                type="text"
                id="mood"
                className="w-full p-4 rounded-xl bg-transparent text-white border border-gray-700 focus:ring-2 focus:ring-white focus:border-white outline-none"
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                placeholder="e.g., Uplifting, Mysterious, Relaxing"
                required
              />
            </div>

            <div className="flex justify-end space-x-3 mt-6">
              <button
                type="button"
                onClick={() => setCreationType('initial')}
                className="cursor-pointer px-6 py-3 rounded-xl font-semibold text-gray-300 bg-[#171717] hover:bg-[#2f2f2f] transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
              >
                Back
              </button>
              <button
                type="submit"
                className="cursor-pointer px-6 py-3 rounded-xl font-semibold bg-[#171717] text-white hover:bg-[#2f2f2f] transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              >
                Create
              </button>
            </div>
          </form>
        )}
      </div>
  );
};

export default NewCreationForm;
