import React, { useState } from "react";
import Sidebar from "./Sidebar";
import {
  SearchNormal,
  HambergerMenu,
  CloseSquare,
  MusicPlay,
} from "iconsax-react";

interface LayoutProps {
  children: React.ReactNode;
  title?: string; // Made optional since we're not using it
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex bg-[#0d0d0d] min-h-screen">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block fixed left-0 top-0 h-screen w-64">
        <Sidebar />
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed left-0 top-0 h-full w-64 bg-[#171717] transform transition-transform flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-gray-600 flex-shrink-0">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <MusicPlay size="20" color="#000" />
                </div>
                <span className="font-bold text-xl text-white">Audio4lab</span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-gray-300 p-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center"
                aria-label="Close menu"
              >
                <CloseSquare size="24" color="#ffffff" />
              </button>
            </div>
            <div className="flex-1 overflow-hidden">
              <Sidebar isMobile={true} />
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 lg:ml-64">
        <header className="fixed top-0 right-0 left-0 lg:left-64 bg-[#171717] border-b border-gray-600 px-4 py-4 z-40">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden text-white hover:text-gray-300 p-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center"
                aria-label="Open menu"
              >
                <HambergerMenu color="#ffffff" size="24" />
              </button>
            </div>

            {/* Search Bar */}
            <div className="hidden sm:block relative w-40 lg:w-80">
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-[#171717] border-2 border-gray-600 rounded-full p-2 pl-10 pr-4 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors"
              />
              <SearchNormal
                size="18"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
            </div>
          </div>
        </header>

        <main className="pt-20 p-4 lg:p-6 mt-10 md:mt-20">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
