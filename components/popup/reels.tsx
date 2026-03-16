"use client";

import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { formatBanglaTimeAgo } from "@/utils/formatBanglaTimeAgo";

export default function Reels({ open, setOpen, news }: any) {
    if (!news) return null;
    const { post_thumbnail, post_title, post_published_at } = news;
    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-[30px] transition-all duration-500 ease-in-out ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}>
            <div className={`relative px-4 w-full sm:w-105 md:w-xl h-screen transform transition-all duration-500 ease-in-out ${open ? "scale-100 translate-y-0" : "scale-95 translate-y-5"}`}>
                <button className="absolute top-3 right-10 sm:-right-14 bg-black/80 sm:bg-transparent w-10 sm:w-14 h-10 sm:h-14 rounded-full text-white text-base sm:text-xl z-20 cursor-pointer flex items-center justify-center" onClick={() => setOpen(false)}>
                    <IoClose />
                </button>
                <div className="relative w-full h-full">
                    <Image
                        src={post_thumbnail}
                        alt="Imagecategory"
                        fill
                        priority
                        className="object-cover"
                        
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/0 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 px-3 sm:px-6 pb-6 sm:pb-8 z-10">
                        <h4 className="text-white">
                            {post_title}
                        </h4>
                        <span className="text-xs text-gray">
                            {formatBanglaTimeAgo(post_published_at)}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
