import Ads from "../ads/ads";
import NewsItem from "../news-items/newsItem";
import { getFetchData } from "@/utils/getFetchData";
import SectionTitle from "../section-title/SectionTitle";
import NationalNews from "../national-section/NationalNews";
import NationalLedNews from "../national-led-news/NationalLedNews";
import GoogleAds from "../ads/googleAds";

export default async function EntertainmentSection() {
    const sectionNine = await getFetchData('/section/nine');
    if (!sectionNine) return null;
    const {
        sectionNineLeadNews,
        sectionNineSubleadNews,
        sectionNineRightSide,
    } = sectionNine;
    const category = sectionNine?.category;

    const {
        lead_ad,
        sub_lead_ad,
        right_side_ad,
        section_top_ad,
        section_bottom_ad,
    } = sectionNine;

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
                                    {lead_ad && (
                                        <>
                                            {lead_ad?.ad_type === "premium" ? (
                                                <Ads
                                                    adsImg={lead_ad?.ad_thumbnail}
                                                    adsWidth={768}
                                                    adsHeight={90}
                                                />
                                            ) : (
                                                <div className="w-3xl h-22.5">
                                                    <GoogleAds
                                                        code={lead_ad?.ad_google_script}
                                                    />
                                                </div>
                                            )}
                                        </>
                                    )}
                                    {!lead_ad && sectionNineLeadNews?.map((item: any) => (
                                        <NationalLedNews
                                            key={item?.post_id}
                                            image={item?.post_thumbnail}
                                            title={item?.post_title}
                                            time={item?.post_published_at}
                                            href={`/${item?.category?.category_slug}/${item?.subcategory?.subcategory_slug}/${item?.post_slug}`}
                                        />
                                    ))}
                                    <div className="grid grid-cols-2 mt-5 gap-4">
                                        {!sub_lead_ad && sectionNineSubleadNews?.map((item: any) => (
                                            <NationalNews
                                                key={item?.post_id}
                                                image={item?.post_thumbnail}
                                                title={item?.post_title}
                                                time={item?.post_published_at}
                                                href={`/${item?.category?.category_slug}/${item?.subcategory?.subcategory_slug}/${item?.post_slug}`}
                                                timeMt={"12"}
                                            />
                                        ))}
                                        {sub_lead_ad && (
                                            <>
                                                {sub_lead_ad?.ad_type === "premium" ? (
                                                    <Ads
                                                        adsImg={sub_lead_ad?.ad_thumbnail}
                                                        adsWidth={768}
                                                        adsHeight={90}
                                                    />
                                                ) : (
                                                    <div className="w-3xl h-22.5">
                                                        <GoogleAds
                                                            code={sub_lead_ad?.ad_google_script}
                                                        />
                                                    </div>
                                                )}
                                            </>
                                        )}
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
                        {right_side_ad && (
                            <>
                                {right_side_ad?.ad_type === "premium" ? (
                                    <Ads
                                        adsImg={right_side_ad?.ad_thumbnail}
                                        adsWidth={768}
                                        adsHeight={90}
                                    />
                                ) : (
                                    <div className="w-3xl h-22.5">
                                        <GoogleAds
                                            code={right_side_ad?.ad_google_script}
                                        />
                                    </div>
                                )}
                            </>
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
