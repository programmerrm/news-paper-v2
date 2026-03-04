import Ads from "../ads/ads";
import LedNews from "../led-news/LedNews";
import NewsItem from "../news-items/newsItem";
import { getFetchData } from "@/utils/getFetchData";
import SectionTitle from "../section-title/SectionTitle";

export default async function SportsSection() {
    const sectionSevenData = await getFetchData('/section/seven');
    if (!sectionSevenData) return null;
    const {
        sectionSevenLeadNews,
        sectionSevenSubleadNews,
        sectionSevenRightSide,
    } = sectionSevenData;
    const isAllEmpty =
        !sectionSevenLeadNews &&
        (!sectionSevenSubleadNews?.length) &&
        (!sectionSevenRightSide?.length);
    if (isAllEmpty) return null;
    const category = sectionSevenData?.category;
    const sectionSevenLeftSideAd = await getFetchData('/SectionSevenLeftSideAd');
    const sectionSevenLeftSideAds = sectionSevenLeftSideAd?.ads;
    return (
        <section className="py-8 lg:py-16 bg-linear-to-b from-[#F0F5F4] to-[#FFFFFF]">
            <div className="container">
                <SectionTitle
                    title={category?.category_name}
                    href={`/${category?.category_slug}`}
                />
                <div className="flex flex-col lg:flex-row mt-6 lg:mt-8">
                    <div className="w-full lg:max-w-[32.031%] lg:pr-5 space-y-3 lg:space-y-5 divide-y divide-[#D4D4D4] order-2 lg:order-1 mt-5 lg:mt-0">
                        {sectionSevenRightSide?.map((item: any) => (
                            <div className="pb-3 lg:pb-5" key={item?.post_id}>
                                <NewsItem
                                    imageWidth={140}
                                    imageHeight={104}
                                    image={item?.post_thumbnail}
                                    title={item?.post_title}
                                    time={item?.post_published_at}
                                    href={`/${item?.category?.category_slug}/${item?.subcategory?.subcategory_slug}/${item?.post_slug}`}
                                    timeMt={"16"}
                                    imageWrap="max-w-[104px]"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="w-full lg:max-w-[42.579%] lg:px-5 lg:border-x border-[#A1A1A1] order-1 lg:order-2">
                        {sectionSevenLeadNews?.map((item: any) => (
                            <LedNews
                                key={item?.post_id}
                                image={item?.post_thumbnail}
                                imageWidth={503}
                                imageHeight={377}
                                title={item?.post_title}
                                content={item?.post_descriptions}
                                time={item?.post_published_at}
                                href={`/${item?.category?.category_slug}/${item?.subcategory?.subcategory_slug}/${item?.post_slug}`}
                                contentMt={"12"}
                                timeMt={"16"}
                            />
                        ))}
                    </div>
                    <div className="w-full lg:max-w-[25.390%] lg:pl-5 order-3 lg:order-3 mt-5 lg:mt-0">
                        <div className="flex flex-col gap-5">
                            <div>
                                {sectionSevenLeftSideAds?.ad_status === 1 && (
                                    <Ads
                                        adsImg={sectionSevenLeftSideAds?.ad_thumbnail}
                                        adsWidth={305}
                                        adsHeight={256}
                                    />
                                )}
                            </div>
                            <div className="space-y-3 lg:space-y-5 divide-y divide-[#D4D4D4]">
                                {sectionSevenSubleadNews?.map((item: any) => (
                                    <div className="pb-3 lg:pb-5" key={item?.post_id}>
                                        <NewsItem
                                            title={item?.post_title}
                                            time={item?.post_published_at}
                                            href={`/${item?.category?.category_slug}/${item?.subcategory?.subcategory_slug}/${item?.post_slug}`}
                                            timeMt={"10"}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
