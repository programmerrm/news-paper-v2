"use client";

import { useState } from "react";
import HasTagButton from "@/components/button/HasTagButton";
import NewsFilterBar from "@/components/news-filter/NewsFilterBar";

export default function Page() {

    const [search, setSearch] = useState("");
    const [news, setNews] = useState([]); // এখানে data store হবে

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (!search.trim()) return;

        const encoded = encodeURIComponent(search);

        const res = await fetch(
            `https://website-1dc851d6.yfs.cjf.mybluehost.me/api/v1/search/news?${encoded}`
        );

        const data = await res.json();

        setNews(data); // এখানে API data store করছি
    };

    return (
        <>
            <section className="py-5 sm:py-10">
                <div className="container">

                    <h2 className="text-2xl font-bold">খুঁজুন</h2>

                    <div className="bg-[#E0EBF0] p-4 md:p-8 mt-8">

                        <form
                            onSubmit={handleSubmit}
                            className="flex items-center gap-6 bg-white pr-3 border border-[#B6C3C8]"
                        >

                            <div className="flex-1">
                                <input
                                    type="text"
                                    placeholder="কি খুজতে চান?"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="w-full py-4 sm:py-6 pl-4 sm:pl-7 focus:outline-0"
                                />
                            </div>

                            <div className="w-full max-w-24 md:max-w-38">
                                <button
                                    type="submit"
                                    className="bg-red text-white w-full p-2 sm:p-3"
                                >
                                    খুজুন
                                </button>
                            </div>

                        </form>

                    </div>

                    {/* Search Result */}
                    <div className="mt-10 space-y-4">
                        {news?.map((item: any) => (
                            <div key={item.post_id} className="p-4 border">
                                <h3 className="font-bold text-lg">
                                    {item.post_title}
                                </h3>
                                
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    );
}