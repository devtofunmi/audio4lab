import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { PlayerProvider } from "@/contexts/PlayerContext";
import MusicPlayer from "@/components/MusicPlayer";
import { GeistSans } from "geist/font/sans";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PlayerProvider>
      <main className={`${GeistSans.variable} font-sans`}>
        <Component {...pageProps} />
        <MusicPlayer />
      </main>
      <ToastContainer />
    </PlayerProvider>
  );
}