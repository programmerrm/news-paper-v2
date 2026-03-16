import Link from "next/link";
import VideoPlayer from "../video/VideoPage";
import { formatBanglaTimeAgo } from "@/utils/formatBanglaTimeAgo";

type VideoNewsItemProps = {
  viderUrl: string;
  title: string;
  time?: string;
  contenthref?: string;
};

export default function VideoCategoryNewsItem({
  viderUrl,
  title,
  time = "কিছুক্ষণ আগে",
  contenthref = "#",
}: VideoNewsItemProps) {
  return (
    <div className="p-3 md:p-4 bg-white flex gap-4 border border-[#D4D4D4]">
      {/* Thumbnail */}
      <div className="w-full max-w-41 h-full max-h-30.75">
        <VideoPlayer
          src={viderUrl}
        />
      </div>
      <div>
          <h5 className=" mb-2 lg:mb-6 hover:text-blue transition-colors">
            <Link href={contenthref}>
              {title}
            </Link>
          </h5>
        {time && (
          <span className="text-xs leading-3.75 text-gray">{formatBanglaTimeAgo(time)}</span>
        )}
      </div>
    </div>
  );
}
