"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import ArrowTop from "../../assets/icon/arrow-top.svg";
import Google from "../../assets/icon/google-image.svg";
import plusBtn from "../../assets/icon/plus.svg";
import minusBtn from "../../assets/icon/minus.svg";

// WhatsApp SVG
const WhatsAppIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 176 176">
    <circle cx="88" cy="88" r="88" fill="#29a71a" />
    <path fill="#fff" d="M126.8 49.2a54.57 54.57 0 0 0-87.42 63.13l-5.79 28.11a2.08 2.08 0 0 0 .33 1.63 2.11 2.11 0 0 0 2.24.87l27.55-6.53A54.56 54.56 0 0 0 126.8 49.2z" />
    <path fill="#fff" d="M116.71 105.29c-2.07 3.26-5.34 7.25-9.45 8.24-7.2 1.74-18.25.06-32-12.76l-.17-.15C63 89.41 59.86 80.08 60.62 72.68c.42-4.2 3.92-8 6.87-10.48z" />
  </svg>
);

type ShareIconsProps = {
  showZoomButtons?: boolean;
};

export default function ShareIcons({ showZoomButtons = true }: ShareIconsProps) {
  const [showIcons, setShowIcons] = useState(false);
  const [zoom, setZoom] = useState(1);

  const pathname = usePathname();
  const [fullUrl, setFullUrl] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    const url = `${process.env.NEXT_PUBLIC_FRONTEND_URL}${pathname}`;
    setFullUrl(url);
    setTitle(document.title);
  }, [pathname]);

  const socialLinks = [
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 35 35">
          <path fill="#1877f2" d="M35 17.5C35 7.836 27.164 0 17.5 0S0 7.836 0 17.5c0 8.734 6.398 15.974 14.766 17.288V22.56H10.32V17.5h4.445v-3.855c0-4.386 2.613-6.81 6.61-6.81 1.915 0 3.918.342 3.918.342v4.307h-2.208c-2.173 0-2.852 1.349-2.852 2.735V17.5h4.853l-.775 5.06h-4.078v12.23C28.602 33.477 35 26.237 35 17.5" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}&text=${encodeURIComponent(title)}`,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
          <rect width="40" height="40" fill="#000" rx="20" />
          <path fill="#fff" d="m21.6 18.6 6.3-7.4h-1.5l-5.5 6.4-4.4-6.4H11.5l6.6 9.7-6.6 7.8H13l5.8-6.8 4.6 6.8H28.5z" />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      href: `https://api.whatsapp.com/send?text=${encodeURIComponent(title + " " + fullUrl)}`,
      icon: WhatsAppIcon,
    },
    {
      name: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
          <rect width="40" height="40" fill="#0A66C2" rx="20" />
          <path fill="#fff" d="M12 16h4v12h-4zm2-6a2 2 0 110 4 2 2 0 010-4zm6 6h3.6v1.6h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6v6.4h-4v-5.7c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V28h-4z" />
        </svg>
      ),
    },
  ];

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.1, 3));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.1, 0.5));

  return (
    <div className="bg-[#F5F5F5] w-full px-3 mb-3">
      <div className="divide-y-2 divide-[#E5E5E5]">

        {/* Share Button */}
        <div className="flex justify-center py-3 sm:py-6">
          <button
            onClick={() => setShowIcons(!showIcons)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <span className="text-sm font-medium">Share</span>
            <span className={`transform ${showIcons ? "rotate-90" : ""}`}>
              <Image src={ArrowTop} alt="share" width={12} height={12} />
            </span>
          </button>
        </div>

        {/* Social Icons */}
        {showIcons && (
          <div
            className="flex flex-col items-center"
            style={{ transform: `scale(${zoom})` }}
          >
            <div className="flex flex-row sm:flex-col gap-3 py-4">
              {socialLinks.map((item, index) => (
                <Link key={index} href={item.href} target="_blank">
                  <span className="w-10 h-10 flex items-center justify-center hover:bg-gray-200 rounded-full">
                    {item.icon}
                  </span>
                </Link>
              ))}
            </div>

            {/* Google Icon */}
            <div className="py-3">
              <Link href="#">
                <Image src={Google} alt="Google" width={40} height={40} />
              </Link>
            </div>

            {/* Zoom Buttons */}
            {showZoomButtons && (
              <div className="flex gap-2 py-3">
                <button onClick={handleZoomIn}>
                  <Image src={plusBtn} alt="Zoom In" width={40} height={40} />
                </button>
                <button onClick={handleZoomOut}>
                  <Image src={minusBtn} alt="Zoom Out" width={40} height={40} />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}