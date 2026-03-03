"use client";

import { useState } from "react";
import Reels from "../popup/reels";
import StorisCard from "./StorisCard";

export default function StorisData({ webStories }: any) {
    const [open, setOpen] = useState(false);
    const [selectedNews, setSelectedNews] = useState<any>(null);
    if (!webStories?.length) return null;
    return (
        <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 mt-7">
                {webStories.map((item: any) => (
                    <div
                        key={item.post_id}
                        onClick={() => {
                            setSelectedNews(item);
                            setOpen(true);
                        }}
                    >
                        <StorisCard
                            image={item?.post_thumbnail}
                            title={item?.post_title}
                        />
                    </div>
                ))}
            </div>
            <Reels
                open={open}
                setOpen={setOpen}
                news={selectedNews}
            />
        </>
    );
}
