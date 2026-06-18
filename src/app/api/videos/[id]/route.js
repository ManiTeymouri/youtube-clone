import videos from "@/data/videos.json";

export async function GET(req, { params }) {
  const video = videos.find((v) => String(v.id) === String(params.id));

  if (!video) {
    return Response.json({ message: "Video not found" }, { status: 404 });
  }

  return Response.json(video);
}
