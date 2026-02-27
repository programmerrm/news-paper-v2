"use client";

import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import CategoryItem from "./CategoryItem";
import searchBlack from "../../assets/icon/search-icon.svg";
import globeBlack from "../../assets/icon/globe-black.svg";
import userBlack from "../../assets/icon/user-black.svg";
import arrowIcon from "../../assets/icon/down-arrow.png"
import { megaMenuData } from "../../data/megaMenuData";
import SearchForm from "../form/searchForm";
import MegaButton from "../button/megaButton";
import LinkItem from "./linkItem";
import Link from "next/link";
import TopHeader from "../header/topHeader";
import { SocialLink } from "../../data/socialLinks";

export type IconLink = {
  icon: StaticImageData;
  label: string;
  href: string;
  showOn?: "all" | "md";
};

type NavItem = {
  label: string;
  href: string;
};

type TopMenuProps = {
navItems: NavItem[];
iconLinks: IconLink[];
hamburgerIcon: StaticImageData;
logo: StaticImageData;
closeIcon: StaticImageData;
socialLinks: SocialLink[];
};

const TopMenu: React.FC<TopMenuProps> = ({
  navItems,
  iconLinks,
  hamburgerIcon,
  logo,
  closeIcon,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
    
      {/* Top bar */}
      <div className="bg-red text-white sticky top-0 z-50">
        <div className="container flex items-center">

          {/* Hamburger Button */}
          <button
            className="border-l border-gray-dark last:border-r py-3 lg:py-4 px-3 cursor-pointer"
            onClick={toggleMenu}
          >
            <Image src={hamburgerIcon} alt="hamburger icon" width={24} height={24} />
          </button>

          {/* Nav Items */}
          <nav className="flex-1 border-l border-gray-dark last:border-r py-3 lg:py-4 pl-4 lg:pl-6 overflow-x-scroll scrollbar-hide">
            <ul className="inline-flex gap-3 lg:gap-6.5 min-w-150 lg:min-w-170">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="text-sm leading-5.5">{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Icon Links */}
          {iconLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`text-sm leading-4.5 flex items-center border-l border-gray-dark py-3 lg:py-4 px-3 gap-2 ${
                link.showOn === "md" ? "hidden md:flex" : ""
              }`}
            >
              <div>
                <Image src={link.icon} alt={link.label} width={24} height={24} />
              </div>
              <span className="text-sm leading-4.5 font-inter -tracking-[1%] hidden sm:block">{link.label}</span>
            </Link>
          ))}

        </div>
      </div>

      {/* Mega Menu Overlay */}
      {menuOpen && (
        <div className="bg-white absolute top-0 left-0 right-0 -bottom-px z-50 h-screen overflow-y-auto pb-10">
          <div className="border-b border-gray py-3 md:py-6">
              <div className="max-w-360 mx-auto overflow-hidden">
                  <div className="container flex items-center justify-between">
                      <Link href="/" className="w-16 sm:w-20 md:w-24 lg:w-28 shrink-0">
                        <Image src={logo} alt="Logo" width={150} height={64} className="w-full h-auto" priority />
                      </Link>
                      <button className="cursor-pointer"onClick={() => setMenuOpen(false)}>
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
                          {megaMenuData.map((category, index) => (
                              <CategoryItem
                              key={index}
                              title={category.title}
                              icon={arrowIcon}
                              items={category.items}
                              />
                          ))}
                      </div>
                      <div className="relative w-full lg:max-w-88 after:content-[''] after:absolute after:inset-0 lg:after:w-screen after:bg-[#E0EBF0] after:z-10 pl-5 pr-5 lg:pr-0 lg:pl-10 py-6 lg:py-12">
                          <div className="flex flex-col justify-between relative z-20 h-full gap-3">
                              <div>
                                  <SearchForm icon={searchBlack} />
                                  <div className="flex items-center justify-between gap-2 border-b border-[#B6C3C8] mb-6 pb-6">
                                      <MegaButton icon={globeBlack} label="English"/>
                                      <MegaButton icon={userBlack} label="Login" />
                                  </div>
                                  <div>
                                    <h4 className="mb-2 font-semibold">সোশ্যাল মিডিয়া</h4>
                                    <TopHeader />
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
};

export default TopMenu;
