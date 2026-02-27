import { NewsItemProps } from "@/types/NewsItemProps";
import Image from "next/image";
import VideoPage from "../video/VideoPage";
import VideoPlayer from "../video/VideoPage";

export default function NewsItem({
  image,
  title,
  content,
  time,
  href = "#",
  imageWidth = 104,
  imageHeight = 78,
  titleMb = 4,
  isLive = false,
  timeMt = 4,
  imageWrap,
  titleFontWeight = 600,
}: NewsItemProps) {
  return (
    <div className="flex gap-3 py-5 first:pt-0 last:pb-0">
      {/* Image */}
      {image && (
        <div
          className={`block ${imageWrap}`}
        >
         <VideoPlayer
            src="/video/jodinat.mp4"
            poster="/video/Image.png"
            controls={true}
            muted
          />
        </div>
      )}

      {/* Content */}
      <div className="flex-1">
        {title && (
          <h5
             style={{
              marginBottom: `${titleMb}px`,
              fontWeight: titleFontWeight, 
            }}
          >
            {isLive && (
              <span className="inline-flex items-center gap-2">
                <span className="relative inline-flex items-center justify-center">
                  <span className="absolute inline-flex h-3.5 w-3.5 rounded-full bg-red-500 opacity-30 animate-ping"></span>
                  <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-red-500"></span>
                </span>
                <span className="text-sm sm:text-base font-semibold text-[#F50A0A] mr-1 -mb-1.5">
                  লাইভ:
                </span>
              </span>
            )}

            <a href={href} className="transition-all hover:text-blue">
              {title}
            </a>
          </h5>
        )}

        {content && (
          <a href={href} className="text-xs sm:text-sm text-body">
            {content}
          </a>
        )}

        {time && (
          <span
            className="text-xs sm:text-[13px] text-black/50 block"
            style={{ marginTop: `${timeMt}px` }}
          >
            {time}
          </span>
        )}
      </div>
    </div>
  );
}
