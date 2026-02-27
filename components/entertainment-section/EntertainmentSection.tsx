import Ads from "../ads/ads";
import NewsItem from "../news-items/newsItem";
import { getFetchData } from "@/utils/getFetchData";
import SectionTitle from "../section-title/SectionTitle";
import NationalNews from "../national-section/NationalNews";
import NationalLedNews from "../national-led-news/NationalLedNews";

export default async function EntertainmentSection() {
    const sectionNine = await getFetchData('/section/nine');
    const category = sectionNine?.category;
    const sectionNineLeadNews = sectionNine?.sectionNineLeadNews;
    const sectionNineSubleadNews = sectionNine?.sectionNineSubleadNews;
    const sectionNineRightSide = sectionNine?.sectionNineRightSide;
    const sectionNineSideAd = await getFetchData('/SectionNineSideAd');
    const sectionNineSideAds = sectionNineSideAd?.ads;
    return (
        <section className=" py-8 lg:py-16">
            <div className="container">
                <SectionTitle
                    title={category?.category_name}
                    href={`/${category?.category_slug}`}
                />
                <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:max-w-[74.062%]">
                        <div className="mt-8 flex flex-col md:flex-row lg:pr-5 lg:border-r border-title">
                            <div className="w-full md:max-w-[56%] md:pr-5 md:border-r border-[#A1A1A1]">
                                {sectionNineLeadNews?.map((item: any) => (
                                    <NationalLedNews
                                        key={item?.post_id}
                                        image={item?.post_thumbnail}
                                        title={item?.post_title}
                                        time={item?.post_published_at}
                                        href={`/${item?.category?.category_slug}/${item?.subcategory?.subcategory_slug}/${item?.post_slug}`}
                                    />
                                ))}
                                <div className="grid grid-cols-2 mt-5 gap-4">
                                    {sectionNineSubleadNews?.map((item: any) => (
                                        <NationalNews
                                            key={item?.post_id}
                                            image={item?.post_thumbnail}
                                            title={item?.post_title}
                                            time={item?.post_published_at}
                                            href={`/${item?.category?.category_slug}/${item?.subcategory?.subcategory_slug}/${item?.post_slug}`}
                                            timeMt={"12"}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="w-full md:max-w-[44%] md:pl-5 my-5 md:my-0">
                                <div className="divide-y divide-[#D4D4D4] space-y-4">
                                    {sectionNineRightSide?.map((item: any) => (
                                        <div className="pb-4 last:pb-0" key={item.post_id}>
                                            <NewsItem
                                                imageWidth={104}
                                                imageHeight={78}
                                                image={item?.post_thumbnail}
                                                title={item?.post_title}
                                                href={`/${item?.category?.category_slug}/${item?.subcategory?.subcategory_slug}/${item?.post_slug}`}
                                                time={item?.post_published_at}
                                                timeMt={"10"}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    {sectionNineSideAds?.ad_status === 1 && (
                        <div className="w-full lg:max-w-[25.937%]">
                            <div className="mt-8 pl-5 pb-6 flex flex-col">
                                <Ads
                                    adsImg={sectionNineSideAds?.ad_thumbnail}
                                    adsWidth={280}
                                    adsHeight={600}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
