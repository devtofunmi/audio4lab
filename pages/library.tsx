'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import MusicCard from '@/components/MusicCard';
import { mockTracks } from '@/mock/tracks';
import { Genre, Mood } from '@/types/audio';

export default function Library() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState<Genre | ''>('');
  const [selectedMood, setSelectedMood] = useState<Mood | ''>('');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'title' | 'duration'>('newest');

  // Get unique genres and moods for filters
  const genres = Array.from(new Set(mockTracks.map(track => track.genre)));
  const moods = Array.from(new Set(mockTracks.map(track => track.mood)));

  // Filter and sort tracks
  const filteredTracks = useMemo(() => {
    const filtered = mockTracks.filter(track => {
      const matchesSearch = track.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           track.genre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           track.mood.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesGenre = !selectedGenre || track.genre === selectedGenre;
      const matchesMood = !selectedMood || track.mood === selectedMood;
      
      return matchesSearch && matchesGenre && matchesMood;
    });

    // Sort tracks
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.createdAt || '').getTime() - new Date(a.createdAt || '').getTime();
        case 'oldest':
          return new Date(a.createdAt || '').getTime() - new Date(b.createdAt || '').getTime();
        case 'title':
          return a.title.localeCompare(b.title);
        case 'duration':
          return a.duration.localeCompare(b.duration);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedGenre, selectedMood, sortBy]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedGenre('');
    setSelectedMood('');
    setSortBy('newest');
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Music Library</h1>
          <p className="text-xl text-gray-400">
            Your collection of AI-generated music tracks
          </p>
        </div>

        {/* Filters and Search */}
        <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 mb-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {/* Search */}
            <div>
              <label htmlFor="search" className="block text-white font-medium mb-2">
                Search
              </label>
              <input
                type="text"
                id="search"
                placeholder="Search tracks..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Genre Filter */}
            <div>
              <label htmlFor="genre" className="block text-white font-medium mb-2">
                Genre
              </label>
              <select
                id="genre"
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value as Genre | '')}
                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">All Genres</option>
                {genres.map((genre) => (
                  <option key={genre} value={genre}>{genre}</option>
                ))}
              </select>
            </div>

            {/* Mood Filter */}
            <div>
              <label htmlFor="mood" className="block text-white font-medium mb-2">
                Mood
              </label>
              <select
                id="mood"
                value={selectedMood}
                onChange={(e) => setSelectedMood(e.target.value as Mood | '')}
                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">All Moods</option>
                {moods.map((mood) => (
                  <option key={mood} value={mood}>{mood}</option>
                ))}
              </select>
            </div>

            {/* Sort By */}
            <div>
              <label htmlFor="sort" className="block text-white font-medium mb-2">
                Sort By
              </label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="title">Title A-Z</option>
                <option value="duration">Duration</option>
              </select>
            </div>
          </div>

          {/* Filter Summary and Clear */}
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-400">
              Showing {filteredTracks.length} of {mockTracks.length} tracks
              {(selectedGenre || selectedMood || searchTerm) && (
                <span className="ml-2 text-purple-400">
                  (filtered)
                </span>
              )}
            </div>
                         {(selectedGenre || selectedMood || searchTerm) && (
               <button
                 onClick={clearFilters}
                 className="text-white hover:text-gray-300 text-sm transition-colors"
               >
                 Clear Filters
               </button>
             )}
          </div>
        </div>

        {/* Active Filters Display */}
        {(selectedGenre || selectedMood || searchTerm) && (
          <div className="mb-6 flex flex-wrap gap-2">
            {searchTerm && (
                                        <span className="inline-flex items-center px-3 py-1 bg-white text-black text-sm rounded-full">
               Search: &ldquo;{searchTerm}&rdquo;
               <button
                 onClick={() => setSearchTerm('')}
                 className="ml-2 hover:text-gray-700"
               >
                 ×
               </button>
             </span>
            )}
            {selectedGenre && (
              <span className="inline-flex items-center px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                Genre: {selectedGenre}
                <button
                  onClick={() => setSelectedGenre('')}
                  className="ml-2 hover:text-blue-200"
                >
                  ×
                </button>
              </span>
            )}
            {selectedMood && (
              <span className="inline-flex items-center px-3 py-1 bg-green-600 text-white text-sm rounded-full">
                Mood: {selectedMood}
                <button
                  onClick={() => setSelectedMood('')}
                  className="ml-2 hover:text-green-200"
                >
                  ×
                </button>
              </span>
            )}
          </div>
        )}

        {/* Tracks Grid */}
        {filteredTracks.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTracks.map((track) => (
              <MusicCard key={track.id} track={track} />
            ))}
          </div>
        ) : (
                      <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl text-gray-400">🎵</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No tracks found</h3>
              <p className="text-gray-400 mb-6">
                {searchTerm || selectedGenre || selectedMood 
                  ? 'Try adjusting your filters or search terms'
                  : 'Start by generating your first track'
                }
              </p>
              {!searchTerm && !selectedGenre && !selectedMood && (
                <Link
                  href="/generate"
                  className="inline-flex items-center px-6 py-3 bg-white hover:bg-gray-200 text-black rounded-lg transition-colors"
                >
                  Generate New Track
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              )}
            </div>
        )}

        {/* Library Stats */}
        <div className="mt-12 bg-gray-900 p-6 rounded-lg border border-gray-800">
          <h3 className="text-lg font-semibold text-white mb-4">Library Statistics</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">{mockTracks.length}</div>
              <div className="text-gray-400 text-sm">Total Tracks</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-300 mb-2">{genres.length}</div>
              <div className="text-gray-400 text-sm">Genres</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-300 mb-2">{moods.length}</div>
              <div className="text-gray-400 text-sm">Moods</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-300 mb-2">
                {mockTracks.reduce((total, track) => {
                  const [mins, secs] = track.duration.split(':').map(Number);
                  return total + (mins * 60 + secs);
                }, 0) / 60}
              </div>
              <div className="text-gray-400 text-sm">Total Minutes</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
