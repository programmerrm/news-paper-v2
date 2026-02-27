import Image, { StaticImageData } from "next/image";
import videoIcon from "../../assets/icon/play-icon.svg";
import Link from "next/link";
import VideoPlayer from "../video/VideoPage";

type VideoNewsItemProps = {
  image: StaticImageData;
  title: string;
  time?: string;
  href?: string;
};

export default function VideoNewsItem({
  image,
  title,
  time = "কিছুক্ষণ আগে",
  href = "#",
}: VideoNewsItemProps) {
  return (
    <div className="p-3 md:p-4 bg-body flex gap-4">
      <div className=" w-full max-w-41">
        <VideoPlayer
          src="/video/jodinat.mp4"
          poster="/video/Image.png"
          controls={true}
          muted
        />
      </div>
      <div>
        <Link href={href}>
          <h6 className="text-white! text-base leading-6 mb-2 lg:mb-6 hover:text-blue! transition-colors">
            {title}
          </h6>
        </Link>

        {time && (
          <span className="text-xs leading-3.75 text-gray">{time}</span>
        )}
      </div>
    </div>
  );
}
