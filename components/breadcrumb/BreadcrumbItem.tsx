import Image from "next/image";
import BreadCrumbIcon from "../../assets/icon/arrow-right.png"

interface BreadcrumbItemProps {
  text: string;
  textClassName?: string;
}

export default function BreadcrumbItem({
  text,
  textClassName = "text-red",
}: BreadcrumbItemProps) {
  return (
    <div className="flex items-center gap-4">
      <div>
        <Image
            src={BreadCrumbIcon}
            alt="icon"
            width={9}
            height={16}
        />
      </div>
      <h2 className={textClassName}>{text}</h2>
    </div>
  );
}
