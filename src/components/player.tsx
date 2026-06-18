"use client";

import "@videojs/react/video/skin.css";
import { createPlayer, videoFeatures } from "@videojs/react";
import { VideoSkin, Video } from "@videojs/react/video";

const Player = createPlayer({ features: videoFeatures });

interface MyPlayerProps {
  src: string;
  poster?: string;
}

export const MyPlayer = ({ src, poster }: MyPlayerProps) => {
  return (
    <Player.Provider>
      <VideoSkin className="w-full aspect-video">
        <Video src={src} poster={poster} playsInline />
      </VideoSkin>
    </Player.Provider>
  );
};
