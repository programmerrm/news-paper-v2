import { formatBanglaTimeAgo } from "@/utils/formatBanglaTimeAgo";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

type LedNewsProps = {
  image: StaticImageData;
  title: ReactNode;
  headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  content?: string;
  time?: string;
  href?: string;
  imageWidth?: number;
  imageHeight?: number;
  contentMt?: string;
  timeMt?: string;
  gap?: string;
};

export default function LedNews({
  image,
  title,
  headingLevel = "h4",
  content,
  time,
  href = "#",
  imageWidth = 503,
  imageHeight = 377,
  contentMt = "12",
  timeMt = "16",
  gap = "gap-6",
}: LedNewsProps) {
  const HeadingTag = headingLevel;

  return (
    <div className={`flex flex-col ${gap}`}>
      {/* Image */}
      <Link href={href} className="overflow-hidden">
        <Image
          src={image}
          alt={typeof title === "string" ? title : "news image"}
          width={imageWidth}
          height={imageHeight}
          className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
          priority
        />
      </Link>

      {/* Content */}
      <div>
        <Link href={href}>
          <HeadingTag className="transition-all duration-300 hover:text-blue-600!">
            {title}
          </HeadingTag>

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
