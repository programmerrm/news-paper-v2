import { NewsItemsProps } from "@/types/NewsItemsProps";
import { formatBanglaTimeAgo } from "@/utils/formatBanglaTimeAgo";
import Image from "next/image";
import Link from "next/link";
import Description from "../text-editor/description";

export default function NewsItem({
  image,
  title,
  content,
  time,
  href = "/",
  imageWidth = 104,
  imageHeight = 78,
  titleMb = "4",
  timeMt = "4",
  titleFontWeight = "600",
  isLive = false,
  imageWrap = "w-full max-w-[104px]",
  wrapperClass = "flex gap-3 py-5 first:pt-0 last:pb-0",
  headingTag: HeadingTag = "h5",
}: NewsItemsProps) {
  return (
    <div className={wrapperClass}>
      {/* Image */}
      {image && (
        <Link href={href} className={`block overflow-hidden ${imageWrap}`}>
          <Image
            src={image}
            alt={title || "News image"}
            width={imageWidth}
            height={imageHeight}
            className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
          />
        </Link>
      )}
      <div className="flex-1">
        {title && (
          <HeadingTag
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

            <a href={href} className="transition-all hover:text-blue line-clamp-2">
              {title}
            </a>
          </HeadingTag>
        )}

        {content && (
          <p className="text-xs sm:text-sm text-body line-clamp-4">
            <Description description={content} />
          </p>
        )}

        {time && (
          <span
            className="text-xs sm:text-[13px] text-black/50 block"
            style={{ marginTop: `${timeMt}px` }}
          >
            {formatBanglaTimeAgo(time)}
          </span>
        )}
      </div>

    </div>
  );
}
