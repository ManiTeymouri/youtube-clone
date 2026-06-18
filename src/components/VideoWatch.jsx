"use client";
import Skeleton from "./Skeleton.jsx";
import { MyPlayer } from "./player";
import Image from "next/image.js";
import { ThumbsUp, ThumbsDown } from "lucide-react";

export default function VideoWatch({
  thumb = "/images/thumbnails/thumbnail-temp.jpg",
  profile,
  title = "undefined",
  username = "user",
  totalView = "0",
  dateVideo = "1 sec ago",
  videoUrl = "",
  Description = "Description",
  likes = "",
  dislikes = "",
  // videoDuration = "",
}) {
  return (
    <div>
      {/* video place */}
      <div className="grid gap-2">
        <div className="w-190">
          <MyPlayer src={videoUrl} poster={thumb} />
        </div>
        <div className="font-bold text-2xl ">{title}</div>
        <div className="flex place-items-center gap-2">
          <div className="shrink-0 overflow-hidden">
            <Image
              src={profile}
              alt="profile"
              width={1024}
              height={1024}
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>

          <div className="grid">
            <div className="font-bold">{username}</div>
            <div className="text-xs text-[#A1A1A1]">10k subscribers</div>
          </div>
          <div className="rounded-full cursor-pointer font-bold text-sm flex place-items-center px-3 py-2 bg-[#272727]">
            Join
          </div>
          <div className="rounded-full cursor-pointer font-bold text-sm flex place-items-center px-3 py-2 text-black bg-[#f5eeee] hover:bg-[#D9D9D9]">
            Subscribe
          </div>
          <div className="rounded-full h-full cursor-pointer flex place-items-center justify-center px-3 py-2">
            <div className="gap-2 rounded-l-full px-3 py-2 flex place-items-center hover:bg-[#424242] bg-[#272727]">
              <ThumbsUp />
              <span className="font-bold">{likes}</span>
            </div>
            <div className="flex gap-2 px-3 py-2 place-items-center border-l border-[#A1A1A1] hover:bg-[#424242] bg-[#272727] rounded-r-full h-full">
              <span className="font-bold">{dislikes}</span>

              <ThumbsDown />
            </div>
          </div>
        </div>

        <div className="grid bg-[#272727] rounded-xl py-2 px-1">
          <div className="flex gap-2 font-bold">
            <div>{totalView} views</div>
            <div>{dateVideo}</div>
          </div>

          <pre className="font-sans line-clamp-3">{Description}</pre>
        </div>
      </div>
    </div>
  );
}
