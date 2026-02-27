import TopHeader from "../header/topHeader";
import Logo from "../../assets/logo/logo.svg";
import Google from "../../assets/icon/google-image.svg"
import Link from "next/link";
import NavLinks from "./FooterLinks";
import { getFetchData } from "@/utils/getFetchData";

const socialLinks = [
    {
        href: "#",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
                <path fill="currentColor" d="M7.678 4.146V6.59H6v2.987h1.678v8.876h3.445V9.577h2.313s.216-1.432.322-2.999h-2.62V4.536c0-.305.374-.716.746-.716h1.878V.71H11.21C7.593.71 7.68 3.7 7.68 4.147" />
            </svg>
        ),
    },
    {
        href: "#",
        icon: (
            <span className="text-black transition-all duration-500 group-hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="none" viewBox="0 0 17 17">
                    <g>
                        <g>
                            <path fill="currentColor"
                                d="M13.23.787h2.576l-5.628 6.449 6.622 8.777h-5.184L7.553 10.69l-4.644 5.322H.33l6.02-6.9L0 .788h5.316l3.667 4.864zm-.906 13.68h1.428L4.536 2.252H3.005z" />
                        </g>
                    </g>
                    <defs>
                        <clipPath id="a">
                            <path fill="#fff" d="M0 0h16.8v16.8H0z" />
                        </clipPath>
                    </defs>
                </svg>
            </span>

        ),
    },
    {
        href: "#",
        icon: (
            <svg className="text-[#FF0000] transition-all duration-500 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor"
                    d="M21.594 7.203a2.5 2.5 0 0 0-1.762-1.766c-1.566-.43-7.83-.437-7.83-.437s-6.265-.007-7.832.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.52 2.52 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831M9.997 15.005l.005-6 5.207 3.005z" />
            </svg>

        ),
    },
    {
        href: "#",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
                <path fill="currentColor"
                    d="M17.566 10.976v5.903h-3.423V11.37c0-1.384-.495-2.328-1.733-2.328-.946 0-1.509.637-1.756 1.252-.09.22-.114.526-.114.834v5.75H7.116s.047-9.328 0-10.295h3.424v1.459l-.022.033h.022v-.033c.455-.7 1.267-1.701 3.085-1.701 2.252 0 3.94 1.472 3.94 4.634M3.536 1.62c-1.171 0-1.937.768-1.937 1.778 0 .988.744 1.78 1.892 1.78h.022c1.194 0 1.936-.792 1.936-1.78-.02-1.01-.742-1.778-1.914-1.778M1.801 16.88h3.422V6.584H1.802z" />
            </svg>
        ),
    },
    {
        href: "#",
        imageSrc: Google,
    },
];

const links = [
    { href: "/latest", label: "সর্বশেষ" },
    { href: "/category", label: "জাতীয়" },
    { href: "/categorybangladesh", label: "বাংলাদেশ" },
];

const links2 = [
    { href: "/category", label: "রাজনীতি" },
    { href: "/category", label: "বিশ্ব" },
    { href: "/category", label: "ইকোনমি" },
];

const links3 = [
    { href: "/category", label: "ধর্ম" },
    { href: "/category", label: "খেলা" },
    { href: "/category", label: "বিনোদন" },
];

const links4 = [
    { href: "/category", label: "মিডিয়া" },
    { href: "/archive", label: "আর্কাইভ" },
    { href: "/category", label: "টক অব দ্যা টাউন" },
];

const links5 = [
    { href: "/category", label: "ইতিহাসে’র এই দিনে" },
    { href: "/category", label: "ফিরে দেখা" },
    { href: "/category", label: "প্রবাস প্রকৃতি" },
];

const links6 = [
    { href: "/category", label: "এডিটরস মাইন্ড" },
    { href: "/category", label: "নারী শিশু" },
    { href: "/category", label: "কৃষি বাতায়ন" },
];

export default async function Footer() {
    const webinfo = await getFetchData('/webinfo');
    return (
        <footer className="pt-6 lg:pt-12 border-t border-[#E5E5E5]">
            <div className="container">
                <div className="space-y-4 md:space-y-8 divide-y divide-gray-dark">
                    <div className="pb-4 md:pb-8">
                        <TopHeader isTimeData={false} />
                    </div>
                    <div className="pb-4 md:pb-8">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 md:divide-x divide-gray-dark">
                            <div className="flex items-center justify-center text-center">
                                <NavLinks links={links} />
                            </div>
                            <div className="flex items-center justify-center text-center">
                                <NavLinks links={links2} />
                            </div>
                            <div className="flex items-center justify-center text-center">
                                <NavLinks links={links3} />
                            </div>
                            <div className="flex items-center justify-center text-center">
                                <NavLinks links={links4} />
                            </div>
                            <div className="flex items-center justify-center text-center">
                                <NavLinks links={links5} />
                            </div>
                            <div className="flex items-center justify-center text-center">
                                <NavLinks links={links6} />
                            </div>
                        </div>
                    </div>
                    <ul className="pb-4 md:pb-8 flex items-center justify-center gap-y-3 gap-x-7 lg:gap-x-14 flex-wrap">
                        <li>
                            <Link href="#" className="text-[15px] leading-3.75 tracking-[0.15px] text-black transition-all hover:text-blue">
                                আমাদের সম্পর্কে
                            </Link>
                        </li>
                        
                        <li>
                            <Link href="#" className="text-[15px] leading-3.75 tracking-[0.15px] text-black transition-all hover:text-blue">
                                যোগাযোগ
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="text-[15px] leading-3.75 tracking-[0.15px] text-black transition-all hover:text-blue">
                                বিজ্ঞাপন
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="text-[15px] leading-3.75 tracking-[0.15px] text-black transition-all hover:text-blue">
                                ট্রামস অফ সার্ভিস
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="text-[15px] leading-3.75 tracking-[0.15px] text-black transition-all hover:text-blue">
                                প্রাইভেসি পলিসি
                            </Link>
                        </li>
                    </ul>
                    <div className="pb-4 md:pb-8 flex items-center justify-center sm:justify-between gap-5 flex-wrap">
                        <p className="text-[15px] leading-3.75 tracking-[0.15px] text-black">প্রকাশকঃ মোহাম্মদ শামীম রেজা</p>
                        <span className="text-[15px] leading-3.75 tracking-[0.15px] text-black">© ২০২৫ নিউজফ্ল্যাশ ৭১ | সর্বস্বত্ব সংরক্ষিত</span>
                    </div>
                </div>
            </div>
            <div className="bg-[#E0EBF0] py-4">
                <div className="container flex items-center justify-center">
                    <span className="text-sm leading-3.5 tracking-[0.15px] text-black text-center">{webinfo?.webInfo?.copyright}</span>
                </div>
            </div>
        </footer>
    );
}