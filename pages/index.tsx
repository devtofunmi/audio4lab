"use client";

import { SetStateAction, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
// The original mock data is included here for a self-contained example.
const featuredTracks = [
  { id: 1, title: 'Slow Latin Reggaeton', genre: 'Reggaeton', mood: 'Vibes', image: 'https://placehold.co/600x600/1e293b/cbd5e1?text=Track+1' },
  { id: 2, title: 'Ambient Electronic', genre: 'Electronic', mood: 'Calm', image: 'https://placehold.co/600x600/334155/e2e8f0?text=Track+2' },
  { id: 3, title: 'Cinematic Orchestra', genre: 'Orchestral', mood: 'Epic', image: 'https://placehold.co/600x600/475569/f1f5f9?text=Track+3' },
  { id: 4, title: 'Upbeat Funk', genre: 'Funk', mood: 'Energetic', image: 'https://placehold.co/600x600/64748b/f8fafc?text=Track+4' },
  { id: 5, title: 'Acoustic Folk', genre: 'Folk', mood: 'Mellow', image: 'https://placehold.co/600x600/94a3b8/f1f5f9?text=Track+5' },
  { id: 6, title: 'Jazzy Hip Hop', genre: 'Hip Hop', mood: 'Smooth', image: 'https://placehold.co/600x600/6b7280/e5e7eb?text=Track+6' },
];

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);

  const handleSlideChange = (swiper: { realIndex: SetStateAction<number>; }) => {
    setCurrentTrack(swiper.realIndex);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Generate Royalty-Free
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                Music for Your Videos
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create custom, AI-powered music tracks in seconds. Perfect for content creators, filmmakers, and musicians.
            </p>
            <Link
              href="/generate"
              className="inline-flex items-center px-8 py-4 bg-white hover:bg-gray-200 text-black text-lg font-semibold rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-white/25"
            >
              Start Creating
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Features</h2>
            <p className="text-gray-400 text-lg">
              Unlock your creativity with our advanced tools
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-lg p-8 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-2">Music Generation</h3>
              <p className="text-gray-400">
                Create unlimited tracks with advanced AI models trained on a massive dataset.
              </p>
            </div>
            <div className="bg-gray-900 rounded-lg p-8 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-2">Instant Downloads</h3>
              <p className="text-gray-400">
                Get your high-quality audio files instantly, ready for use in any project.
              </p>
            </div>
            <div className="bg-gray-900 rounded-lg p-8 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-lime-600 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-2">Commercial Use</h3>
              <p className="text-gray-400">
                All generated music is completely royalty-free for commercial and personal projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Swiper Carousel Section */}
      <section className="py-20 bg-black min-h-screen flex flex-col justify-center items-center">
        <style jsx global>{`
          .swiper-3d .swiper-slide-shadow-left,
          .swiper-3d .swiper-slide-shadow-right {
            background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
          }
          .swiper-3d .swiper-slide-shadow-right {
            background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
          }

          .my-swiper-custom .swiper-slide {
            width: 300px; /* Adjust the slide width to control the coverflow effect */
            height: 300px;
            border-radius: 12px;
            overflow: hidden;
          }

          .my-swiper-custom .swiper-slide img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        `}</style>

        {/* Main container for the Swiper and controls */}
        <div className="w-full flex flex-col items-center">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination]}
            className="my-swiper-custom w-full max-w-5xl"
            onSlideChange={handleSlideChange}
          >
            {featuredTracks.map((track) => (
              <SwiperSlide key={track.id}>
                <img src={track.image} alt={track.title} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Player controls section */}
          <div className="mt-12 flex flex-col items-center text-center">
            {/* Controls */}
            <div className="flex items-center space-x-6">
              <button className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                  <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
                </svg>
              </button>
              <button
                onClick={handlePlayPause}
                className="bg-white text-black p-4 rounded-full shadow-lg hover:scale-105 transition-transform"
              >
                {isPlaying ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.442 1.557-2.356 2.803-1.628l11.97 7.151c1.246.745 1.246 2.564 0 3.309l-11.97 7.151C6.057 21.954 4.5 21.04 4.5 19.59V5.653Z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                  <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            {/* Track description */}
            <div className="mt-4 text-center">
              <p className="text-lg font-semibold text-white">{featuredTracks[currentTrack].title}</p>
              <p className="text-sm text-gray-400">
                {featuredTracks[currentTrack].genre} with {featuredTracks[currentTrack].mood} vibes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Creators Say</h2>
            <p className="text-xl text-gray-400">Join thousands of satisfied users</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-3">
                  <span className="text-black font-semibold">S</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Sarah Chen</h4>
                  <p className="text-gray-400 text-sm">YouTube Creator</p>
                </div>
              </div>
              <p className="text-gray-300">&ldquo;Audio4Lab has revolutionized my content creation. I can generate perfect background music in minutes!&rdquo;</p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-3">
                  <span className="text-black font-semibold">M</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Mike Rodriguez</h4>
                  <p className="text-gray-400 text-sm">Indie Filmmaker</p>
                </div>
              </div>
              <p className="text-gray-300">&ldquo;The quality of music is incredible. It&apos;s like having a professional composer on demand.&rdquo;</p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-3">
                  <span className="text-black font-semibold">A</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Alex Thompson</h4>
                  <p className="text-gray-400 text-sm">Podcast Host</p>
                </div>
              </div>
              <p className="text-gray-300">&ldquo;Perfect for podcast intros and outros. The mood selection really captures the vibe I&apos;m going for.&rdquo;</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Create Amazing Music?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of creators who are already using Audio4Lab to enhance their content
          </p>
          <Link
            href="/generate"
            className="inline-flex items-center px-8 py-4 bg-white text-black hover:bg-gray-200 text-lg font-semibold rounded-full transition-colors shadow-lg"
          >
            Start Creating Now
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-lg">🎵</span>
              </div>
              <span className="text-white font-bold text-xl">Audio4Lab</span>
            </div>
            <p className="text-gray-400 mb-6">
              AI-powered music generation for content creators
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
            <p className="text-gray-500 text-sm mt-6">
              © 2024 Audio4Lab. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}