import Link from "next/link";

type NavLinksProps = {
  links: { href: string; label: string }[];
};

export default function NavLinks({ links }: NavLinksProps) {
  return (
    <ul className="py-3 md:py-5.5 space-y-3 md:space-y-5">
      {links.map((link, index) => (
        <li key={index}>
          <Link
            href={link.href}
            className="text-[15px] leading-3.75 tracking-[0.15px] text-black transition-all hover:text-blue"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}