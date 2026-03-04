import HeroTopNews from "./HeroTopNews";
import NewsItem from "../news-items/newsItem";
import { getFetchData } from "@/utils/getFetchData";

export default async function HeroSection() {
    const heroSectionData = await getFetchData('/lead/section');
    if (!heroSectionData) return null;
    const {
        leadNews,
        side_news1,
        side_news2,
        subLeadNews1,
        subLeadNews2,
        specialnews71,
    } = heroSectionData;
    const isAllEmpty =
        !leadNews &&
        (!side_news1?.length) &&
        (!side_news2?.length) &&
        (!subLeadNews1?.length) &&
        (!subLeadNews2?.length) &&
        (!specialnews71?.length);
    if (isAllEmpty) return null;
    return (
        <section className="pt-10 pb-10 md:pb-18">
            <div className="container">
                <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:max-w-[25.390%] divide-y divide-[#D4D4D4] space-y-5 pr-5 order-2 lg:order-1">
                        {side_news1?.map((item: any) => (
                            <div className="flex gap-3 pb-5" key={item.post_id}>
                                <NewsItem
                                    image={item?.post_thumbnail}
                                    title={item?.post_title}
                                    time={item?.post_published_at}
                                    href={`/${item?.category?.category_slug}/${item?.subcategory?.subcategory_slug}/${item?.post_slug}`}
                                    imageWrap="max-w-[80px]"
                                />
                            </div>
                        ))}
                        {side_news2 && side_news2?.map((item: any) => (
                            <div className="flex gap-3 pb-5" key={item.post_id}>
                                <NewsItem
                                    title={item?.post_title}
                                    time={item?.post_published_at}
                                    href={`/${item?.category?.category_slug}/${item?.subcategory?.subcategory_slug}/${item?.post_slug}`}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="w-full lg:max-w-[49.062%] divide-y divide-[#A1A1A1] lg:border-l lg:border-r border-[#A1A1A1] lg:px-5 order-1 lg:order-2">
                        {leadNews && (
                            <HeroTopNews
                                title={leadNews?.post_title}
                                description={leadNews?.post_descriptions}
                                time={leadNews?.post_published_at}
                                image={leadNews?.post_thumbnail}
                                caption={leadNews?.post_caption}
                                href={`/${leadNews?.category?.category_slug}/${leadNews?.subcategory?.subcategory_slug}/${leadNews?.post_slug}`}
                            />
                        )}
                        {subLeadNews1?.length > 0 && (
                            <div className="flex flex-col xl:flex-row py-6 divide-y xl:divide-y-0 xl:divide-x divide-[#D4D4D4]">

                                {subLeadNews1.map((item: any, index: number) => (
                                    <div
                                        key={item.post_id}
                                        className={`
          w-full xl:max-w-1/2
          ${index === 0 ? "xl:pr-6" : "xl:pl-6"}
          py-5 xl:py-0
        `}
                                    >
                                        <div className="pb-2">
                                            <NewsItem
                                                image={item?.post_thumbnail}
                                                imageWidth={96}
                                                imageHeight={72}
                                                title={item?.post_title}
                                                href={`/${item?.category?.category_slug}/${item?.subcategory?.subcategory_slug}/${item?.post_slug}`}
                                                imageWrap="max-w-[80px]"
                                            />
                                        </div>

                                        <div>
                                            <NewsItem
                                                content={item?.post_descriptions}
                                                time={item?.post_published_at}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        {subLeadNews2 && (
                            <div className="grid sm:grid-cols-3 gap-3 py-6 first:pt-0 lg:last:pb-0 divide-y sm:divide-y-0 sm:divide-x divide-[#D4D4D4]">
                                {subLeadNews2 && subLeadNews2?.map((item: any) => (
                                    <div className="pr-3 last:pr-0 pb-3 sm:pb-0 last:pb-0" key={item.post_id}>
                                        <NewsItem
                                            title={item?.post_title}
                                            content={item?.post_descriptions}
                                            time={item?.post_published_at}
                                            href={`/${item?.category?.category_slug}/${item?.subcategory?.subcategory_slug}/${item?.post_slug}`}
                                            titleMb={"10"}
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    {specialnews71?.length > 0 && (
                        <div className="w-full lg:max-w-[25.390%] lg:pl-5 order-3">
                            <h6 className="text-sm sm:text-base leading-6 text-black font-inter font-semibold">নিউজ ফ্ল্যাশ ৭১ <span
                                className="text-red font-inter">স্পেশাল</span></h6>
                            <div className="divide-y divide-[#D4D4D4] mt-6">
                                {specialnews71?.map((item: any) => (
                                    <NewsItem
                                        key={item.post_id}
                                        image={item?.post_thumbnail}
                                        title={item?.post_title}
                                        imageWidth={88}
                                        imageHeight={66}
                                        href={`/${item?.category?.category_slug}/${item?.subcategory?.subcategory_slug}/${item?.post_slug}`}
                                        imageWrap="max-w-[80px]"
                                        titleFontWeight="500"
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
