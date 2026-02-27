"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import ReelsIcon from "../../assets/icon/reels-icon.svg";
import Imagecategory from "../../assets/image/banner-image.jpg"

type WebStorisCardProps = {
    thumbnail: StaticImageData | string;
    title: string;
    time: string;
    href?: string;
};

export default function WebStorisCard({
    thumbnail,
    title,
    time,
}: WebStorisCardProps) {
    const [open, setOpen] = useState(false);

    return (
        <div>
            {/* Card */}
            <div
                onClick={() => setOpen(true)}
                className="block group cursor-pointer"
            >
                <div className="relative w-full h-132.5 overflow-hidden rounded-md">

                    {/* Thumbnail */}
                    <div className="h-full">
                        <Image
                            src={thumbnail}
                            alt={title}
                            fill
                            className="object-cover"
                        />
                    </div>


                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

                    {/* Reels Icon */}
                    <div className="absolute top-6 left-6 w-10 h-10 flex items-center justify-center">
                        <Image
                            src={ReelsIcon}
                            alt="ReelsIcon"
                            width={40}
                            height={40}
                        />
                    </div>

                    {/* Text */}
                    <div className=" absolute bottom-0 p-4">
                        <h5 className="text-white">{title}</h5>
                    </div>
                </div>
            </div>

            {/* Time */}
            <p className="text-xs mt-4 text-gray leading-3.75">{time}</p>

            {/* Popup Modal */}
            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-[30px]">

                    <div className="relative px-4 w-full sm:w-105 md:w-xl h-screen">

                        <button
                            onClick={() => setOpen(false)}
                            className="absolute top-3 right-10 sm:-right-14 bg-black/80 sm:bg-transparent w-10 sm:w-14 h-10 sm:h-14 rounded-full text-white text-base sm:text-xl leading-0 z-20 cursor-pointer flex items-center justify-center"
                        >
                            ✕
                        </button>

                        <div className="relative w-full h-full">

                            <Image
                                src={Imagecategory}
                                alt="Imagecategory"
                                fill
                                className="object-cover"
                                priority
                            />

                            {/* Gradient */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/0 to-transparent" />

                            {/* Caption */}
                            <div className="absolute bottom-0 left-0 px-3 sm:px-6 pb-6 sm:pb-8 z-10">
                                <h4 className="text-white">
                                    চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান
                                </h4>
                                <span className="text-xs leading-3.75 text-gray">
                                    ১ মিনিট আগে
                                </span>
                            </div>

                        </div>

                    </div>
                </div>
            )}
        </div>
    );
}
