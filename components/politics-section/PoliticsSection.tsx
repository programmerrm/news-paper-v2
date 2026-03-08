import LedNews from "../led-news/LedNews";
import NewsItem from "../news-items/newsItem";
import { getFetchData } from "@/utils/getFetchData";
import SectionTitle from "../section-title/SectionTitle";
import NationalNews from "../national-section/NationalNews";
import Ads from "../ads/ads";
import GoogleAds from "../ads/googleAds";

export default async function PoliticsSection() {
    const sectionSix = await getFetchData('/section/six');
    if (!sectionSix) return null;
    const {
        sectionSixLeadNews,
        sectionSixSubleadNews,
        sectionSixRightSide,
    } = sectionSix;
    const {
        lead_ad,
        sub_lead_ad,
        section_top_ad,
        section_bottom_ad,
    } = sectionSix;
    const category = sectionSix?.category;
    return (
        <>
            {section_top_ad && (
                <>
                    {section_top_ad?.ad_type === "premium" ? (
                        <Ads
                            adsImg={section_top_ad?.ad_thumbnail}
                            adsWidth={768}
                            adsHeight={90}
                        />
                    ) : (
                        <div className="w-3xl h-22.5">
                            <GoogleAds
                                code={section_top_ad?.ad_google_script}
                            />
                        </div>
                    )}
                </>
            )}
            <section className="py-8 lg:py-16">
                <div className="container">
                    <SectionTitle
                        title={category?.category_name}
                        href={`/${category?.category_slug}`}
                    />
                    <div
                        className="sm:grid grid-cols-[59.14%_40.86%] lg:grid-cols-[40.86%_27.11%_32.03%] gap-y-5 mt-8"
                    >
                        <div className="pr-5">
                            {!lead_ad && sectionSixLeadNews?.map((item: any) => (
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
                            {lead_ad && (
                                <>
                                    {lead_ad?.ad_type === "premium" ? (
                                        <Ads
                                            adsImg={lead_ad?.ad_thumbnail}
                                            adsWidth={503}
                                            adsHeight={377}
                                        />
                                    ) : (
                                        <div className="w-125.75 h-94.25">
                                            <GoogleAds
                                                code={lead_ad?.ad_google_script}
                                            />
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                        <div className="sm:px-5 sm:border-x border-[#A1A1A1]">
                            <div className="space-y-5 divide-y divide-[#D4D4D4]">
                                {sub_lead_ad && (
                                    <>
                                        {sub_lead_ad?.ad_type === "premium" ? (
                                            <Ads
                                                adsImg={sub_lead_ad?.ad_thumbnail}
                                                adsWidth={503}
                                                adsHeight={377}
                                            />
                                        ) : (
                                            <div className="w-125.75 h-94.25">
                                                <GoogleAds
                                                    code={sub_lead_ad?.ad_google_script}
                                                />
                                            </div>
                                        )}
                                    </>
                                )}
                                {!sub_lead_ad && sectionSixSubleadNews?.map((item: any) => (
                                    <div className="pb-5" key={item.post_id}>
                                        <NationalNews
                                            image={item?.post_thumbnail}
                                            imageWidth={305}
                                            imageHeight={229}
                                            title={item?.post_title}
                                            time={item?.post_published_at}
                                            href={`/${item?.category?.category_slug}/${item?.subcategory?.subcategory_slug}/${item?.post_slug}`}
                                            timeMt={"12"}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="sm:pl-5 mt-5 lg:mt-0 col-span-2 lg:col-span-1">
                            <div className="space-y-5 divide-y divide-[#D4D4D4]">
                                {sectionSixRightSide?.map((item: any) => (
                                    <div key={item.post_id} className="pb-5 last:pb-0">
                                        <NewsItem
                                            image={item?.post_thumbnail}
                                            imageWidth={140}
                                            imageHeight={104}
                                            title={item?.post_title}
                                            time={item?.post_published_at}
                                            timeMt={"16"}
                                            href={`/${item?.category?.category_slug}/${item?.subcategory?.subcategory_slug}/${item?.post_slug}`}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {section_bottom_ad && (
                <>
                    {section_bottom_ad?.ad_type === "premium" ? (
                        <Ads
                            adsImg={section_bottom_ad?.ad_thumbnail}
                            adsWidth={768}
                            adsHeight={90}
                        />
                    ) : (
                        <div className="w-3xl h-22.5">
                            <GoogleAds
                                code={section_bottom_ad?.ad_google_script}
                            />
                        </div>
                    )}
                </>
            )}
        </>
    );
}
