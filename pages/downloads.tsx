import React from "react";
import Layout from "../components/Layout";
import { DocumentDownload, Trash, FolderOpen } from "iconsax-react";

interface DownloadItem {
  id: string;
  title: string;
  artist: string;
  genre: string;
  size: string;
  downloadDate: string;
  format: string;
}

const downloadedTracks: DownloadItem[] = [
  {
    id: "dl1",
    title: "bad guy",
    artist: "Billie Eilish",
    genre: "Pop",
    size: "7.2 MB",
    downloadDate: "2024-01-15",
    format: "MP3",
  },
  {
    id: "dl2",
    title: "ocean eyes",
    artist: "Billie Eilish",
    genre: "Indie Pop",
    size: "6.8 MB",
    downloadDate: "2024-01-14",
    format: "MP3",
  },
  {
    id: "dl3",
    title: "Rain Drops",
    artist: "Sound Effect",
    genre: "Nature",
    size: "2.1 MB",
    downloadDate: "2024-01-13",
    format: "WAV",
  },
  {
    id: "dl4",
    title: "My First Beat",
    artist: "Your Creation",
    genre: "Hip-Hop",
    size: "5.4 MB",
    downloadDate: "2024-01-12",
    format: "MP3",
  },
];

const Downloads = () => {
  const totalSize = downloadedTracks.reduce((acc, track) => {
    const size = parseFloat(track.size);
    return acc + size;
  }, 0);

  return (
    <Layout title="Downloads">
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
          <div>
            <h2 className="text-xl font-bold text-white mb-2">Downloaded Files</h2>
            <p className="text-gray-400">
              {downloadedTracks.length} files • {totalSize.toFixed(1)} MB total
            </p>
          </div>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
            <button className="flex items-center justify-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-700 transition-colors">
              <FolderOpen size="20" />
              <span>Open Folder</span>
            </button>
            <button className="flex items-center justify-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors">
              <Trash size="20" />
              <span>Clear All</span>
            </button>
          </div>
        </div>
      </div>

      {downloadedTracks.length > 0 ? (
        <section>
          <div className="bg-[#171717] rounded-lg border border-gray-600 overflow-hidden">
            {/* Desktop Table View */}
            <div className="hidden md:block">
              <div className="grid grid-cols-6 gap-4 p-4 border-b border-gray-600 text-sm font-medium text-gray-400">
                <div>Title</div>
                <div>Artist</div>
                <div>Genre</div>
                <div>Format</div>
                <div>Size</div>
                <div>Actions</div>
              </div>
              {downloadedTracks.map((track) => (
                <div
                  key={track.id}
                  className="grid grid-cols-6 gap-4 p-4 border-b border-gray-700 last:border-b-0 hover:bg-gray-800/50 transition-colors"
                >
                  <div className="text-white font-medium">{track.title}</div>
                  <div className="text-gray-300">{track.artist}</div>
                  <div className="text-gray-400">{track.genre}</div>
                  <div className="text-gray-400">{track.format}</div>
                  <div className="text-gray-400">{track.size}</div>
                  <div className="flex space-x-2">
                    <button className="p-1 text-gray-400 hover:text-white transition-colors">
                      <FolderOpen size="16" />
                    </button>
                    <button className="p-1 text-gray-400 hover:text-red-400 transition-colors">
                      <Trash size="16" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden">
              {downloadedTracks.map((track) => (
                <div
                  key={track.id}
                  className="p-4 border-b border-gray-700 last:border-b-0 hover:bg-gray-800/50 transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="text-white font-medium">{track.title}</div>
                      <div className="text-gray-300 text-sm">{track.artist}</div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-1 text-gray-400 hover:text-white transition-colors">
                        <FolderOpen size="16" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-red-400 transition-colors">
                        <Trash size="16" />
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>{track.genre} • {track.format}</span>
                    <span>{track.size}</span>
                  </div>
                </div>
              ))}
            </div>
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