import { NewsItemProps } from "@/types/NewsItemProps";
import Image from "next/image";
import Link from "next/link";
import PlayIcon from "../../assets/icon/play-icon.svg"
import { formatBanglaTimeAgo } from "@/utils/formatBanglaTimeAgo";

export default function SingleNewsItem({
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
  showPlayButton = false,
  SingleimageWrap
}: NewsItemProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 md:gap-8 py-3 md:py-5 first:pt-0 last:pb-0">
      {/* Image */}
      {image && (
        <Link
          href={href}
          className={`block overflow-hidden ${SingleimageWrap} md:max-w-full`}
        >
          <span className="relative">
            <Image
                src={image}
                alt={title || "News image"}
                width={imageWidth}
                height={imageHeight}
                className="object-cover transition-transform duration-500 hover:scale-105"
            />
            {showPlayButton && (
                <button
                    type="submit"
                    className="absolute bottom-3 md:bottom-6 left-3 md:left-6 max-w-7 md:max-w-10 cursor-pointer"
                >
                    <Image
                    src={PlayIcon}
                    alt="play"
                    />
                </button>
                )}
          </span>
        </Link>
      )}

      {/* Content */}
      <div className="flex-1">
        {title && (
          <h4
            style={{ marginBottom: `${titleMb}px` }}
          >
            {isLive && (
              <span className="inline-flex items-center gap-2">
                <span className="relative inline-flex items-center justify-center">
                  <span className="absolute inline-flex h-3.5 w-3.5 rounded-full bg-red-500 opacity-30 animate-ping"></span>
                  <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-red-500"></span>
                </span>
                <span className="text-lg sm:text-xl font-semibold text-[#F50A0A] mr-1 -mb-1.5">
                  লাইভ:
                </span>
              </span>
            )}

            <a href={href} className="transition-all hover:text-blue">
              {title}
            </a>
          </h4>
        )}

        {content && (
          <a href={href} className="text-sm sm:text-base leading-6.5 text-body">
            {content}
          </a>
        )}

        {time && (
          <span
            className="text-xs sm:text-sm leading-6 text-gray block"
            style={{ marginTop: `${timeMt}px` }}
          >
            {formatBanglaTimeAgo(time)}
          </span>
        )}
      </div>
    </div>
  );
}
