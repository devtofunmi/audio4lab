import Navbar from '@/components/Navbar';

export default function Account() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Account Settings</h1>
          <p className="text-xl text-gray-400">
            Manage your profile and preferences
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Info */}
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-6">Profile Information</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-white font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    defaultValue="John Doe"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    defaultValue="john.doe@example.com"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">
                    Bio
                  </label>
                  <textarea
                    rows={3}
                    defaultValue="Music producer and content creator"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                
                              <button className="w-full py-3 px-4 bg-white hover:bg-gray-200 text-black rounded-lg transition-colors">
                Update Profile
              </button>
            </div>
          </div>

          {/* Subscription */}
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-6">Subscription</h2>
              
                          <div className="bg-gradient-to-r from-gray-700 to-gray-900 p-6 rounded-lg text-white">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Pro Plan</h3>
                <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                  Active
                </span>
              </div>
              <p className="text-gray-200 mb-4">
                Unlimited music generation, high-quality exports, and priority support
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">$19.99/month</span>
                <button className="px-4 py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors">
                  Manage
                </button>
              </div>
            </div>
          </div>

          {/* API Keys */}
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-6">API Access</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-white font-medium mb-2">
                    API Key
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="password"
                      defaultValue="sk-1234567890abcdef"
                      className="flex-1 px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                    <button className="px-4 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors">
                      Show
                    </button>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <button className="flex-1 py-3 px-4 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors">
                    Regenerate Key
                  </button>
                  <button className="flex-1 py-3 px-4 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors">
                    Copy
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-lg font-semibold text-white mb-4">Account Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Member Since</span>
                  <span className="text-white">Jan 2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Tracks Generated</span>
                  <span className="text-white">156</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Storage Used</span>
                  <span className="text-white">2.4 GB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">API Calls</span>
                  <span className="text-white">1,234</span>
                </div>
              </div>
            </div>

            {/* Preferences */}
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-lg font-semibold text-white mb-4">Preferences</h3>
              <div className="space-y-3">
                <label className="flex items-center">
                  <input type="checkbox" defaultChecked className="mr-3" />
                  <span className="text-white">Email notifications</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" defaultChecked className="mr-3" />
                  <span className="text-white">Auto-save to library</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3" />
                  <span className="text-white">Public profile</span>
                </label>
              </div>
            </div>

            {/* Danger Zone */}
            <div className="bg-red-900 bg-opacity-20 border border-red-700 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-red-400 mb-4">Danger Zone</h3>
              <div className="space-y-3">
                <button className="w-full py-3 px-4 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors">
                  Delete Account
                </button>
                <button className="w-full py-4 px-4 bg-red-600 bg-opacity-50 hover:bg-opacity-75 text-white rounded-lg transition-colors">
                  Export Data
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
