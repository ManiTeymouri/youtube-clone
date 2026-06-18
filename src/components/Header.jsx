"use client";
import Image from "next/image";
import { Bell, Plus, Search, Play, Menu } from "lucide-react";
import Link from "next/link";
export default function Header() {
  return (
    <nav className="flex sticky top-0 backdrop-blur-lg bg-[#0F0F0F]/90 z-10 h-20 text-white w-full gap-2  items-center  justify-between px-5">
      <Menu />
      <Link
        href={`/`}
        className="flex place-items-center text-white font-bold text-3xl">
        <Play strokeWidth={4} className="bg-red-500 rounded-full size-10 p-2" />
        <span className="">You</span>Tube
      </Link>

      <div className="flex relative place-items-center w-1/2">
        <input
          type="text"
          className="border font-thin border-[#4b4949] h-10 rounded-full px-5 w-full"
          placeholder="Search"
        />
        <Search className="p-2 bg-[#222121] border border-[#4b4949] absolute right-0 rounded-r-full h-10 w-15" />
      </div>

      <div className="flex  place-items-end gap-8">
        <button className="flex h-9 border border-[#212121] rounded-full bg-[#222121] hover:bg-[#353333] justify-center place-items-center px-2 w-1/2 gap-1">
          <Plus size={25} strokeWidth={1.5} />
          Create
        </button>
        <Bell size={35} strokeWidth={2.5} />
        <Image
          src={"/images/profiles/profile-1.jpg"}
          alt="profile"
          width={40}
          height={40}
          className="rounded-full"></Image>
      </div>
    </nav>
  );
}
