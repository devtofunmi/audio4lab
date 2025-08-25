"use client";

import { SetStateAction, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Navbar from "@/components/Navbar";
import Link from "next/link";
// The original mock data is included here for a self-contained example.
const featuredTracks = [
  {
    id: 1,
    title: "Slow Latin Reggaeton",
    genre: "Reggaeton",
    mood: "Vibes",
    image: "https://placehold.co/600x600/1e293b/cbd5e1?text=Track+1",
  },
  {
    id: 2,
    title: "Ambient Electronic",
    genre: "Electronic",
    mood: "Calm",
    image: "https://placehold.co/600x600/334155/e2e8f0?text=Track+2",
  },
  {
    id: 3,
    title: "Cinematic Orchestra",
    genre: "Orchestral",
    mood: "Epic",
    image: "https://placehold.co/600x600/475569/f1f5f9?text=Track+3",
  },
  {
    id: 4,
    title: "Upbeat Funk",
    genre: "Funk",
    mood: "Energetic",
    image: "https://placehold.co/600x600/64748b/f8fafc?text=Track+4",
  },
  {
    id: 5,
    title: "Acoustic Folk",
    genre: "Folk",
    mood: "Mellow",
    image: "https://placehold.co/600x600/94a3b8/f1f5f9?text=Track+5",
  },
  {
    id: 6,
    title: "Jazzy Hip Hop",
    genre: "Hip Hop",
    mood: "Smooth",
    image: "https://placehold.co/600x600/6b7280/e5e7eb?text=Track+6",
  },
];

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(2); // Start at track 3 (index 2)
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);

  const handleSlideChange = (swiper: { realIndex: SetStateAction<number> }) => {
    setCurrentTrack(swiper.realIndex);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handlePrevSlide = () => {
    if (swiperRef) {
      swiperRef.slidePrev();
    }
  };

  const handleNextSlide = () => {
    if (swiperRef) {
      swiperRef.slideNext();
    }
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
              Create custom, AI-powered music tracks in seconds. Perfect for
              content creators, filmmakers, and musicians.
            </p>
            <Link
              href="/generate"
              className="inline-flex items-center px-8 py-4 bg-white hover:bg-gray-200 text-black text-lg font-semibold rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-white/25"
            >
              Start Creating
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16">
            <p className="text-sm text-gray-400 mb-4 tracking-wider">
              For CREATORS
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 max-w-4xl">
              Create the most advanced audio content with our AI-powered tools
              and features
            </h2>
          </div>

          {/* Main Features Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Text to Speech */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Text to Speech</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Transform your written content into natural-sounding speech.
                Perfect for voiceovers, narrations, and audio content creation.
                Choose from multiple voice models for different styles and
                emotions.
              </p>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <span className="text-white font-semibold">
                      Natural Voices
                    </span>
                    <p className="text-gray-400 text-sm">
                      Lifelike speech generation for professional content
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <span className="text-white font-semibold">
                      Multiple Languages
                    </span>
                    <p className="text-gray-400 text-sm">
                      Support for 29+ languages and accents
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <span className="text-white font-semibold">
                      Emotion Control
                    </span>
                    <p className="text-gray-400 text-sm">
                      Adjust tone and emotion for perfect delivery
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Speech to Text */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Speech to Text</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Convert your audio recordings into accurate text transcriptions.
                Perfect for creating subtitles, transcribing interviews, or
                converting voice notes to written content.
              </p>

              {/* Metrics */}
              <div className="flex items-center space-x-8 mb-8">
                <div>
                  <div className="text-3xl font-bold">98%</div>
                  <div className="text-gray-400 text-sm">Accuracy</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">Fast</div>
                  <div className="text-gray-400 text-sm">
                    Real-time processing
                  </div>
                </div>
              </div>

              {/* Demo Interface */}
              <div className="bg-black/50 rounded-lg p-4 border border-gray-700">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-blue-400 text-sm">
                    Audio Transcription ⚡
                  </span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="text-gray-400">Upload audio file</div>
                  <div className="text-gray-500">Get instant transcription</div>
                </div>
              </div>
            </div>
          </div>

          {/* Voice Changer and Easy APIs Row */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Music Generation */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Music Generation</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Create original music tracks in any genre or style. From
                background music for videos to full compositions, generate
                royalty-free music that perfectly matches your creative vision.
              </p>

              {/* Metrics */}
              <div className="flex items-center space-x-8 mb-8">
                <div>
                  <div className="text-3xl font-bold">100+</div>
                  <div className="text-gray-400 text-sm">Genres</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">Custom</div>
                  <div className="text-gray-400 text-sm">Length & Style</div>
                </div>
              </div>

              {/* Music Control Interface */}
              <div className="bg-black/50 rounded-lg p-4 border border-gray-700">
                <div className="flex items-center space-x-4">
                  <button className="bg-white text-black px-4 py-2 rounded-full flex items-center space-x-2">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                  <div className="flex space-x-2">
                    <span className="bg-gray-700 px-3 py-1 rounded text-sm">
                      INPUT
                    </span>
                    <span className="bg-gray-700 px-3 py-1 rounded text-sm">
                      OUTPUT
                    </span>
                  </div>
                  <div className="ml-auto">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sound Effects */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Sound Effects</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Generate custom sound effects for any project. From cinematic
                impacts to ambient sounds, create the perfect audio atmosphere
                for your content.
              </p>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <span className="text-white font-semibold">
                      Custom Sound Effects
                    </span>
                    <p className="text-gray-400 text-sm">
                      Generate any sound you can imagine
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <span className="text-white font-semibold">
                      High Quality Audio
                    </span>
                    <p className="text-gray-400 text-sm">
                      Professional-grade sound effects
                    </p>
                  </div>
                </div>
              </div>

              <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors">
                CREATE SOUNDS
              </button>
            </div>
          </div>

          {/* Conversational AI Section */}
          <div className="mt-8 bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Conversational AI</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Create interactive voice experiences for your content. Perfect
                  for podcasts, audiobooks, and interactive storytelling with
                  natural conversation flow.
                </p>

                {/* Features List */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span>Natural dialogue</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span>Multiple voices</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span>Emotion control</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span>Interactive stories</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span>Character voices</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span>Script generation</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span>Voice cloning</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <button className="bg-black border border-gray-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors flex items-center space-x-2">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                  </svg>
                  <span>TRY CONVERSATION</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Swiper Carousel Section */}
      <section className="py-20 bg-black min-h-screen flex flex-col justify-center items-center">
        <style jsx global>{`
          .swiper-3d .swiper-slide-shadow-left,
          .swiper-3d .swiper-slide-shadow-right {
            background-image: linear-gradient(
              to left,
              rgba(0, 0, 0, 0.5),
              rgba(0, 0, 0, 0)
            );
          }
          .swiper-3d .swiper-slide-shadow-right {
            background-image: linear-gradient(
              to right,
              rgba(0, 0, 0, 0.5),
              rgba(0, 0, 0, 0)
            );
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
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            initialSlide={2}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 5,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination]}
            className="my-swiper-custom w-full max-w-5xl"
            onSlideChange={handleSlideChange}
            onSwiper={setSwiperRef}
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
              <button
                onClick={handlePrevSlide}
                className="text-gray-400 cursor-pointer hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button
                onClick={handlePlayPause}
                className="bg-white cursor-pointer text-black p-4 rounded-full shadow-lg hover:scale-105 transition-transform"
              >
                {isPlaying ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.5 5.653c0-1.442 1.557-2.356 2.803-1.628l11.97 7.151c1.246.745 1.246 2.564 0 3.309l-11.97 7.151C6.057 21.954 4.5 21.04 4.5 19.59V5.653Z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
              <button
                onClick={handleNextSlide}
                className="text-gray-400 cursor-pointer hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            {/* Track description */}
            <div className="mt-4 text-center">
              <p className="text-lg font-semibold text-white">
                {featuredTracks[currentTrack].title}
              </p>
              <p className="text-sm text-gray-400">
                {featuredTracks[currentTrack].genre} with{" "}
                {featuredTracks[currentTrack].mood} vibes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-sm text-gray-400 mb-4 tracking-wider">
              TESTIMONIALS
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 max-w-4xl">
              Trusted by creators worldwide
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Large Featured Testimonial */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl mb-1">
                    Sarah Chen
                  </h4>
                  <p className="text-gray-400 mb-2">YouTube Creator</p>
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                &quot;Audio4Lab has completely transformed my content creation
                workflow. The AI-generated music is indistinguishable from
                professionally composed tracks, and the variety of styles
                available means I never run out of creative options.&quot;
              </p>
              <div className="mt-6 flex items-center text-sm text-gray-400">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Verified Creator • 2.3M Subscribers
              </div>
            </div>

            {/* Smaller Testimonials Grid */}
            <div className="space-y-6">
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">M</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Mike Rodriguez</h4>
                    <p className="text-gray-400 text-sm">Indie Filmmaker</p>
                  </div>
                  <div className="ml-auto flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-3 h-3 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-300">
                  &quot;The quality is incredible. It&apos;s like having a professional
                  composer on demand for every project.&quot;
                </p>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">A</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Alex Thompson</h4>
                    <p className="text-gray-400 text-sm">Podcast Host</p>
                  </div>
                  <div className="ml-auto flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-3 h-3 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-300">
                  &quot;Perfect for podcast intros and outros. The mood selection
                  really captures the vibe I&apos;m going for.&quot;
                </p>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">L</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Lisa Park</h4>
                    <p className="text-gray-400 text-sm">Content Creator</p>
                  </div>
                  <div className="ml-auto flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-3 h-3 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-300">
                  &quot;Game-changer for my social media content. The text-to-speech
                  feature saves me hours of recording.&quot;
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                50K+
              </div>
              <div className="text-gray-400">Active Creators</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                1M+
              </div>
              <div className="text-gray-400">Tracks Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                4.9/5
              </div>
              <div className="text-gray-400">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                99.9%
              </div>
              <div className="text-gray-400">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Create Amazing Music?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of creators who are already using Audio4Lab to
            enhance their content
          </p>
          <Link
            href="/generate"
            className="inline-flex items-center px-8 py-4 bg-white text-black hover:bg-gray-200 text-lg font-semibold rounded-full transition-colors shadow-lg"
          >
            Start Creating Now
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
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
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Contact
              </a>
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
