"use client";

import Link from "next/link";
import Image from "next/image";
import {
  UserSquare2,
  History,
  ListVideo,
  Clock,
  ThumbsUp,
  VideoIcon,
  Download,
  GraduationCap,
  ChevronRight,
  Search,
  Music,
  Clapperboard,
  Radio,
  Gamepad2,
  Newspaper,
  Trophy,
  Podcast,
  Lightbulb,
  Home,
  TvMinimalPlay,
} from "lucide-react";

import pfp from "@/assets/images/profile.jpg";

export default function Sidebar() {
  const dashboardSections = [
    [
      { title: "Home", path: "#", icon: Home },
      { title: "Shorts", path: "#", icon: TvMinimalPlay },
    ],

    [
      { title: "Subscriptons", path: "#", icon: false, specialItem: true },
      { title: "ProgramingWithMani", path: "#", icon: false, profile: pfp },
      { title: "MehdiGamer", path: "#", icon: false, profile: pfp },
      { title: "MrBeast", path: "#", icon: false, profile: pfp },
      { title: "markplier", path: "#", icon: false, profile: pfp },
      { title: "PewDiePie", path: "#", icon: false, profile: pfp },
      { title: "BroCode", path: "#", icon: false, profile: pfp },
    ],

    [
      { title: "Explore", path: "#", icon: false, specialItem: true },
      { title: "Music", path: "#", icon: Music },
      { title: "Movie & TV", path: "#", icon: Clapperboard },
      { title: "Live", path: "#", icon: Radio },
      { title: "Gaming", path: "#", icon: Gamepad2 },
      { title: "News", path: "#", icon: Newspaper },
      { title: "Sport", path: "#", icon: Trophy },
      { title: "Learning", path: "#", icon: Lightbulb },
      { title: "Podcasts", path: "#", icon: Podcast },
    ],
  ];

  return (
    <div className="h-full">
      <div className="grid">
        {dashboardSections.map((section, sectionIndex) => {
          return (
            <div key={sectionIndex} className="border-t px-2 py-5 h-fit">
              {section.map((link) => {
                const Icon = link.icon;
                const profile = link.profile;

                return (
                  <div key={link.title}>
                    {link.specialItem ? (
                      <div className="flex font-bold items-center cursor-pointer gap-2 my-2">
                        {link.title}
                        {!Icon ? "" : <Icon />}
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 py-3 cursor-pointer px-2 rounded-lg hover:bg-[#353333]">
                        {!profile ? (
                          ""
                        ) : (
                          <Image
                            src={profile}
                            alt="profile"
                            width={40}
                            height={40}
                            className="rounded-full bg-amber-600"></Image>
                        )}
                        {!Icon ? "" : <Icon />}
                        <span className={` ${!profile ? "" : "text-xs"}`}>
                          {link.title}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
