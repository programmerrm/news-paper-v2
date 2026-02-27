import Image, { StaticImageData } from "next/image";
import ImageSquareSmall from "../../assets/icon/ImageSquareSmall.svg"
import Link from "next/link";

interface GalleryNewsProps {
  image: StaticImageData | string;
  title: string;
  time: string;
  photoCount: number;
  href: string;
}

export default function GalleryNews({
  image,
  href,
  title,
  time,
  photoCount,
}: GalleryNewsProps) {
  return (
    <div>
      <div className="overflow-hidden relative">
        <div className=" absolute bottom-4 left-4">
            <Image
            src={ImageSquareSmall}
            alt="ImageSquareSmall"
            width={28}
            height={28}
            className="object-cover w-full h-auto"
            />
        </div>
        <Image
          src={image}
          alt={title}
          width={308}
          height={231}
          className="object-cover w-full h-auto "
        />
      </div>

      <span className="px-2.5 py-0.5 border border-red text-xs font-medium leading-4.5 text-red inline-block mt-4">
        {photoCount} টি ছবি
      </span>

      <h5 className="mt-2 font-semibold leading-7 transition-all hover:text-blue">
        <Link href={href || "#"}>{title}</Link>
      </h5>

      <p className="mt-2 text-gray text-sm">
        {time}
      </p>
    </div>
  );
}