import { formatBanglaTimeAgo } from "@/utils/formatBanglaTimeAgo";
import Image from "next/image";
import Link from "next/link";

type ReadMoreCardProps = {
  title: string;
  image: string;
  className?: string;
  href?: string;
};

export default function ReadMoreCard({
  title,
  image,
  href = "",
  className = "",
}: ReadMoreCardProps) {
  return (
    <div className={className}>
      <h5 className="text-base font-semibold text-title">আরো পড়ুন</h5>
      <div className="border border-[#D4D4D4] p-2 sm:p-4 mt-2 flex items-center gap-2 sm:gap-4">
        <div className="">
          <Image
            src={image}
            alt={title}
            width={140}
            height={105}
            className="object-cover"
          />
        </div>
        <div>
          <Link href={href} className="text-sm sm:text-[17px] font-semibold leading-6 text-title">
            {title}
          </Link>
        </div>
      </div>
    </div>
  );
}
