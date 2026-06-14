import Image from "next/image";
import VideoCard from "../components/VideoCard";

export default function Home() {
  return (
    <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  px-5 py-2 sm:mx-10">
      <VideoCard />
    </div>
  );
}
