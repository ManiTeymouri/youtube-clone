"use client";
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import HoverVideoPlayer from "react-hover-video-player";
import { MoreHorizontal } from "lucide-react";

export default function VideoCard({
  thumb = "/images/thumbnails/thumbnail-temp.jpg",
  profile = "/images/profiles/profile-temp.jpg",
  title = "undefined title",
  username = "NA Username",
  totalView = "0",
  dateVideo = "1 sec ago",
  videoPreview = "",
  videoDuration = "0:00",
}) {
  const hasVideo = videoPreview && videoPreview.trim() !== "";
  return (
    // videocard Component

    <div className="flex flex-col rounded-xl gap-1 justify-center max-w-xl transtion-all cursor-pointer duration-300 hover:bg-[#141E32] p-2">
      <Link href={"#"}>
        <div className="overflow-hidden rounded-xl mb-2 relative">
          <div className="absolute  bg-black/50 rounded-full mb-1 mr-1 flex place-items-center z-2 bottom-0 right-0 px-2">
            <span className="text-xs   font-bold">{videoDuration}</span>
          </div>
          {hasVideo ? (
            <HoverVideoPlayer
              videoSrc={videoPreview}
              pausedOverlay={
                <Image
                  className="h-full w-full rounded-xl transition-all duration-300 hover:scale-105 hover:brightness-75"
                  src={thumb}
                  alt="thumbnail video"
                  height={2048}
                  width={2048}></Image>
              }
              loadingOverlay={
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                  <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin" />
                </div>
              }
              className="w-full h-full aspect-video"
              sizingMode="container"
            />
          ) : (
            <Image
              className="h-full w-full rounded-xl transition-all duration-300 hover:scale-105 hover:brightness-75"
              src={thumb}
              alt="thumbnail video"
              height={2048}
              width={2048}
            />
          )}
        </div>
      </Link>
      <div className="flex gap-3">
        <div className="shrink-0 overflow-hidden">
          <Image
            className="rounded-full h-10 w-10 object-cover"
            src={profile}
            alt="profile"
            width={50}
            height={50}></Image>
        </div>

        <div className=" min-w-0 line-clamp-2 flex-auto text-white">
          {title}
        </div>
        <div className="">
          <MoreHorizontal className="text-white hover:bg-[#0a0f1a] rounded-full size-7 transition-all duration-200" />
        </div>
      </div>
      <div className="flex h-full whitespace-nowrap overflow-hidden items-end gap-2">
        <div className="text-[#5CA0B7] text-sm">{username}</div>
        <div className="text-[#5CA0B7] font-thin text-xs">{totalView} view</div>

        <div className="text-[#5CA0B7] font-thin text-xs">{dateVideo}</div>
      </div>
    </div>
  );
}
