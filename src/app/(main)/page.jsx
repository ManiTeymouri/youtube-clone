import VideoCard from "@/components/VideoCard.jsx";

async function getVideos() {
  const res = await fetch("http://localhost:3000/api/videos", {
    cache: "no-store",
  });

  const data = await res.json();
  return data;
}

export default async function Home() {
  const videos = await getVideos();

  return (
    <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  px-5 py-2 sm:mx-10">
      {videos.map((video) => {
        return (
          <VideoCard
            key={video.id}
            id={video.id}
            thumb={video.thumb}
            profile={video.profile}
            username={video.username}
            totalView={video.totalView}
            dateVideo={video.dateVideo}
            title={video.title}
            videoPreview={video.videoUrl}
            videoDuration={video.videoDuration}
          />
        );
      })}
    </div>
  );
}
