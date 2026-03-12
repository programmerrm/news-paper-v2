import { LedNewsProps } from "@/types/LedNewsProps";
import { formatBanglaTimeAgo } from "@/utils/formatBanglaTimeAgo";
import Image from "next/image";
import Link from "next/link";

export default function NationalNews({
  image,
  title,
  content,
  time,
  href = "#",
  imageWidth = 503,
  imageHeight = 377,
  contentMt = 12,
  timeMt = "16",
  imageWrap
}: LedNewsProps) {
  return (
    <div className="flex flex-col gap-3">
      {/* Image */}
      <Link href={href} className={`block overflow-hidden group ${imageWrap} md:max-w-full`}>
        <Image
          src={image}
          alt={title}
          width={imageWidth}
          height={imageHeight}
          className="transition-transform duration-500 group-hover:scale-105"
          priority
        />
      </Link>

      {/* Content */}
      <div>
        <Link href={href}>
          <h5 className="font-semibold leading-6 sm:leading-7 transition-all hover:text-blue-600!">
            {title}
          </h5>

          {content && (
            <p
              className="text-xs sm:text-sm sm:leading-5.5"
              style={{ marginTop: `${contentMt}px` }}
            >
              {content}
            </p>
          )}
        </Link>

        {time && (
          <span
            className="text-xs leading-3.75 text-gray inline-block"
            style={{ marginTop: `${timeMt}px` }}
          >
            {formatBanglaTimeAgo(time)}
          </span>
        )}
      </div>
    </div>
  );
}
