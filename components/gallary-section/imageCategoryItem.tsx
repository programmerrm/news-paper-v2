import Image, { StaticImageData } from "next/image";
import ImageSquareSmall from "../../assets/icon/ImageSquareSmall.svg";
import Link from "next/link";
import React from "react";

interface GalleryNewsProps {
  image: StaticImageData | string;
  title: string;
  time?: string;
  content?: string;
  href: string;
  imageWidth?: number;
  imageHeight?: number;
  iconWidth?: number;
  iconHeight?: number;
  iconPositionClass?: string;
  headingTag?: React.ElementType;
  wrapperClass?: string;
  imageWrapperClass?: string;
}

export default function ImageCategoryItem({
  image,
  title,
  time,
  content,
  href,
  imageWidth = 340,
  imageHeight = 255,
  iconWidth = 28,
  iconHeight = 28,
  headingTag: HeadingTag = "h4",
  iconPositionClass = "bottom-4 left-4",
  wrapperClass = "flex flex-col sm:flex-row gap-4 md:gap-8 pb-4 md:pb-8",
  imageWrapperClass = " w-full max-w-85",
}: GalleryNewsProps) {
  return (
    <div className={wrapperClass}>
      
      <Link href={href} className={imageWrapperClass}>
        <span className="relative">
          <button
            type="button"
            className={`absolute ${iconPositionClass} cursor-pointer`}
            style={{ width: iconWidth, height: iconHeight }}
          >
            <Image
              src={ImageSquareSmall}
              alt="ImageSquareSmall"
              width={iconWidth}
              height={iconHeight}
              className="object-cover w-full h-auto"
            />
          </button>

          <Image
            src={image}
            alt={title}
            width={imageWidth}
            height={imageHeight}
            className="object-cover w-full h-auto"
          />
        </span>
      </Link>

      <div>
        <HeadingTag className=" transition-all hover:text-blue">
          <Link href={href}>{title}</Link>
        </HeadingTag>

        {content && (
          <p className="text-sm leading-5.5 mt-3">
            <Link href={href}>{content}</Link>
          </p>
        )}

        {time && (
          <p className="mt-4 text-gray text-sm">{time}</p>
        )}
      </div>
    </div>
  );
}
