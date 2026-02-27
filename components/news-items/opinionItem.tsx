import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import UserIcon from "../../assets/icon/user-icon.svg";
import React from "react";

export interface NewsItemProps {
  image?: string | StaticImageData;
  title?: string;
  content?: string;
  time?: string;
  href?: string;

  imageWidth?: number;
  imageHeight?: number;

  iconWidth?: number;
  iconHeight?: number;
  iconPositionClass?: string;

  headingTag?: React.ElementType;
  wrapperClass?: string;
  imageWrap?: string;

  titleMb?: number;
  timeMt?: number;
  titleFontWeight?: number;
  isLive?: boolean;
}

export default function OpinionItem({
  image,
  title,
  content,
  time,
  href = "#",
  imageWidth = 104,
  imageHeight = 78,
  titleMb = 4,
  timeMt = 4,
  titleFontWeight = 600,
  isLive = false,
  imageWrap = "w-full max-w-[104px]",
  wrapperClass = "flex gap-3 py-5 first:pt-0 last:pb-0",
  headingTag: HeadingTag = "h5",
  iconPositionClass,
  iconWidth,
  iconHeight,
}: NewsItemProps) {
  return (
    <div className={wrapperClass}>
      {/* Image */}
      {image && (
        <Link href={href} className={`block overflow-hidden ${imageWrap}`}>
          <span className="relative">
            <button
              type="button"
              className={`absolute ${iconPositionClass} cursor-pointer`}
              style={{ width: iconWidth, height: iconHeight }}
            >
              <Image
                src={UserIcon}
                alt="UserIcon"
                width={iconWidth}
                height={iconHeight}
                className="object-cover w-full h-auto"
              />
            </button>

            {/* Main Image */}
            <Image
              src={image}
              alt={title || "News image"}
              width={imageWidth}
              height={imageHeight}
              className="object-cover transition-transform"
            />
          </span>
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

            <a href={href} className="transition-all hover:text-blue">
              {title}
            </a>
          </HeadingTag>
        )}

        {content && (
          <Link href={href || "#"} className="text-xs sm:text-sm text-body block">
            {content}
          </Link>
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
