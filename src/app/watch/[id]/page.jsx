import VideoWatch from "@/components/VideoWatch.jsx";

async function getVideo(id) {
  const res = await fetch(`http://localhost:3000/api/videos/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return null; // یعنی پیدا نشده
  }

  return res.json();
}

export default async function WatchPage({ params }) {
  const video = await getVideo(params.id);

  // 🚨 اگر ویدیو نبود
  if (!video) {
    return (
      <div className="text-white p-10 text-center">
        <h1 className="text-2xl font-bold">Video not found</h1>
      </div>
    );
  }

  // ✅ اگر ویدیو بود
  return (
    <div className="px-10 py-7">
      <VideoWatch
        thumb={video.thumb}
        profile={video.profile}
        title={video.title}
        username={video.username}
        totalView={video.totalView}
        dateVideo={video.dateVideo}
        videoUrl={video.videoUrl}
        Description={video.Description}
        likes={video.likes}
        dislikes={video.dislikes}
      />
    </div>
  );
}
