"use client";

import { useState } from "react";
import SingleNewsItem from "@/components/news-items/SingleNewsItem";
import Button from "@/components/button/Button";
import { SERVER_API_URL } from "@/utils/api";

type Props = {
    initialData: any[];
    nextLink: string | null;
    tagSlug: string;
};

export default function LoadMoreTagNews({ initialData, nextLink, tagSlug }: Props) {
    const [newsData, setNewsData] = useState(initialData);
    const [nextPage, setNextPage] = useState(nextLink);
    const [loading, setLoading] = useState(false);
    const [filter, setFilter] = useState("latest");

    const changeFilter = async (newFilter: string) => {
        if (filter === newFilter) return; 
        setFilter(newFilter);
        setLoading(true);
        try {
            const res = await fetch(`${SERVER_API_URL}/tag/${tagSlug}?orderBy=${newFilter}`);
            const data = await res.json();
            setNewsData(data?.posts?.data || []);
            setNextPage(data?.posts?.links?.next || null);
        } catch (error) {
            console.error("Failed to fetch filtered posts:", error);
        } finally {
            setLoading(false);
        }
    };

    const loadMore = async () => {
        if (!nextPage) return;
        setLoading(true);
        try {
            const res = await fetch(nextPage);
            const data = await res.json();
            setNewsData((prev) => [...prev, ...(data?.posts?.data || [])]);
            setNextPage(data?.posts?.links?.next || null);
        } catch (error) {
            console.error("Failed to load more posts:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="flex gap-4 mb-6 justify-center">
                {/* {[
                    { label: "সর্বশেষ", value: "latest" },
                    { label: "পুরোনো", value: "oldest" },
                ].map((f) => (
                    <button
                        key={f.value}
                        className={`px-4 py-2 rounded-md font-medium ${filter === f.value ? "bg-red text-white" : "bg-gray-100 text-black"
                            }`}
                        onClick={() => changeFilter(f.value)}
                    >
                        {f.label}
                    </button>
                ))} */}
            </div>

            <div className="space-y-8 divide-y divide-gray-dark max-w-220.5 mx-auto">
                {newsData?.map((item: any) => (
                    <div className="pb-4 md:pb-8" key={item.post_id}>
                        <SingleNewsItem
                            image={item.post_thumbnail}
                            imageWidth={340}
                            imageHeight={304}
                            title={item.post_title}
                            time={item.post_published_at}
                            href={`/${item.category.category_slug}/${item.subcategory.subcategory_slug}/${item.post_slug}`}
                            timeMt={16}
                            SingleimageWrap="max-w-[200px]"
                            content={item.post_descriptions}
                            titleMb={12}
                        />
                    </div>
                ))}
            </div>

            {/* Load More Button */}
            {nextPage && (
                <div className="pt-2 max-w-60 mx-auto mt-6">
                    <Button text={loading ? "লোড হচ্ছে..." : "আরো দেখুন"} onClick={loadMore} />
                </div>
            )}
        </>
    );
}