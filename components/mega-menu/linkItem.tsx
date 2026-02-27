import Link from "next/link";
type LinkItemProps = {
  href: string;
  label: string;
  hideDot?: boolean;
};

export default function LinkItem({
  href,
  label,
  hideDot = false,
}: LinkItemProps) {
  return (
    <li
      className={`relative
        after:absolute after:content-[''] after:top-1/2 after:-right-3
        after:-translate-y-1/2 after:w-1.25 after:h-1.25
        after:bg-[#B6C3C8] after:rounded-full
        ${hideDot ? "after:hidden" : ""}`}
    >
      <Link href={href} className="text-base font-normal leading-6.5">
        {label}
      </Link>
    </li>
  );
}
