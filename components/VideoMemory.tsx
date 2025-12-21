import { videoIdMap } from "@/constants";
import { YouTubeEmbed } from "@next/third-parties/google";

const VideoMemory = ({ slug }: { slug: string }) => {
  const videoId = videoIdMap[slug];
  if (!videoId) return null;
  return (
    <div className="flex justify-center pb-16">
      <YouTubeEmbed
        videoid={videoId}
        // style="width: 100%; aspect-ratio: 16 / 9; border-radius: 0.5rem;"
        // height={400}
        width={720}
        // params="controls=0"
      />
    </div>
  );
};

export default VideoMemory;
