"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SERVER_API_URL } from "@/utils/api";
import HasTagButton from "@/components/button/HasTagButton";
import { getFetchData } from "@/utils/getFetchData";
import SingleNewsItem from "@/components/news-items/SingleNewsItem";

type LocationParams = {
    division_id?: number;
    district_id?: number;
    upazilla_id?: number;
};

export default function Page() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [search, setSearch] = useState("");
    const [locationParams, setLocationParams] = useState<LocationParams>({});
    const [titleResults, setTitleResults] = useState<any[]>([]);
    const [locationResults, setLocationResults] = useState<any[]>([]);
    const [news, setNews] = useState<any[]>([]);
    const [tags, setTags] = useState<any[]>([]);

    useEffect(() => {
        async function tagsData() {
            const res = await getFetchData('/allTag');
            setTags(res);
        }
        tagsData();
    }, []);

    // 1️⃣ GET URL PARAMS
    useEffect(() => {
        const title = searchParams.get("news");
        const division = searchParams.get("division_id");
        const district = searchParams.get("district_id");
        const upazilla = searchParams.get("upazilla_id");

        if (title) {
            const decoded = decodeURIComponent(title).replace(/-/g, " ");
            setSearch(decoded);
        }

        setLocationParams({
            division_id: division ? Number(division) : undefined,
            district_id: district ? Number(district) : undefined,
            upazilla_id: upazilla ? Number(upazilla) : undefined,
        });
    }, [searchParams]);

    // 2️⃣ SEARCH NEWS BY TITLE
    useEffect(() => {
        const delay = setTimeout(async () => {
            if (!search.trim()) {
                setTitleResults([]);
                return;
            }

            // Update URL without reloading
            const slug = search.trim().replace(/\s+/g, "-");
            router.replace(`/search?news=${encodeURIComponent(slug)}`, { scroll: false });

            try {
                const res = await fetch(
                    `${SERVER_API_URL}/search/news?newssearch=${encodeURIComponent(search.trim())}`
                );

                if (!res.ok) throw new Error(`Title search failed: ${res.status}`);

                const data = await res.json();
                setTitleResults(data?.data || []);
            } catch (err) {
                console.error("Title search error:", err);
                setTitleResults([]);
            }
        }, 500);

        return () => clearTimeout(delay);
    }, [search, router]);

    // 3️⃣ FETCH NEWS BY LOCATION
    useEffect(() => {
        const { division_id, district_id, upazilla_id } = locationParams;

        if (!division_id && !district_id && !upazilla_id) {
            setLocationResults([]);
            return;
        }

        const fetchLocationNews = async () => {
            const query = new URLSearchParams();
            if (division_id) query.append("division_id", String(division_id));
            if (district_id) query.append("district_id", String(district_id));
            if (upazilla_id) query.append("upazilla_id", String(upazilla_id));

            try {
                const res = await fetch(`${SERVER_API_URL}/search/news/bangladesh?${query.toString()}`);

                if (!res.ok) throw new Error(`Location search failed: ${res.status}`);

                const data = await res.json();
                setLocationResults(data?.data || []);
            } catch (err) {
                console.error("Location search error:", err);
                setLocationResults([]);
            }
        };

        fetchLocationNews();
    }, [locationParams]);

    // 4️⃣ MERGE TITLE + LOCATION RESULTS
    useEffect(() => {
        const merged = [...titleResults, ...locationResults];

        // Remove duplicates by post_id
        const unique = merged.filter(
            (item, index, self) =>
                index === self.findIndex((t) => t.post_id === item.post_id)
        );

        setNews(unique);
    }, [titleResults, locationResults]);

    return (
        <>

            <section className="py-5 sm:py-10">
                <div className="container">
                    <h2 className="text-2xl font-bold">খুঁজুন</h2>
                    <div className="bg-[#E0EBF0] p-4 md:p-8 mt-8 ">
                        <div className="flex items-center gap-6 bg-white pr-3 border border-[#B6C3C8]">
                            <div className="flex-1">
                                <input
                                    type="text"
                                    placeholder="কি খুজতে চান?"
                                    className="w-full  focus:outline-0 py-4 sm:py-6 pl-4 sm:pl-7"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>
                            <div className="w-full max-w-24 md:max-w-38">
                                <button type="button" className="bg-red text-white w-full flex items-center justify-center gap-2 p-2 sm:p-3 text-sm font-medium leading-6 transition-all border border-[#B6C3C8] cursor-pointer">
                                    খুজুন
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                            <span className="text-[17px] font-semibold leading-6 text-title min-w-27">ট্রেন্ডিং হ্যাসট্যাগ:</span>
                            <div className="flex items-center flex-wrap gap-2">
                                {tags?.map((item: any) => (
                                    <HasTagButton
                                        label={item?.name_bn}
                                        href={`/tags/${item?.slug}`}
                                        color="#171717"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="py-7 lg:py-14">
                <div className="container">
                    <div className="space-y-8 divide-y divide-gray-dark max-w-220.5 mx-auto">
                        {news.length === 0 && <p className="text-center">কোনো খবর পাওয়া যায়নি</p>}
                        {news?.map((item: any) => (
                            <div className="pb-4 md:pb-8">
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
                    </div>
                </div>
            </section>
        </>
    );
}