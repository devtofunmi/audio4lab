import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { PlayerProvider } from "@/contexts/PlayerContext";
import MusicPlayer from "@/components/MusicPlayer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PlayerProvider>
      <Component {...pageProps} />
      <MusicPlayer />
    </PlayerProvider>
  );
}
