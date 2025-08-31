import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { PlayerProvider } from "@/contexts/PlayerContext";
import MusicPlayer from "@/components/MusicPlayer";
import { GeistSans } from "geist/font/sans";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PlayerProvider>
      <main className={`${GeistSans.variable} font-sans`}>
        <Component {...pageProps} />
        <MusicPlayer />
      </main>
    </PlayerProvider>
  );
}