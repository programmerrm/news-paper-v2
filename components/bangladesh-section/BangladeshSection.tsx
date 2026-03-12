import Ads from "../ads/ads";
import GoogleAds from "../ads/googleAds";
import LedNews from "../led-news/LedNews";
import NewsItem from "../news-items/newsItem";
import Bangladesh from "../search/bangladesh";
import { getFetchData } from "@/utils/getFetchData";
import SectionTitle from "../section-title/SectionTitle";

export default async function BangldeshNews() {
    const sectionThreeData = await getFetchData('/section/three');
    if (!sectionThreeData) return null;
    const {
        lead_ad,
        left_side_ad,
        right_side_ad,
        section_top_ad,
        section_bottom_ad,
    } = sectionThreeData;
    const {
        sectionThreeLeadNews,
        sectionThreeLeftSide,
        sectionThreeRightSide,
    } = sectionThreeData;
    const category = sectionThreeData?.category;
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
                    <Bangladesh />
                    <div className="flex flex-col lg:flex-row mt-8">
                        <div className="w-full lg:max-w-[32.031%] lg:pr-5 mt-4 lg:mt-0 flex flex-col gap-2.5 lg:gap-5 divide-y divide-[#D4D4D4] order-2 lg:order-1">
                            {left_side_ad && (
                                <>
                                    {left_side_ad?.ad_type === "premium" ? (
                                        <Ads
                                            adsImg={left_side_ad?.ad_thumbnail}
                                            adsWidth={305}
                                            adsHeight={360}
                                        />
                                    ) : (
                                        <div className="w-76.25 h-90">
                                            <GoogleAds
                                                code={left_side_ad?.ad_google_script}
                                            />
                                        </div>
                                    )}
                                </>
                            )}
                            {!left_side_ad && sectionThreeLeftSide?.map((item: any) => (
                                <div className="pb-3 lg:pb-5" key={item.post_id}>
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
                        <div className="w-full lg:max-w-[42.421%] lg:px-4.75 lg:border-r lg:border-l border-[#A1A1A1] order-1 lg:order-2">
                            {!lead_ad && sectionThreeLeadNews?.map((item: any) => (
                                <LedNews
                                    key={item.post_id}
                                    image={item?.post_thumbnail}
                                    imageWidth={503}
                                    imageHeight={377}
                                    title={item?.post_title}
                                    time={item?.post_published_at}
                                    href={`/${item?.category?.category_slug}/${item?.subcategory?.subcategory_slug}/${item?.post_slug}`}
                                    contentMt="12"
                                    timeMt="16"
                                />
                            ))}
                            {lead_ad && (
                                <>
                                    {lead_ad?.ad_type === "premium" ? (
                                        <Ads
                                            adsImg={lead_ad?.ad_thumbnail}
                                            adsWidth={588}
                                            adsHeight={255}
                                        />
                                    ) : (
                                        <div className="w-147 h-63.75">
                                            <GoogleAds
                                                code={lead_ad?.ad_google_script}
                                            />
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                        <div className="w-full lg:max-w-[25.391%] lg:pl-5 mt-4 lg:mt-0 flex flex-col gap-3 lg:gap-5 divide-y divide-[#D4D4D4] order-3 lg:order-3">
                            {!right_side_ad && sectionThreeRightSide?.map((item: any) => (
                                <div className="item" key={item.post_id}>
                                    <div className="pb-2.5">
                                        <NewsItem
                                            imageWidth={96}
                                            imageHeight={72}
                                            image={item?.post_thumbnail}
                                            title={item?.post_title}
                                            href={`/${item?.category?.category_slug}/${item?.subcategory?.subcategory_slug}/${item?.post_slug}`}
                                            imageWrap="max-w-[104px]"
                                        />
                                    </div>
                                    <div className="pb-3 lg:pb-5">
                                        <NewsItem
                                            content={item?.post_descriptions}
                                            href={`/${item?.category?.category_slug}/${item?.subcategory?.subcategory_slug}/${item?.post_slug}`}
                                            time={item?.post_published_at}
                                            timeMt={"10"}
                                            imageWrap="max-w-[104px]"
                                        />
                                    </div>
                                </div>
                            ))}
                            {right_side_ad && (
                                <>
                                    {right_side_ad?.ad_type === "premium" ? (
                                        <Ads
                                            adsImg={right_side_ad?.ad_thumbnail}
                                            adsWidth={305}
                                            adsHeight={360}
                                        />
                                    ) : (
                                        <div className="w-76.25 h-90">
                                            <GoogleAds
                                                code={right_side_ad?.ad_google_script}
                                            />
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            {section_bottom_ad && (
                <>
                    {section_bottom_ad?.ad_type === "premium" ? (
                        <div className="pb-2">
                            <Ads
                                adsImg={section_bottom_ad?.ad_thumbnail}
                                adsWidth={768}
                                adsHeight={90}
                            />
                        </div>
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
