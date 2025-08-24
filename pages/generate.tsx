'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import MusicCard from '@/components/MusicCard';
import { genres, moods } from '@/mock/tracks';
import { Track } from '@/types/audio';

export default function Generate() {
  const [formData, setFormData] = useState({
    genre: '',
    mood: '',
    duration: 30,
    tempo: 120
  });
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedTrack, setGeneratedTrack] = useState<Track | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'duration' || name === 'tempo' ? parseInt(value) : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock generated track
    const mockGeneratedTrack: Track = {
      id: Date.now().toString(),
      title: `${formData.genre} ${formData.mood} Track`,
      genre: formData.genre || 'Electronic',
      mood: formData.mood || 'Chill',
      duration: `${Math.floor(formData.duration / 60)}:${(formData.duration % 60).toString().padStart(2, '0')}`,
      url: '/audio/generated-track.mp3',
      coverArt: '/images/generated-cover.jpg',
      bpm: formData.tempo,
      createdAt: new Date().toISOString()
    };
    
    setGeneratedTrack(mockGeneratedTrack);
    setIsGenerating(false);
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Generate New Music</h1>
          <p className="text-xl text-gray-400">
            Create custom AI-generated music tracks with your preferred parameters
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Generation Form */}
          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-6">Music Parameters</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Genre Selection */}
              <div>
                <label htmlFor="genre" className="block text-white font-medium mb-2">
                  Genre
                </label>
                <select
                  id="genre"
                  name="genre"
                  value={formData.genre}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                >
                  <option value="">Select a genre</option>
                  {genres.map((genre) => (
                    <option key={genre} value={genre}>{genre}</option>
                  ))}
                </select>
              </div>

              {/* Mood Selection */}
              <div>
                <label htmlFor="mood" className="block text-white font-medium mb-2">
                  Mood
                </label>
                <select
                  id="mood"
                  name="mood"
                  value={formData.mood}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                >
                  <option value="">Select a mood</option>
                  {moods.map((mood) => (
                    <option key={mood} value={mood}>{mood}</option>
                  ))}
                </select>
              </div>

              {/* Duration Slider */}
              <div>
                <label htmlFor="duration" className="block text-white font-medium mb-2">
                  Duration: {formData.duration} seconds
                </label>
                <input
                  type="range"
                  id="duration"
                  name="duration"
                  min="15"
                  max="300"
                  step="15"
                  value={formData.duration}
                  onChange={handleInputChange}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #9333ea 0%, #9333ea ${(formData.duration / 300) * 100}%, #475569 ${(formData.duration / 300) * 100}%, #475569 100%)`
                  }}
                />
                <div className="flex justify-between text-sm text-gray-400 mt-1">
                  <span>15s</span>
                  <span>5m</span>
                </div>
              </div>

              {/* Tempo Input */}
              <div>
                <label htmlFor="tempo" className="block text-white font-medium mb-2">
                  Tempo (BPM)
                </label>
                <input
                  type="number"
                  id="tempo"
                  name="tempo"
                  min="60"
                  max="200"
                  value={formData.tempo}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="120"
                />
                <p className="text-sm text-gray-400 mt-1">
                  Typical range: 60-200 BPM
                </p>
              </div>

              {/* Generate Button */}
                              <button
                  type="submit"
                  disabled={isGenerating || !formData.genre || !formData.mood}
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 ${
                    isGenerating || !formData.genre || !formData.mood
                      ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                      : 'bg-white hover:bg-gray-200 text-black transform hover:scale-105 shadow-lg hover:shadow-white/25'
                  }`}
                >
                {isGenerating ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Generating...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <span>🎵</span>
                    <span>Generate Track</span>
                  </div>
                )}
              </button>
            </form>

            {/* Tips */}
            <div className="mt-8 p-4 bg-gray-800 rounded-lg">
              <h3 className="text-white font-semibold mb-2">💡 Generation Tips</h3>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Choose complementary genre and mood combinations</li>
                <li>• Longer tracks (2-5 min) work best for background music</li>
                <li>• Higher BPM creates more energetic tracks</li>
                <li>• Generation typically takes 1-3 minutes</li>
              </ul>
            </div>
          </div>

          {/* Preview Area */}
          <div className="space-y-6">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-4">Track Preview</h3>
              
              {generatedTrack ? (
                <div>
                  <p className="text-green-400 text-sm mb-4">✅ Track generated successfully!</p>
                  <MusicCard track={generatedTrack} showDownload={false} />
                  
                  <div className="mt-4 space-y-3">
                    <button className="w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
                      Download Track
                    </button>
                    <button className="w-full py-3 px-4 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors">
                      Save to Library
                    </button>
                    <button 
                      onClick={() => setGeneratedTrack(null)}
                      className="w-full py-3 px-4 bg-slate-600 hover:bg-slate-500 text-white rounded-lg transition-colors"
                    >
                      Generate Another
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-24 h-24 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl text-gray-400">🎵</span>
                  </div>
                  <p className="text-gray-400 mb-2">No track generated yet</p>
                  <p className="text-sm text-gray-500">
                    Fill out the form and click generate to create your first track
                  </p>
                </div>
              )}
            </div>

            {/* Recent Generations */}
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-4">Recent Generations</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                  <div>
                    <p className="text-white font-medium">Chill LoFi Beats</p>
                    <p className="text-sm text-gray-400">LoFi • Chill • 2:30</p>
                  </div>
                  <button className="text-white hover:text-gray-300 text-sm">
                    Download
                  </button>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                  <div>
                    <p className="text-white font-medium">Epic Cinematic</p>
                    <p className="text-sm text-gray-400">Cinematic • Epic • 3:45</p>
                  </div>
                  <button className="text-white hover:text-gray-300 text-sm">
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Slider Styles */}
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #ffffff;
          cursor: pointer;
          border: 2px solid #111111;
        }
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #ffffff;
          cursor: pointer;
          border: 2px solid #111111;
        }
      `}</style>
    </div>
  );
}
