"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import downArrowIcon from "../../assets/icon/down-arrow.png"
import Link from "next/link";

type Item = {
  label: string;
  href: string;
};

type Props = {
  title: string;
  icon: StaticImageData;
  items?: Item[];
};

export default function CategoryItem({
  title,
  items = []
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row lg:items-center py-3 lg:py-6 border-b border-[#D4D4D4]">
      
      {/* Header */}
      <div className="flex items-center justify-between lg:block w-full lg:max-w-37.5">
        <h4>{title}</h4>

        <button
          onClick={() => setOpen(!open)}
          className="max-w-5 sm:max-w-6 lg:hidden block transition-transform"
        >
          <Image
            src={downArrowIcon}
            alt="Toggle"
            width={24}
            height={24}
            className={`${open ? "rotate-180" : ""} transition-transform`}
          />
        </button>
      </div>

      {/* List */}
      <ul
        className={`
          flex flex-col lg:flex-row
          divide-y divide-[#D4D4D4] lg:divide-y-0
          lg:items-center flex-wrap flex-1 lg:gap-5 w-full border-t border-[#D4D4D4] lg:border-t-0 mt-2 lg:mt-0
          ${open ? "block" : "hidden"}
          lg:flex
        `}
      >
        {items.map((item, index) => (
          <li key={index} className="last:pb-0">
            <Link href={item.href} className="py-2 lg:py-0 inline-block">{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
