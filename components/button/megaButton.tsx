import Image, { StaticImageData } from "next/image";

type MegaButtonProps = {
  icon: StaticImageData;
  label: string;
  onClick?: () => void; 
};

export default function MegaButton({
  icon,
  label,
  onClick,
}: MegaButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-1/2 border border-[#B6C3C8] px-4 py-2.75 flex items-center gap-2 cursor-pointer"
    >
      <Image
        src={icon}
        alt={`${label} icon`}
        width={24}
        height={24}
      />
      <span className="text-base text-[#171717] leading-4">
        {label}
      </span>
    </button>
  );
}
