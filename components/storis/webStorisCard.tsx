"use client";

import Image from "next/image";
import { useState } from "react";
import Reels from "../popup/reels";
import ReelsIcon from "../../assets/icon/reels-icon.svg";
import { formatBanglaTimeAgo } from "@/utils/formatBanglaTimeAgo";

type WebStorisCardProps = {
    post_thumbnail: string;
    post_title: string;
    post_published_at: string;
};

export default function WebStorisCard({
    post_thumbnail,
    post_title,
    post_published_at,
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
                            src={post_thumbnail}
                            alt={post_title}
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
                        <h5 className="text-white">{post_title}</h5>
                    </div>
                </div>
            </div>
            {/* Time */}
            <p className="text-xs mt-4 text-gray leading-3.75">{formatBanglaTimeAgo(post_published_at)}</p>
            {/* popup */}
            <Reels
                open={open}
                setOpen={setOpen}
                news={{
                    post_thumbnail,
                    post_title,
                    post_published_at,
                }}
            />
        </div>
    );
}
