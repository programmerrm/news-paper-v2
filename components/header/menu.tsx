"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Hamburger from "./hamburger";
import userIcon from "../../assets/logo/user.svg";
import globeIcon from "../../assets/logo/globe.svg";
import searchIcon from "../../assets/logo/search.svg";
import { IconIcon } from "@/types/social-icon/socialIcon";

const iconLinks: IconIcon[] = [
    { icon: globeIcon, label: "Bangla", href: "#", showOn: "all" },
    { icon: searchIcon, label: "সার্চ করুন", href: "/search", showOn: "md" },
    { icon: userIcon, label: "Profile", href: "/auth/login", showOn: "md" },
];

export default function Menu({ categories }: any) {
    const topMenuCategories = categories.filter(
        (item: any) => item.top_menu_status === 1
    );

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`
        bg-red text-white w-full z-50
        transition-all duration-300 ease-in-out
        ${isSticky ? "fixed top-0 shadow-md" : "relative"}
      `}
        >
            <div className="container flex items-center">
                {/* Hamburger Button */}
                <Hamburger />
                {/* Nav Items */}
                <nav className="flex-1 border-l border-gray-dark last:border-r py-3 lg:py-4 pl-4 lg:pl-6 overflow-x-scroll scrollbar-hide">
                    <ul className="inline-flex gap-3 lg:gap-6.5 min-w-150 lg:min-w-170">
                        {topMenuCategories.map((item: any) => (
                            <li key={item.category_id}>
                                <Link
                                    href={`/${item.category_slug}`}
                                    className="text-sm leading-5.5"
                                >
                                    {item.category_name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                {/* Icon Links */}
                {iconLinks.map((link, index) => (
                    <Link
                        key={index}
                        href={link.href}
                        className={`text-sm leading-4.5 flex items-center border-l border-gray-dark py-3 lg:py-4 px-3 gap-2 ${link.showOn === "md" ? "hidden md:flex" : ""
                            }`}
                    >
                        <div>
                            <Image src={link.icon} alt={link.label} width={24} height={24} />
                        </div>
                        <span className="text-sm leading-4.5 font-inter -tracking-[1%] hidden sm:block">
                            {link.label}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
}