import { getFetchData } from "@/utils/getFetchData";
import NewsItem from "../news-items/newsItem";
import SectionHeader from "./SectionHeader";
import Ads from "../ads/ads";
import GoogleAds from "../ads/googleAds";

export default async function SocialDiscourseSection() {
    const sectionEight = await getFetchData('/section/eight');
    if (!sectionEight) return null;
    const {
        section13PartOne,
        section13PartTwo,
        section13PartThree,
    } = sectionEight;
    const {
        middle_ad,
        left_side_ad,
        right_side_ad,
        section_top_ad,
        section_bottom_ad,
    } = sectionEight;
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
            <section className="bg-[#F0F5F4] py-8 lg:py-16">
                <div className="container">
                    <div className="hidden lg:flex items-center justify-between">
                        <SectionHeader
                            className="max-w-[30.469%]"
                            title={section13PartOne[0]?.category?.category_name}
                        />
                        <SectionHeader
                            className="max-w-[30.469%]"
                            title={section13PartTwo[0]?.category?.category_name}
                        />
                        <SectionHeader
                            className="max-w-[30.469%]"
                            title={section13PartThree[0]?.category?.category_name}
                        />
                    </div>
                    <div className="flex flex-col lg:flex-row gap-y-5 items-center justify-between lg:divide-x divide-[#A1A1A1] lg:mt-8">
                        <div className="w-full lg:max-w-[32.579% lg:pr-6.75 divide-y divide-gray-dark space-y-3 lg:space-y-5">
                            <SectionHeader
                                className="lg:hidden"
                                title={section13PartOne[0]?.category?.category_name}
                            />
                            {section13PartOne?.map((item: any) => (
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
                            {left_side_ad && (
                                <>
                                    {left_side_ad?.ad_type === "premium" ? (
                                        <Ads
                                            adsImg={left_side_ad?.ad_thumbnail}
                                            adsWidth={768}
                                            adsHeight={90}
                                        />
                                    ) : (
                                        <div className="w-3xl h-22.5">
                                            <GoogleAds
                                                code={left_side_ad?.ad_google_script}
                                            />
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                        <div className="w-full lg:max-w-[34.688%] lg:px-6.75 divide-y divide-gray-dark space-y-3 lg:space-y-5">
                            <SectionHeader
                                className="lg:hidden"
                                title={section13PartTwo[0]?.category?.category_name}
                            />
                            {middle_ad && (
                                <>
                                    {middle_ad?.ad_type === "premium" ? (
                                        <Ads
                                            adsImg={middle_ad?.ad_thumbnail}
                                            adsWidth={768}
                                            adsHeight={90}
                                        />
                                    ) : (
                                        <div className="w-3xl h-22.5">
                                            <GoogleAds
                                                code={middle_ad?.ad_google_script}
                                            />
                                        </div>
                                    )}
                                </>
                            )}
                            {section13PartTwo?.map((item: any) => (
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
                        <div className="w-full lg:max-w-[32.579%] lg:pl-6.75 divide-y divide-gray-dark space-y-3 lg:space-y-5">
                            <SectionHeader
                                className="lg:hidden"
                                title={section13PartThree[0]?.category?.category_name}
                            />
                            {section13PartThree?.map((item: any) => (
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
