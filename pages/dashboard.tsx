import { useState } from 'react';

import { 
  FaHome, 
  FaMicrophone, 
  FaVolumeUp, 
  FaUser,
  FaBell,

  FaBars,
  FaTimes
} from 'react-icons/fa';


export default function Dashboard() {
  const [selectedTab, setSelectedTab] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarItems = [
    { id: 'home', label: 'Home', icon: FaHome },
    { id: 'voices', label: 'Voices', icon: FaMicrophone },
  ];

  const playgroundItems = [
    { id: 'text-to-speech', label: 'Text to Speech', icon: FaMicrophone },
    { id: 'voice-changer', label: 'Voice Changer', icon: FaVolumeUp },
    { id: 'sound-effects', label: 'Sound Effects', icon: FaVolumeUp },
    { id: 'voice-isolator', label: 'Voice Isolator', icon: FaMicrophone },
  ];

  const quickActions = [
    { id: 'instant-speech', label: 'Instant speech', icon: 'd+', color: 'from-blue-500 to-purple-600', hoverColor: 'from-blue-600 to-purple-700' },
    { id: 'audiobook', label: 'Audiobook', icon: '🎧', color: 'from-orange-500 to-red-600', hoverColor: 'from-orange-600 to-red-700' },
    { id: 'conversational-ai', label: 'Conversational AI', icon: '💬', color: 'from-purple-500 to-pink-600', hoverColor: 'from-purple-600 to-pink-700' },
    { id: 'music', label: 'Music', icon: '🎵', color: 'from-green-500 to-lime-600', hoverColor: 'from-green-600 to-lime-700' },
    { id: 'sound-effect', label: 'Sound effect', icon: '🔉', color: 'from-sky-500 to-cyan-600', hoverColor: 'from-sky-600 to-cyan-700' },
    { id: 'dubbed-video', label: 'Dubbed video', icon: '🎬', color: 'from-rose-500 to-fuchsia-600', hoverColor: 'from-rose-600 to-fuchsia-700' },
  ];

  const libraryItems = [
    {
      id: 1,
      name: 'Vincent - Deep & Relaxing',
      description: 'A smooth, calming British voice with a deep and slightly raspy...',
      avatar: '👨',
      color: 'bg-pink-500'
    },
    {
      id: 2,
      name: 'Father Christmas - magical storyteller, older British...',
      description: 'A festive Father Christmas sounding old age character with hints...',
      avatar: '🎅',
      color: 'bg-green-500'
    },
    {
      id: 3,
      name: 'Clara - Casual Conversational',
      description: 'A natural, authentic female voice in American English, perfect for...',
      avatar: '👩',
      color: 'bg-yellow-500'
    },
    {
      id: 4,
      name: 'Edward',
      description: 'Young American Confident, Assertive Male Voice with Midwest...',
      avatar: '👨',
      color: 'bg-purple-500'
    },
    {
      id: 5,
      name: 'Cal - Deep and Calming',
      description: 'A deep, calming, and authoritative middle-aged American male...',
      avatar: '👨',
      color: 'bg-blue-500'
    }
  ];


  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 
        bg-gray-900/50 border-r border-gray-800 
        transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Mobile Close Button */}
        <div className="lg:hidden flex justify-end p-4">
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-gray-400 hover:text-white"
          >
            <FaTimes className="w-6 h-6" />
          </button>
        </div>

        {/* Logo */}
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-sm">A4</span>
            </div>
            <span className="font-bold text-lg">Audio4Lab</span>
          </div>
         
        </div>

        {/* Navigation */}
        <nav className="p-4">
          {/* Main Items */}
          <div className="space-y-1">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setSelectedTab(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                  selectedTab === item.id
                    ? 'bg-gray-800/50 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          {/* Playground Section */}
          <div className="mt-6">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Playground
            </h3>
            <div className="space-y-1">
              {playgroundItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSidebarOpen(false)}
                  className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                >
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm">{item.label}</span>
                </button>
              ))}
            </div>
          </div>


          {/* User Profile */}
          <div className="mt-6 flex items-center space-x-3 p-3 bg-gray-800 rounded-lg">
            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
              <FaUser className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">Audio4Lab User</p>
              <p className="text-xs text-gray-400 truncate">My Workspace</p>
            </div>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto bg-[#0B0B0C]">
        {/* Header */}
        <header className="bg-[#0B0B0C] md:hidden border-b border-[#1C1C1E] p-4 lg:p-6">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-gray-400 hover:text-white"
            >
              <FaBars className="w-6 h-6" />
            </button>
            <span className="font-bold text-lg">Dashboard</span>
            <div className="flex items-center space-x-4">
              <button className="text-gray-400 hover:text-white">
                <FaBell className="w-5 h-5" />
              </button>
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                <span className="text-sm font-semibold">J</span>
              </div>
            </div>
          </div>
        </header>
        {/* Home Content */}
        {selectedTab === 'home' && (
          <div className="p-4 lg:p-6 space-y-8">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-semibold">Good afternoon, Jesutofunmi</h1>
                
            </div>
            
            <div className="my-8">
              <h2 className="text-xl font-semibold">My Workspace</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-4">
                {quickActions.map((item) => (
                  <div key={item.id} className="bg-[#1C1C1E] rounded-xl p-4 flex flex-col items-start space-y-2 transition-transform duration-200 hover:scale-105">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r p-1 flex items-center justify-center" style={{ backgroundImage: `linear-gradient(to right, ${item.color.split(' ')[0]}, ${item.color.split(' ')[1]})` }}>
                      <span className="text-white text-lg font-bold">{item.icon}</span>
                    </div>
                    <h3 className="text-sm font-medium text-white mt-auto">{item.label}</h3>
                  </div>
                ))}
              </div>
            </div>

            {/* Latest from the library */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Latest from the library</h2>
              <button className="text-sm text-gray-400 hover:text-white">See all</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {libraryItems.map((item) => (
                <div key={item.id} className="bg-[#1C1C1E] rounded-xl p-4 flex items-start space-x-4">
                  <div className={`${item.color} w-10 h-10 rounded-full flex items-center justify-center text-xl`}>
                    {item.avatar}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-white">{item.name}</h3>
                    <p className="text-sm text-gray-400 mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
          
          </div>
        )}
      </main>
    </div>
  );
}