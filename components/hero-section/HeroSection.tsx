import Ads from "../ads/ads";
import HeroTopNews from "./HeroTopNews";
import GoogleAds from "../ads/googleAds";
import NewsItem from "../news-items/newsItem";
import { getFetchData } from "@/utils/getFetchData";

export default async function HeroSection() {
    const heroSectionData = await getFetchData('/lead/section');
    if (!heroSectionData) return null;
    const {
        lead_ad,
        left_side_ad,
        right_side_ad,
        section_top_ad,
        section_bottom_ad,
    } = heroSectionData;
    const {
        leadNews,
        side_news1,
        side_news2,
        subLeadNews1,
        subLeadNews2,
        specialnews71,
    } = heroSectionData;

console.log('subLeadNews2 -- ', subLeadNews2);

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
            <section className="pt-10 pb-10 md:pb-18">
                <div className="container">
                    <div className="flex flex-col lg:flex-row">
                        <div className="w-full lg:max-w-[25.390%] divide-y divide-[#D4D4D4] mb-3 lg:mb-0 space-y-2.5 lg:space-y-5 lg:pr-5 order-2 lg:order-1">
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
                            {! left_side_ad && side_news1?.map((item: any) => (
                                <div className="flex gap-3 pb-2.5 lg:pb-5" key={item.post_id}>
                                    <NewsItem
                                        image={item?.post_thumbnail}
                                        title={item?.post_title}
                                        time={item?.post_published_at}
                                        href={`/${item?.category?.category_slug}/${item?.subcategory?.subcategory_slug}/${item?.post_slug}`}
                                        imageWrap="max-w-[104px]"
                                    />
                                </div>
                            ))}
                            {side_news2 && side_news2?.map((item: any) => (
                                <div className="flex gap-3 pb-2.5 lg:pb-5" key={item.post_id}>
                                    <NewsItem
                                        title={item?.post_title}
                                        time={item?.post_published_at}
                                        href={`/${item?.category?.category_slug}/${item?.subcategory?.subcategory_slug}/${item?.post_slug}`}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="w-full lg:max-w-[49.062%] divide-y divide-[#A1A1A1] lg:border-l lg:border-r border-[#A1A1A1] lg:px-5 order-1 lg:order-2">
                            {!lead_ad && leadNews && (
                                <HeroTopNews
                                    title={leadNews?.post_title}
                                    description={leadNews?.post_descriptions}
                                    time={leadNews?.post_published_at}
                                    image={leadNews?.post_thumbnail}
                                    caption={leadNews?.post_caption}
                                    href={`/${leadNews?.category?.category_slug}/${leadNews?.subcategory?.subcategory_slug}/${leadNews?.post_slug}`}
                                />
                            )}
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
                            {subLeadNews1?.length > 0 && (
                                <div className="flex flex-col xl:flex-row xl:py-6 divide-y xl:divide-y-0 xl:divide-x divide-[#D4D4D4]">

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
                                                    imageWrap="max-w-[96px]"
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
                            {subLeadNews2?.length > 0 && (
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
                                <div className="divide-y divide-[#D4D4D4] mt-3 lg:mt-6">
                                    {!right_side_ad && specialnews71?.map((item: any) => (
                                        <NewsItem
                                            key={item.post_id}
                                            image={item?.post_thumbnail}
                                            title={item?.post_title}
                                            imageWidth={88}
                                            imageHeight={66}
                                            href={`/${item?.category?.category_slug}/${item?.subcategory?.subcategory_slug}/${item?.post_slug}`}
                                            imageWrap="max-w-[88px]"
                                            titleFontWeight="500"
                                        />
                                    ))}
                                </div>
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
                        )}
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
