import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type StorisCardProps = {
  image: StaticImageData;
  title: string;
  href?: string;
};

export default function StorisCard({
  image,
  title,
  href = "#",
}: StorisCardProps) {
  return (
    <div className="py-5.5 px-4 border-[1.5px] border-[#D4D4D4]">
      <Link
        href={href}
        className="flex flex-col gap-2 items-center justify-center"
      >
        <span className="w-23 h-23 border-2 border-red rounded-full p-1 bg-white flex items-center justify-center overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={92}
            height={92}
            className="w-full h-full object-cover rounded-full"
          />
        </span>
        <p className="text-xs leading-4.5 font-medium text-[#171717] text-center">
          {title}
        </p>
      </Link>
    </div>

  );
}
