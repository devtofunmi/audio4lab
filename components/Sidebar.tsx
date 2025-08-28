import React from "react";
import {
  Home2,
  MusicPlay,
  VolumeHigh,
  MusicFilter,
  Heart,
  DocumentDownload,
  Setting,
} from "iconsax-react";

interface LinkProps {
  href: string;
  className: string;
  children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ href, className, children }) => {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
};

const Sidebar: React.FC = () => {
  const navItems = [
    { name: "Home", icon: Home2, href: "/dashboard" },
    { name: "Music", icon: MusicPlay, href: "/music" },
    { name: "Sound Effects", icon: VolumeHigh, href: "#" },
    { name: "Your Creation", icon: MusicFilter, href: "#" },
    { name: "Favorites", icon: Heart, href: "#" },
    { name: "Downloads", icon: DocumentDownload, href: "#" },
  ];

  const user = {
    name: "Jay",
    initials: "J",
  };

  return (
    <aside className="w-64 bg-[#171717] border-r border-gray-600 p-6 h-screen fixed left-0 top-0 overflow-y-auto flex flex-col">
      <div className="flex items-center space-x-3 mb-8 pb-6 border-b border-gray-600">
        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
          <MusicPlay size="20" color="#000" />
        </div>
        <span className="font-bold text-xl text-white">Audio4lab</span>
      </div>
      <nav className="flex-1">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="flex items-center space-x-3 px-3 py-3 rounded-lg text-gray-400 hover:bg-gray-800/50 transition-all duration-200 group"
              >
                <item.icon
                  size="20"
                  color="#9ca3af"
                  className="group-hover:scale-110 transition-transform"
                />
                <span className="font-medium group-hover:scale-110 transition-transform">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-auto pt-6 border-t border-gray-600">
      <div className="mt-4 flex justify-between items-center text-gray-400">
          <Link
            href=""
            className="flex items-center space-x-2 px-3 py-1 rounded-lg hover:bg-gray-800/50 group"
          >
            <Setting color="#9ca3af" size="20" className="group-hover:scale-110 transition-transform" />
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