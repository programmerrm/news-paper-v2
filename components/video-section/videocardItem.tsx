"use client";

import Link from "next/link";
import VideoPage from "../video/VideoPage";
import VideoPlayer from "../video/VideoPage";

type VideoCardProps = {
  title: string;
  time: string;
  href?: string;
  content?: string;
  className?: string;
  imageWidth?: number;
  imageHeight?: number;
};

export default function VideoCardItem({
  title,
  time,
  href = "#",
  content,
  className,
}: VideoCardProps) {
  return (
    <div className={`flex flex-col bg-white ${className}`}>
      <div className="overflow-hidden w-full h-full max-w-85">
        <VideoPlayer
          src="/video/jodinat.mp4"
          poster="/video/Image.png"
          controls={true}
          muted
      />
      </div>

      <div className="pt-3 bg-white">
        <h5 className="lg:text-[17px] lg:leading-6 mb-3 transition-colors hover:text-blue">
          <Link href={href}>
            {title}
          </Link>
        </h5>
        {content && (
          <p className="text-sm leading-5.5 text-body mb-4">
            <Link href={href}>{content}</Link>
          </p>
        )}
        
        <span className="text-xs leading-3.75 text-gray">
          {time}
        </span>
      </div>
    </div>
  );
}
