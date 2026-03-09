"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Hamburger from "./hamburger";
import userIcon from "../../assets/logo/user.svg";
import globeIcon from "../../assets/logo/globe.svg";
import searchIcon from "../../assets/logo/search.svg";
import Cookies from "js-cookie";
import closeIcon from "../../assets/icon/close.png";
import Logo from "../../assets/logo/logo.svg";
import CategoryItem from "../mega-menu/CategoryItem";
import arrowIcon from "../../assets/icon/down-arrow.png"
import LinkItem from "../mega-menu/linkItem";
import SearchForm from "../form/searchForm";
import searchBlack from "../../assets/icon/search-icon.svg";
import globeBlack from "../../assets/icon/globe-black.svg";
import userBlack from "../../assets/icon/user-black.svg";
import MegaButton from "../button/megaButton";

export default function Menu({ categories }: any) {
    const [isSticky, setIsSticky] = useState(false);
    const [user, setUser] = useState<any>(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

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
        <>
            <div
                className={`
        bg-red text-white w-full z-50
        transition-all duration-300 ease-in-out
        ${isSticky ? "fixed top-0 shadow-md" : "relative"}
      `}
            >
                <div className="container flex items-center">
                    <Hamburger toggleMenu={toggleMenu} />

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

            {menuOpen && (
                <div className="bg-white absolute top-0 left-0 right-0 -bottom-px z-50 h-screen overflow-y-auto pb-10">

                    <div className="border-b border-gray py-3 md:py-6">
                        <div className="max-w-360 mx-auto overflow-hidden">
                            <div className="container flex items-center justify-between">
                                <Link href="/" className="w-16 sm:w-20 md:w-24 lg:w-28 shrink-0">
                                    <Image src={Logo} alt="Logo" width={150} height={64} className="w-full h-auto" priority />
                                </Link>
                                <button className="cursor-pointer" onClick={() => setMenuOpen(false)}>
                                    <Image
                                        src={closeIcon}
                                        alt="Close Icon"
                                        width={24}
                                        height={24}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white max-w-360 mx-auto overflow-hidden">
                        <div className="container">
                            <div className="flex flex-col lg:flex-row justify-between gap-5 md:gap-10">
                                <div className="pt-3 sm:pt-6 lg:pt-12 pb-3 sm:pb-6 lg:pb-10 w-full">
                                    {topMenuCategories.map((item: any) => (
                                        <CategoryItem
                                            key={item.category_id}
                                            title={item.category_name}
                                            icon={arrowIcon}
                                            items={item.subcategory?.map((sub: any) => ({
                                                label: sub.subcategory_name,
                                                href: `/${item.category_slug}/${sub.subcategory_slug}`
                                            }))}
                                        />
                                    ))}
                                </div>
                                <div className="relative w-full lg:max-w-88 after:content-[''] after:absolute after:inset-0 lg:after:w-screen after:bg-[#E0EBF0] after:z-10 pl-5 pr-5 lg:pr-0 lg:pl-10 py-6 lg:py-12">
                                    <div className="flex flex-col justify-between relative z-20 h-full gap-3">
                                        <div>
                                            <SearchForm icon={searchBlack} />
                                            <div className="flex items-center justify-between gap-2 border-b border-[#B6C3C8] mb-6 pb-6">
                                                <MegaButton icon={globeBlack} label="English" />
                                                <MegaButton icon={userBlack} label="Login" />
                                            </div>
                                            <div>
                                                <h4 className="mb-2 font-semibold">সোশ্যাল মিডিয়া</h4>
                                                {/* <TopHeader /> */}
                                            </div>


                                        </div>
                                        <div className=" divide-y divide-[#B6C3C8] border-t border-b border-[#B6C3C8]">
                                            <ul className="py-3 lg:py-5 flex items-center flex-wrap gap-y-2 gap-x-5.25">
                                                <LinkItem href="#" label="আমাদের সম্পর্কে" />
                                                <LinkItem href="#" label="যোগাযোগ" />
                                                <LinkItem href="#" label="বিজ্ঞাপন" />
                                                <LinkItem href="#" label="ট্রামস অফ সার্ভিস" />
                                                <LinkItem href="#" label="প্রাইভেসি পলিসি" />
                                            </ul>
                                            <div className="py-3 lg:py-5">
                                                <span className="text-[15px] leading-4 tracking-[1%] text-title">© ২০২৫ নিউজফ্ল্যাশ ৭১ | সর্বস্বত্ব সংরক্ষিত</span>
                                            </div>
                                            <div className="py-3 lg:py-5">
                                                <p className="text-sm font-normal leading-5.5">নিউজফ্ল্যাশ সেভেন্টিওয়ান’র প্রকাশিত কোন সংবাদ, আলাকচিত্র কপিরাইট আইনে পূর্বানুমতি ছাড়া ব্যবহার করা যাবে না</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            )}
        </>
    );
}
