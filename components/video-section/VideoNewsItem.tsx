import Link from "next/link";
import VideoPlayer from "../video/VideoPage";
import { formatBanglaTimeAgo } from "@/utils/formatBanglaTimeAgo";

type VideoNewsItemProps = {
  video_url: string;
  title: string;
  time?: string;
  href?: string;
};

export default function VideoNewsItem({
  video_url,
  title,
  time,
  href = "#",
}: VideoNewsItemProps) {
  return (
    <div className="p-3 md:p-4 bg-body flex flex-col sm:flex-row  gap-4 rounded">
      
      {/* Video */}
      <div className="w-full sm:max-w-40 shrink-0">
        <VideoPlayer src={video_url} />
      </div>

      {/* Content */}
      <div className="w-full flex flex-col justify-between">
        <Link href={href}>
          <h6 className="text-white text-base leading-6 mb-2 hover:text-blue transition-colors">
            {title}
          </h6>
        </Link>

        {time && (
          <span className="text-xs leading-4 text-gray-400">
            {formatBanglaTimeAgo(time)}
          </span>
        )}
      </div>

    </div>
  );
}