// components/ShareIcons.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ArrowTop from "../../assets/icon/arrow-top.svg";
import Google from "../../assets/icon/google-image.svg";
import plusBtn from "../../assets/icon/plus.svg";
import minusBtn from "../../assets/icon/minus.svg";

// WhatsApp SVG
export const WhatsAppIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 176 176">
    <circle cx="88" cy="88" r="88" fill="#29a71a" />
    <path
      fill="#fff"
      d="M126.8 49.2a54.57 54.57 0 0 0-87.42 63.13l-5.79 28.11a2.08 2.08 0 0 0 .33 1.63 2.11 2.11 0 0 0 2.24.87l27.55-6.53A54.56 54.56 0 0 0 126.8 49.2zm-8.59 68.56a42.74 42.74 0 0 1-49.22 8l-3.84-1.9-16.89 4 .05-.21 3.5-17-1.88-3.71a42.72 42.72 0 0 1 7.86-49.59 42.73 42.73 0 0 1 60.42 0 2.28 2.28 0 0 0 .22.22 42.72 42.72 0 0 1-.22 60.19z"
    />
    <path
      fill="#fff"
      d="M116.71 105.29c-2.07 3.26-5.34 7.25-9.45 8.24-7.2 1.74-18.25.06-32-12.76l-.17-.15C63 89.41 59.86 80.08 60.62 72.68c.42-4.2 3.92-8 6.87-10.48a3.93 3.93 0 0 1 6.15 1.41l4.45 10a3.91 3.91 0 0 1-.49 4l-2.25 2.92a3.87 3.87 0 0 0-.35 4.32c1.26 2.21 4.28 5.46 7.63 8.47 3.76 3.4 7.93 6.51 10.57 7.57a3.82 3.82 0 0 0 4.19-.88l2.61-2.63a4 4 0 0 1 3.9-1l10.57 3a4 4 0 0 1 2.24 5.91z"
    />
  </svg>
);

const socialLinks = [
  {
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 35 35">
        <path
          fill="#1877f2"
          fillRule="evenodd"
          d="M35 17.5C35 7.836 27.164 0 17.5 0S0 7.836 0 17.5c0 8.734 6.398 15.974 14.766 17.288V22.56H10.32V17.5h4.445v-3.855c0-4.386 2.613-6.81 6.61-6.81 1.915 0 3.918.342 3.918.342v4.307h-2.208c-2.173 0-2.852 1.349-2.852 2.735V17.5h4.853l-.775 5.06h-4.078v12.23C28.602 33.477 35 26.237 35 17.5"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40">
        <rect width="40" height="40" fill="#000" rx="20" />
        <path
          fill="#fff"
          d="m21.618 18.66 6.328-7.41h-1.5l-5.494 6.434-4.39-6.434H11.5l6.637 9.73-6.637 7.77H13l5.802-6.795 4.637 6.795H28.5z"
        />
      </svg>
    ),
  },
  {
    href: "#",
    icon: WhatsAppIcon,
  },
  {
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40">
        <rect width="40" height="40" fill="#fde3e4" rx="20" />
        <path fill="#a71e22" d="M29.5 19.467 22.111 12v4.267C14.722 17.333 11.556 22.667 10.5 28c2.639-3.733 6.333-5.44 11.611-5.44v4.373z" />
      </svg>
    ),
  },
];

type ShareIconsProps = {
  showZoomButtons?: boolean;
};

export default function ShareIcons({ showZoomButtons = true }: ShareIconsProps) {
  const [showIcons, setShowIcons] = useState(false);
  return (
    <div className="bg-[#F5F5F5] w-full px-3 mb-3">
      <div className="divide-y-2 divide-[#E5E5E5]">
        {/* Share button */}
        <div className="flex justify-center py-3 sm:py-6">
          <button
            onClick={() => setShowIcons(!showIcons)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <span className="text-sm font-medium">Share</span>

            <span
              className={`inline-flex transform transition-transform duration-300 ${showIcons ? "rotate-90" : "rotate-0"
                }`}
            >
              <Image
                src={ArrowTop}
                alt="share"
                width={12}
                height={12}
              />
            </span>
          </button>
        </div>

        {/* Social icons */}
        {showIcons && (
          <div className=" flex flex-row sm:flex-col sm:divide-y-2 divide-[#E5E5E5] gap-2">
            <div className="flex flex-row sm:flex-col items-center gap-2 sm:gap-3 py-3 sm:py-6">
              {socialLinks.map((item, index) => (
                <Link key={index} href={item.href}>
                  <span className="flex items-center justify-center w-7 sm:w-10 h-7 sm:h-10 rounded-full hover:bg-gray-200 transition">
                    {item.icon}
                  </span>
                </Link>
              ))}
            </div>
            <div className="py-3 sm:py-6 flex flex-row sm:flex-col items-center justify-center gap-2">
              <Link href="#">
                <span className="flex items-center justify-center w-7 sm:w-10 h-7 sm:h-10 rounded-full transition-all duration-300 hover:bg-gray-200">
                  <Image
                    width={40}
                    height={40}
                    src={Google}
                    alt="Google"
                  />
                </span>
              </Link>
            </div>
            {showZoomButtons && (
              <div className="py-3 sm:py-6 flex flex-row sm:flex-col items-center justify-center gap-2 sm:gap-3">
                <button type="button" className="cursor-pointer flex items-center justify-center">
                  <span className="w-full max-w-7 sm:max-w-10 inline-block">
                    <Image
                      src={plusBtn}
                      alt="plusBtn"
                      width={40}
                      height={40}
                    />
                  </span>
                </button>
                <button type="button" className="cursor-pointer flex items-center justify-center">
                  <span className="w-full max-w-7 sm:max-w-10 inline-block">
                    <Image
                      src={minusBtn}
                      alt="plusBtn"
                      width={40}
                      height={40}
                    />
                  </span>
                </button>
              </div>
            )}
          </div>

        )}
      </div>
    </div>
  );
}
