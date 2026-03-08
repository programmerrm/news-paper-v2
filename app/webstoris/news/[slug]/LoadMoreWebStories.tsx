"use client";

import { useState } from "react";
import WebStorisCard from "@/components/storis/webStorisCard";
import Button from "@/components/button/Button";

type Props = {
    initialData: any[];
    nextLink: string | null;
};

export default function LoadMoreWebStories({ initialData, nextLink }: Props) {
    const [stories, setStories] = useState(initialData);
    const [nextPage, setNextPage] = useState(nextLink);
    const [loading, setLoading] = useState(false);

    const loadMore = async () => {
        if (!nextPage) return;

        setLoading(true);
        const res = await fetch(nextPage);
        const data = await res.json();

        setStories((prev) => [...prev, ...data?.webStories?.data]);
        setNextPage(data?.webStories?.links?.next || null);
        setLoading(false);
    };

    return (
        <>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-3 sm:mt-7">
                {stories?.map((item: any) => (
                    <WebStorisCard
                        key={item?.post_id}
                        post_thumbnail={item?.post_thumbnail}
                        post_title={item?.post_title}
                        post_published_at={item?.post_published_at}
                    />
                ))}
            </div>

            {nextPage && (
                <div className="max-w-60 mx-auto mt-10">
                    <Button
                        text={loading ? "লোড হচ্ছে..." : "আরো দেখুন"}
                        onClick={loadMore}
                    />
                </div>
            )}
        </>
    );
}
