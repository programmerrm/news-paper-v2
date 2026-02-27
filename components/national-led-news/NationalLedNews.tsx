import { formatBanglaTimeAgo } from "@/utils/formatBanglaTimeAgo";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type NationalLedNewsProps = {
  image: StaticImageData;
  title: string;
  time?: string;
  href?: string;
};

export default function NationalLedNews({
  image,
  title,
  time = "১ মিনিট আগে",
  href = "#",
}: NationalLedNewsProps) {
  return (
    <div className="w-full h-93 relative group overflow-hidden">
      <Link href={href}>
        <Image
          src={image}
          alt={title}
          width={496}
          height={372}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          priority
        />
      </Link>

      <div className="absolute left-0 right-0 bottom-0 bg-linear-to-b from-body/0 to-body p-6">
        <Link href={href}>
          <h4 className="text-white! transition-all duration-300 group-hover:text-blue-300!">
            {title}
          </h4>
        </Link>

        <span className="text-white text-xs leading-3.75 mt-2.5 inline-block">
          {formatBanglaTimeAgo(time)}
        </span>
      </div>
    </div>
  );
}
