"use client";
import Link from "next/link";
import VideoPage from "../video/VideoPage";
import VideoPlayer from "../video/VideoPage";

type VideoCardProps = {
  title: string;
  time: string;
  href?: string;

  imageWidth?: number;
  imageHeight?: number;
};

export default function VideoCard({
  title,
  time,
  href = "#",
}: VideoCardProps) {
  return (
    <div className="flex flex-col w-full md:max-w-[55.938%] bg-white border border-[#D4D4D4]">
      <div className="h-full max-h-134.25">
        <VideoPlayer
          src="/video/jodinat.mp4"
          poster="/video/Image.png"
          controls={true}
          muted
        />
      </div>

      <div className="px-3 md:px-6 pt-3 md:pt-8 bg-white">
        <Link href={href}>
          <h4 className="mb-3 sm:mb-4 transition-colors hover:text-blue">
            {title}
          </h4>
        </Link>

        <span className="text-xs leading-3.75 text-gray">
          {time}
        </span>
      </div>
    </div>
  );
}
