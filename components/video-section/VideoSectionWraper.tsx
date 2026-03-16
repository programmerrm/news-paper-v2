"use client";

import Link from "next/link";
import { useState } from "react";
import VideoNewsItem from "./VideoNewsItem";
import VideoPlayer from "../video/VideoPage";
import { formatBanglaTimeAgo } from "@/utils/formatBanglaTimeAgo";

export default function VideoSectionWraper({ data }: any) {
    const [activeTab, setActiveTab] = useState<"video" | "reel">("video");
    const leadVideo = data?.leadVideo;
    const sectionVideo = data?.sectionVideo || [];
    const videos = sectionVideo.filter(
        (item: any) => item.reel_status === 0
    );
    const reels = sectionVideo.filter(
        (item: any) => item.reel_status === 1
    );
    const displayedItems = activeTab === "video" ? videos : reels;

    console.log('leadVideo -- ', leadVideo);

    return (
        <section className="bg-[#171717] py-8 lg:py-16">
            <div className="container">
                <div className="pb-3">
                    <h3 className="text-white mb-3">ভিডিও</h3>
                    <div className="flex gap-6">
                        <button
                            onClick={() => setActiveTab("video")}
                            className={`cursor-pointer text-sm font-medium relative ${activeTab === "video"
                                ? "text-white after:absolute after:left-0 after:right-0 after:-bottom-2 after:h-0.5 after:bg-amber-600"
                                : "text-gray-400"
                                }`}
                        >
                            ভিডিও খবর
                        </button>
                        <button
                            onClick={() => setActiveTab("reel")}
                            className={`cursor-pointer text-sm font-medium relative ${activeTab === "reel"
                                ? "text-white after:absolute after:left-0 after:right-0 after:-bottom-2 after:h-0.5 after:bg-amber-600"
                                : "text-gray-400"
                                }`}
                        >
                            রিল খবর
                        </button>
                    </div>
                </div>
                <div className="mt-6 flex flex-col md:flex-row gap-6">
                    <div className="w-full md:max-w-[55.938%] bg-body">
                        <div className="overflow-hidden">
                            <VideoPlayer
                                src={leadVideo?.video_url}
                            />
                        </div>
                        <div className="px-4 py-6">
                            <h4 className="text-white mb-3 transition-all hover:text-blue">
                                <Link href={`/videos/${leadVideo?.category?.category_slug}/${leadVideo?.video_slug}`}>
                                    {leadVideo?.video_title}
                                </Link>
                            </h4>
                            <span className="text-xs text-gray-400">
                                {formatBanglaTimeAgo(leadVideo?.video_published_at)}
                            </span>
                        </div>
                    </div>
                    <div className="w-full md:max-w-[42.188%] flex flex-col gap-4">
                        {displayedItems.map((item: any) => (
                            <VideoNewsItem
                                key={item?.video_id}
                                video_url={item?.video_url}
                                title={item?.video_title}
                                time={item?.video_published_at}
                                href={`${activeTab === "video" ? "videos" : "reels"}/${item?.category?.category_slug}/${item?.video_slug}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
