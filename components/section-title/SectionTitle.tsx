import Image from "next/image";
import arrowIcon from "../../assets/icon/right-arrow.svg"
type SectionTitleProps = {
  title: string;
  href?: string;
};

export default function SectionTitle({
  title,
  href = "#",
}: SectionTitleProps) {
  return (
        <div className="pb-6 border-b-2 border-[#A1A1A1] flex gap-3 items-center">
            <h4 className="text-xl! lg:text-2xl! font-semibold font-inter">{title}</h4>
            <span className="bg-red w-px h-4" />
            <a
                href={href}
                className="text-sm leading-6 font-medium inline-flex items-center gap-0.5 text-red"
            >
                সব খবর
                <Image src={arrowIcon} alt="right arrow" />
            </a>
        </div>
  );
}
