"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Hamburger from "./hamburger";
import userIcon from "../../assets/logo/user.svg";
import globeIcon from "../../assets/logo/globe.svg";
import searchIcon from "../../assets/logo/search.svg";
import Cookies from "js-cookie";

export default function Menu({ categories }: any) {
    const [isSticky, setIsSticky] = useState(false);
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const userCookie = Cookies.get("user");
        if (userCookie) {
            setUser(JSON.parse(userCookie));
        }
    }, []);

    const topMenuCategories = categories.filter(
        (item: any) => item.top_menu_status === 1
    );

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 100);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Set default Google Translate cookie to Bangla
    useEffect(() => {
        document.cookie = "googtrans=/en/bn;path=/";
        document.cookie = "googtrans=/en/bn;domain=" + window.location.hostname + ";path=/";

        const addScript = () => {
            if (document.getElementById("google-translate-script")) return;

            const script = document.createElement("script");
            script.id = "google-translate-script";
            script.src =
                "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
            script.async = true;
            document.body.appendChild(script);

            (window as any).googleTranslateElementInit = () => {
                new (window as any).google.translate.TranslateElement(
                    {
                        pageLanguage: "en",
                        includedLanguages: "bn,en",
                        layout:
                            (window as any).google.translate.TranslateElement
                                .InlineLayout.SIMPLE,
                    },
                    "google_translate_element"
                );
            };
        };
        addScript();
    }, []);

    return (
        <div
            className={`
        bg-red text-white w-full z-50
        transition-all duration-300 ease-in-out
        ${isSticky ? "fixed top-10 shadow-md" : "relative"}
      `}
        >
            <div className="container flex items-center">
                <Hamburger />

                <nav className="flex-1 border-l border-gray-dark last:border-r py-3 lg:py-4 pl-4 lg:pl-6 overflow-x-scroll scrollbar-hide">
                    <ul className="inline-flex gap-3 lg:gap-6.5 min-w-150 lg:min-w-170">
                        <li>
                            <Link href={'/'} className="text-sm leading-5.5">
                                হোম
                            </Link>
                        </li>
                        <li>
                            <Link href={'/latest/news'} className="text-sm leading-5.5">
                                সর্বশেষ
                            </Link>
                        </li>
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

                <div className="flex flex-row flex-wrap items-center" style={{ padding: "10px" }}>
                    <div>
                        <Image src={globeIcon} alt={"globe icon"} width={24} height={24} />
                    </div>
                    <div id="google_translate_element"></div>
                </div>

                <Link
                    className="text-sm leading-4.5 flex items-center border-l border-gray-dark py-3 lg:py-4 px-3 gap-2"
                    href={"/search"}
                >
                    <div>
                        <Image src={searchIcon} alt={"search icon"} width={24} height={24} />
                    </div>
                    <span className="text-sm leading-4.5 font-inter -tracking-[1%] hidden sm:block">
                        সার্চ করুন
                    </span>
                </Link>

                <Link
                    className="text-sm leading-4.5 flex items-center border-l border-gray-dark py-3 lg:py-4 px-3 gap-2"
                    href={user ? "/user/profile" : "/user/login"}
                >
                    <div>
                        <Image src={userIcon} alt={"user icon"} width={24} height={24} />
                    </div>
                    <span className="hidden sm:block">{user ? user.name : "লগইন"}</span>
                </Link>
            </div>
        </div>
    );
}