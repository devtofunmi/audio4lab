import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Home2,
  MusicPlay,
  VolumeHigh,
  MusicFilter,
  Heart,
  DocumentDownload,
  Setting,
} from "iconsax-react";

interface SidebarProps {
  isMobile?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isMobile = false }) => {
  const router = useRouter();
  
  const navItems = [
    { name: "Home", icon: Home2, href: "/dashboard" },
    { name: "Music", icon: MusicPlay, href: "/music" },
    { name: "Sound Effects", icon: VolumeHigh, href: "/sound-effects" },
    { name: "Your Creation", icon: MusicFilter, href: "/your-creation" },
    { name: "Favorites", icon: Heart, href: "/favorites" },
    { name: "Downloads", icon: DocumentDownload, href: "/downloads" },
  ];

  const user = {
    name: "Jay",
    initials: "J",
  };

  return (
    <aside className={`${isMobile ? 'w-full bg-transparent' : 'w-full bg-[#171717] border-r border-gray-600'} p-6 h-full overflow-y-auto flex flex-col`}>
      {!isMobile && (
        <div className="flex items-center space-x-3 mb-8 pb-6 border-b border-gray-600">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
            <MusicPlay size="20" color="#000" />
          </div>
          <span className="font-bold text-xl text-white">Audio4lab</span>
        </div>
      )}
      <nav className="flex-1">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const isActive = router.pathname === item.href;
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-200 group ${
                    isActive 
                      ? 'bg-white/10 text-white' 
                      : 'text-gray-400 hover:bg-gray-800/50'
                  }`}
                >
                  <item.icon
                    size="20"
                    color={isActive ? "#ffffff" : "#9ca3af"}
                    className="group-hover:scale-110 transition-transform"
                  />
                  <span className="font-medium group-hover:scale-110 transition-transform">{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="mt-auto pt-6 border-t border-gray-600">
        <div className="mb-4">
          <Link
            href="/settings"
            className={`flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-200 group ${
              router.pathname === '/settings' 
                ? 'bg-white/10 text-white' 
                : 'text-gray-400 hover:bg-gray-800/50'
            }`}
          >
            <Setting 
              size="20" 
              color={router.pathname === '/settings' ? "#ffffff" : "#9ca3af"} 
              className="group-hover:scale-110 transition-transform" 
            />
            <span className="font-medium group-hover:scale-110 transition-transform">Settings</span>
          </Link>
        </div>

        <div className="flex items-center space-x-3 text-white">
          <div className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center">
            <span className="font-medium">{user.initials}</span>
          </div>
          <span className="font-medium">{user.name}</span>
        </div>
       
      </div>
    </aside>
  );
};

export default Sidebar;