"use client"
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import HoverVideoPlayer from "react-hover-video-player";
import { MoreHorizontal } from "lucide-react";

import profile from "@/assets/images/profile.jpg";
import thumbnail from "@/assets/images/thumbnail.jpg";

export default function VideoCard({thumb = thumbnail}) {
    return (
        // videocard Component

        <div className="flex flex-col rounded-xl gap-1 justify-center max-w-xl transtion-all cursor-pointer duration-300 hover:bg-[#141E32] p-2">

            <Link href={"/videos/preview.mp4"}>
            <div className="overflow-hidden rounded-xl mb-2 ">
                    {/* <Image className="h-full w-full rounded-xl transition-all duration-300 hover:scale-105 hover:brightness-75" src={thumbnail} alt="thumbnail video" height={720} width={1024}></Image> */}
                    <HoverVideoPlayer videoSrc={"/videos/preview.mp4"} pausedOverlay={
                        <Image className="h-full w-full rounded-xl transition-all duration-300 hover:scale-105 hover:brightness-75" src={thumb} alt="thumbnail video" height={2048} width={2048}></Image>
                    
                    }
                    loadingOverlay={
                            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                                <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            </div>
                        }
                        className="w-full h-full aspect-video"
                        sizingMode="container"
                    />
            </div>
            </Link>
            <div className="flex gap-3">
                    <div className="shrink-0">
                        <Image className="rounded-full" src={profile} alt="profile" width={50} height={50}></Image>
                    </div>

                    <div className=" min-w-0 line-clamp-2 flex-auto text-white"> Hello my name is mani and this is a simple template text for my responsive reaction to this paragraph thanks for your attenion.</div>
                    <div className="" ><MoreHorizontal className="text-white hover:bg-[#0a0f1a] rounded-full size-7 transition-all duration-200"/></div>
                    
            </div>
            <div className="flex h-full whitespace-nowrap overflow-hidden items-end gap-2">
                <div className="text-[#5CA0B7] text-sm">
                  MacosBroWithProgrammer  
                </div>
                <div className="text-[#5CA0B7] font-thin text-xs">
                  100k view  
                </div>

                <div className="text-[#5CA0B7] font-thin text-xs">
                  1 day ago  
                </div>
            </div>
            
        </div>

    );
}