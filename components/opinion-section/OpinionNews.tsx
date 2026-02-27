import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface OpinionNewsItemProps {
  image: StaticImageData | string;
  title: string;
  author: string;
  imageWidth: number;
  imageHeight: number;
  href: string;
}

const OpinionNewsItem = ({
  image,
  href,
  title,
  author,
  imageWidth,
  imageHeight,
}: OpinionNewsItemProps) => {
  return (
    <div className="flex items-center gap-2 border-b border-red pb-7 last:pb-0 last:border-b-0">
      <div className="w-full max-w-24 rounded-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={imageWidth}
          height={imageHeight}
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div>
        <h5 className="font-medium leading-6 transition-all hover:text-[#1877f2]">
          <Link href={href}>{title}</Link>
          </h5>
        <span className="text-xs sm:text-sm leading-5.5 text-[#525252] mt-2 inline-block">
          লেখক: {author}
        </span>
      </div>
    </div>
  );
};

export default OpinionNewsItem;