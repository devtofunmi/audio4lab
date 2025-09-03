import React, { useState } from "react";
import Layout from "../components/Layout";
import { 
  VolumeHigh, 
  Notification, 
  Profile, 
  Security, 
  DocumentDownload,
  Moon,
  Sun1,
  ToggleOn,
  ToggleOff
} from "iconsax-react";

const Settings = () => {
  const [settings, setSettings] = useState({
    masterVolume: 75,
    notifications: true,
    autoDownload: false,
    darkMode: true,
    highQuality: true,
    autoPlay: false,
  });

  const handleToggle = (key: keyof typeof settings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleVolumeChange = (value: number) => {
    setSettings(prev => ({
      ...prev,
      masterVolume: value
    }));
  };

  return (
    <Layout title="Settings">
      <div className="max-w-4xl w-full">
        {/* Profile Section */}
        <section className="mb-8">
          <div className="bg-[#171717] rounded-lg border border-gray-600 p-6">
            <div className="flex items-center space-x-4 mb-6">
              <Profile size="24" color="#ffffff" />
              <h2 className="text-xl font-bold text-white">Profile</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Display Name
                </label>
                <input
                  type="text"
                  defaultValue="Jay"
                  className="w-full bg-[#0d0d0d] border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  defaultValue="jay@example.com"
                  className="w-full bg-[#0d0d0d] border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-white transition-colors"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Audio Settings */}
        <section className="mb-8">
          <div className="bg-[#171717] rounded-lg border border-gray-600 p-6">
            <div className="flex items-center space-x-4 mb-6">
              <VolumeHigh size="24" color="#ffffff" />
              <h2 className="text-xl font-bold text-white">Audio</h2>
            </div>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Master Volume: {settings.masterVolume}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={settings.masterVolume}
                  onChange={(e) => handleVolumeChange(parseInt(e.target.value))}
                  className="w-full slider"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-medium">High Quality Audio</h3>
                  <p className="text-gray-400 text-sm">Stream and download in higher bitrate</p>
                </div>
                <button onClick={() => handleToggle('highQuality')}>
                  {settings.highQuality ? (
                    <ToggleOn size="32" color="#ffffff" />
                  ) : (
                    <ToggleOff size="32" color="#9ca3af" />
                  )}
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-medium">Auto Play</h3>
                  <p className="text-gray-400 text-sm">Automatically play next track</p>
                </div>
                <button onClick={() => handleToggle('autoPlay')}>
                  {settings.autoPlay ? (
                    <ToggleOn size="32" color="#ffffff" />
                  ) : (
                    <ToggleOff size="32" color="#9ca3af" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Notifications */}
        <section className="mb-8">
          <div className="bg-[#171717] rounded-lg border border-gray-600 p-6">
            <div className="flex items-center space-x-4 mb-6">
              <Notification size="24" color="#ffffff" />
              <h2 className="text-xl font-bold text-white">Notifications</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-medium">Push Notifications</h3>
                  <p className="text-gray-400 text-sm">Get notified about new releases and updates</p>
                </div>
                <button onClick={() => handleToggle('notifications')}>
                  {settings.notifications ? (
                    <ToggleOn size="32" color="#ffffff" />
                  ) : (
                    <ToggleOff size="32" color="#9ca3af" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Downloads */}
        <section className="mb-8">
          <div className="bg-[#171717] rounded-lg border border-gray-600 p-6">
            <div className="flex items-center space-x-4 mb-6">
              <DocumentDownload size="24" color="#ffffff" />
              <h2 className="text-xl font-bold text-white">Downloads</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-medium">Auto Download</h3>
                  <p className="text-gray-400 text-sm">Automatically download liked tracks</p>
                </div>
                <button onClick={() => handleToggle('autoDownload')}>
                  {settings.autoDownload ? (
                    <ToggleOn size="32" color="#ffffff" />
                  ) : (
                    <ToggleOff size="32" color="#9ca3af" />
                  )}
                </button>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Download Location
                </label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    defaultValue="~/Downloads/Audio4lab"
                    className="flex-1 bg-[#0d0d0d] border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-white transition-colors"
                    readOnly
                  />
                  <button className="bg-gray-800 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-700 transition-colors">
                    Browse
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Appearance */}
        {/* <section className="mb-8">
          <div className="bg-[#171717] rounded-lg border border-gray-600 p-6">
            <div className="flex items-center space-x-4 mb-6">
              {settings.darkMode ? (
                <Moon size="24" color="#ffffff" />
              ) : (
                <Sun1 size="24" color="#ffffff" />
              )}
              <h2 className="text-xl font-bold text-white">Appearance</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-medium">Dark Mode</h3>
                  <p className="text-gray-400 text-sm">Use dark theme for better night experience</p>
                </div>
                <button onClick={() => handleToggle('darkMode')}>
                  {settings.darkMode ? (
                    <ToggleOn size="32" color="#ffffff" />
                  ) : (
                    <ToggleOff size="32" color="#9ca3af" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </section> */}

        {/* Save Button */}
        <div className="flex justify-center">
          <button className="bg-white  cursor-pointer hover:bg-gray-100 text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors">
            Save Changes
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;