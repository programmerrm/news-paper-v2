"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
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
import googleIcon from "../../assets/icon/google.svg";
import globeIconBlack from "../../assets/icon/globe-black.svg"
import userIconBlack from "../../assets/icon/user-black.svg"

export default function Menu({ categories, webinfo }: any) {
    const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
    const headerRef = useRef<any>(null);

    const [user, setUser] = useState<any>(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const handleScroll = (elTopOffset: any, elHeight: any) => {
        if (window.pageYOffset > (elTopOffset + elHeight)) {
            setSticky({ isSticky: true, offset: elHeight });
        } else {
            setSticky({ isSticky: false, offset: 0 });
        }
    };

    useEffect(() => {
        let header = headerRef.current.getBoundingClientRect();
        const handleScrollEvent = () => {
            handleScroll(header.top, header.height)
        }

        window.addEventListener('scroll', handleScrollEvent);

        return () => {
            window.removeEventListener('scroll', handleScrollEvent);
        };
    }, []);

    useEffect(() => {
        const userCookie = Cookies.get("user");
        if (userCookie) {
            setUser(JSON.parse(userCookie));
        }
    }, []);

    const topMenuCategories = categories?.filter(
        (item: any) => item.top_menu_status === 1
    );

    const currentYear = new Date().getFullYear();

    return (
        <>
            <div
                ref={headerRef}
                className={`bg-red text-white w-full z-50 ${sticky.isSticky ? ' sticky' : ''}`}
            >
                <div className="container flex items-center">
                    <Hamburger toggleMenu={toggleMenu} />

                    <nav className="flex-1 py-1.5 sm:py-3 lg:py-4 pl-2 sm:pl-4 lg:pl-6 border-l border-gray-dark last:border-r overflow-x-scroll scrollbar-hide">
                        <ul className="inline-flex gap-3 lg:gap-5 xl:gap-6.5 min-w-160 lg:min-w-182">
                            <li>
                                <Link href={'/'} className="text-xs sm:text-sm leading-4 sm:leading-5.5">
                                    হোম
                                </Link>
                            </li>
                            <li>
                                <Link href={'/latest/news'} className="text-xs sm:text-sm leading-4 sm:leading-5.5">
                                    সর্বশেষ
                                </Link>
                            </li>
                            {topMenuCategories.map((item: any) => (
                                <li key={item.category_id}>
                                    <Link
                                        href={`/${item.category_slug}`}
                                        className="text-xs sm:text-sm leading-4 sm:leading-5.5"
                                    >
                                        {item.category_name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>


                    {/* 1st Google Tranlate */}
                    <div className="w-9 flex items-center relative">
                        <div
                            className="cursor-pointer absolute top-1/2 -translate-y-1/2 right-2"
                        >
                            <Image src={globeIcon} alt="globe icon" width={24} height={24} />
                        </div>
                    </div>





                    <Link
                        className="text-sm leading-4.5 flex items-center border-l border-gray-dark py-2 sm:py-3 lg:py-4 px-2 sm:px-3 gap-2"
                        href={"/search"}
                    >
                        <div className="max-w-5 sm:max-w-6 max-h-5 sm:max-h-6">
                            <Image src={searchIcon} alt={"search icon"} width={24} height={24} />
                        </div>
                        <span className="text-sm leading-4.5 font-inter -tracking-[1%] hidden sm:block">
                            সার্চ করুন
                        </span>
                    </Link>

                    <Link
                        className="text-sm leading-4.5 flex items-center border-l border-gray-dark py-2 sm:py-3 lg:py-4 px-2 sm:px-3 gap-2"
                        href={user ? "/user/profile" : "/user/login"}
                    >
                        <div className="max-w-5 sm:max-w-6 max-h-5 sm:max-h-6">
                            <Image src={userIcon} alt={"user icon"} width={24} height={24} />
                        </div>
                        <span className="hidden sm:block">{user ? user.name : "লগইন"}</span>
                    </Link>
                </div>
            </div>

            {menuOpen && (
                <div className="bg-white fixed top-0 left-0 right-0 -bottom-px z-50 h-screen overflow-y-auto pb-10">

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
                                                {/* 2nd Google Tranlate */}
                                                <div
                                                    className="w-1/5 border border-[#B6C3C8] px-4 py-2.75 flex items-center gap-2 cursor-pointer bg-white"
                                                >
                                                    <span className="max-w-5 sm:max-w-6">
                                                        <Image
                                                            src={globeIconBlack}
                                                            alt="globe icon"
                                                            width={24}
                                                            height={24}
                                                        />
                                                    </span>
                                                </div>


                                                <Link
                                                    className="w-2/3 border border-[#B6C3C8] px-4 py-2.75 flex items-center gap-2 cursor-pointer bg-white"
                                                    href={user ? "/user/profile" : "/user/login"}
                                                >
                                                    <span className="max-w-5 sm:max-w-6">
                                                        <Image
                                                            src={userIconBlack}
                                                            alt={"user icon"}
                                                            width={24}
                                                            height={24}
                                                        />
                                                    </span>
                                                    <span className="text-sm sm:text-base text-[#171717] leading-4">
                                                        {user ? user.name : "লগইন"}
                                                    </span>
                                                </Link>

                                            </div>

                                            <div>
                                                <h4 className="text-base sm:text-xl mb-2 font-semibold">সোশ্যাল মিডিয়া</h4>
                                                {/* <TopHeader /> */}
                                                <div className="flex items-center gap-3">
                                                    <Link target="_blank" href={webinfo?.webInfo?.facebook || ""} className="text-blue group w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-gray-100 hover:bg-red-600 flex items-center justify-center transition">
                                                        <span className="text-[18px] group-hover:text-white transition">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                                                                <path d="M7.678 4.146V6.59H6v2.987h1.678v8.876h3.445V9.577h2.313s.216-1.432.322-2.999h-2.62V4.536c0-.305.374-.716.746-.716h1.878V.71H11.21C7.593.71 7.68 3.7 7.68 4.147" />
                                                            </svg>
                                                        </span>
                                                    </Link>
                                                    <Link target="_blank" href={webinfo?.webInfo?.twiter || ""} className="text-[#000000] group w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-gray-100 hover:bg-red-600 flex items-center justify-center transition">
                                                        <span className="text-[18px] group-hover:text-white transition">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="currentColor">
                                                                <path d="M13.23.787h2.576l-5.628 6.449 6.622 8.777h-5.184L7.553 10.69l-4.644 5.322H.33l6.02-6.9L0 .788h5.316l3.667 4.864zm-.906 13.68h1.428L4.536 2.252H3.005z" />
                                                            </svg>
                                                        </span>
                                                    </Link>
                                                    <Link target="_blank" href={webinfo?.webInfo?.youtube || ""} className="text-blue group w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-gray-100 hover:bg-red-600 flex items-center justify-center transition">
                                                        <span className="text-[18px] group-hover:text-white transition">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-red-600 group-hover:text-white transition">
                                                                <path d="M21.594 7.203a2.5 2.5 0 0 0-1.762-1.766c-1.566-.43-7.83-.437-7.83-.437s-6.265-.007-7.832.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.52 2.52 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831M9.997 15.005l.005-6 5.207 3.005z" />
                                                            </svg>
                                                        </span>
                                                    </Link>
                                                    <Link target="_blank" href={webinfo?.webInfo?.linkdine || ""} className="text-blue group w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-gray-100 hover:bg-red-600 flex items-center justify-center transition">
                                                        <span className="text-[18px] group-hover:text-white transition">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                                                                <path d="M17.566 10.976v5.903h-3.423V11.37c0-1.384-.495-2.328-1.733-2.328-.946 0-1.509.637-1.756 1.252-.09.22-.114.526-.114.834v5.75H7.116s.047-9.328 0-10.295h3.424v1.459c.455-.7 1.267-1.701 3.085-1.701 2.252 0 3.94 1.472 3.94 4.634M3.536 1.62c-1.171 0-1.937.768-1.937 1.778 0 .988.744 1.78 1.892 1.78h.022c1.194 0 1.936-.792 1.936-1.78-.02-1.01-.742-1.778-1.914-1.778M1.801 16.88h3.422V6.584H1.802z" />
                                                            </svg>
                                                        </span>
                                                    </Link>
                                                    <Link target="_blank" href={webinfo?.webInfo?.google || ""} className="text-blue group w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-gray-100 hover:bg-red-600 flex items-center justify-center transition">
                                                        <Image
                                                            src={googleIcon}
                                                            alt="googleicon"
                                                        />
                                                    </Link>
                                                </div>
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
                                                <span className="text-sm sm:text-[15px] leading-4 tracking-[1%] text-title">© {currentYear}  নিউজফ্ল্যাশ ৭১ | সর্বস্বত্ব সংরক্ষিত</span>
                                            </div>
                                            <div className="py-3 lg:py-5">
                                                <p className="text-sm font-normal leading-5.5">{webinfo?.webInfo?.copyright}</p>
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
