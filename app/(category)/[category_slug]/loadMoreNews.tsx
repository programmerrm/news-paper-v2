"use client";

import { useState } from "react";
import SingleNewsItem from "@/components/news-items/SingleNewsItem";

export default function LoadMoreNews({ initialData, nextLink }: any) {
    const [newsData, setNewsData] = useState(initialData);
    const [nextPage, setNextPage] = useState(nextLink);
    const [loading, setLoading] = useState(false);

    const loadMore = async () => {
        if (!nextPage) return;
        setLoading(true);
        const res = await fetch(nextPage);
        const data = await res.json();
        setNewsData((prev: any) => [
            ...prev,
            ...data?.categoryBottomNewsLastPaignate?.data,
        ]);
        setNextPage(data?.categoryBottomNewsLastPaignate?.links?.next || null);
        setLoading(false);
    };

    return (
        <>
            {newsData?.map((item: any) => (
                <div className="pb-4 md:pb-8" key={item.post_id}>
                    <SingleNewsItem
                        image={item?.post_thumbnail}
                        imageWidth={340}
                        imageHeight={304}
                        title={item?.post_title}
                        time={item?.post_published_at}
                        href={`/${item?.category?.category_slug}/${item?.subcategory?.subcategory_slug}/${item?.post_slug}`}
                        timeMt={16}
                        SingleimageWrap="max-w-[200px]"
                        content={item?.post_descriptions}
                        titleMb={12}
                    />
                </div>
            ))}

            {nextPage && (
                <div className="pt-2 max-w-60 mx-auto">
                    <button
                        onClick={loadMore}
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 p-2 sm:p-3 text-sm font-medium bg-red text-white cursor-pointer"
                    >
                        {loading ? "লোড হচ্ছে..." : "আরো দেখুন"}
                    </button>
                </div>
            )}

        </>
    );
}
