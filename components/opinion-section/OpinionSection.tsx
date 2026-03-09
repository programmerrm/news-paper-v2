import Link from "next/link";
import Image from "next/image";
import OpinionNewsItem from "./OpinionNews";
import { getFetchData } from "@/utils/getFetchData";
import SectionTitle from "../section-title/SectionTitle";
import Description from "../text-editor/description";
import Ads from "../ads/ads";
import GoogleAds from "../ads/googleAds";

export default async function OpinionSection() {
    const sectionEleven = await getFetchData("/section/eleven");
    const category = sectionEleven?.category;
    const leadNews = sectionEleven?.sectionEleveneadNews;
    const subleadNews = sectionEleven?.sectionElevenSubleadNews || [];

    const {
        lead_ad,
        sub_lead_ad,
        section_top_ad,
        section_bottom_ad,
    } = sectionEleven;

    const chunkedNews = [];
    for (let i = 0; i < subleadNews.length; i += 3) {
        chunkedNews.push(subleadNews.slice(i, i + 3));
    }

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
            <section className="py-8 lg:py-16 bg-[#FBF7EF]">
                <div className="container">
                    <SectionTitle
                        title={category?.category_name}
                        href={`/${category?.category_slug}`}
                    />
                    <div className="flex flex-col lg:flex-row mt-8">
                        {/* LEFT SIDE LEAD */}
                        <div className="w-full lg:w-[31.562%] bg-white flex items-center border-b-2 border-red mb-5 lg:mb-0">
                            {!lead_ad && leadNews?.map((item: any) => (
                                <div className="p-8" key={item.post_id}>
                                    <div className="mb-8">
                                        <Image
                                            src={item?.post_thumbnail}
                                            alt={item?.post_title}
                                            width={140}
                                            height={140}
                                            className="rounded-full transition-transform duration-500 hover:scale-105 w-35 h-35 object-cover"
                                        />
                                    </div>
                                    <h4 className="mb-3 transition-all hover:text-[#1877f2] line-clamp-2">
                                        <Link
                                            href={`/${item?.category?.category_slug}${item?.subcategory?.subcategory_slug
                                                ? `/${item?.subcategory?.subcategory_slug}`
                                                : ""
                                                }/${item?.post_slug}`}
                                        >
                                            {item.post_title}
                                        </Link>
                                    </h4>
                                    <p className="text-xs sm:text-sm leading-5.5 text-[#525252] line-clamp-4">
                                        <div
                                        >
                                            <Description description={item?.post_descriptions} />
                                        </div>
                                    </p>
                                    <span className="text-xs sm:text-sm leading-5.5 text-[#525252] mt-8 inline-block">
                                        লেখক: {item?.author?.author_name}
                                    </span>
                                </div>
                            ))}
                            {lead_ad && (
                                <>
                                    {lead_ad?.ad_type === "premium" ? (
                                        <Ads
                                            adsImg={lead_ad?.ad_thumbnail}
                                            adsWidth={140}
                                            adsHeight={104}
                                        />
                                    ) : (
                                        <div className="w-35 h-26">
                                            <GoogleAds
                                                code={lead_ad?.ad_google_script}
                                            />
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                        {/* RIGHT SIDE DYNAMIC COLUMN */}
                        {chunkedNews.length > 0 && (
                            <div className="w-full lg:w-[68.438%] lg:pl-7 flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-red">
                                {sub_lead_ad && (
                                    <>
                                        {sub_lead_ad?.ad_type === "premium" ? (
                                            <Ads
                                                adsImg={sub_lead_ad?.ad_thumbnail}
                                                adsWidth={96}
                                                adsHeight={96}
                                            />
                                        ) : (
                                            <div className="w-24 h-24">
                                                <GoogleAds
                                                    code={sub_lead_ad?.ad_google_script}
                                                />
                                            </div>
                                        )}
                                    </>
                                )}
                                {!sub_lead_ad && chunkedNews.length > 0 && (
                                    <div
                                        className="w-full lg:pl-7 grid divide-x divide-red"
                                        style={{
                                            gridTemplateColumns: `repeat(${chunkedNews.length}, minmax(0, 1fr))`,
                                        }}
                                    >
                                        {chunkedNews.map((group: any[], columnIndex: number) => (
                                            <div key={columnIndex} className="px-5 py-5 sm:py-10">
                                                <div className="space-y-5">
                                                    {group.map((item: any) => (
                                                        <OpinionNewsItem
                                                            key={item?.post_id}
                                                            image={item?.post_thumbnail}
                                                            imageWidth={96}
                                                            imageHeight={96}
                                                            title={item?.post_title}
                                                            author={item?.author?.author_name}
                                                            href={`/${item?.category?.category_slug}${item?.subcategory?.subcategory_slug
                                                                ? `/${item?.subcategory?.subcategory_slug}`
                                                                : ""
                                                                }/${item?.post_slug}`}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
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
