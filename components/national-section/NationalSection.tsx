import NationalNews from "./NationalNews";
import NewsItem from "../news-items/newsItem";
import OnlineVote from "../onlinevote/OnlineVote";
import { getFetchData } from "@/utils/getFetchData";
import SectionTitle from "../section-title/SectionTitle";
import NationalLedNews from "../national-led-news/NationalLedNews";
import Ads from "../ads/ads";
import GoogleAds from "../ads/googleAds";

export default async function NationalSection() {
    const sectionFourData = await getFetchData('/section/four');
    const category = sectionFourData?.category;
    const {
        sectionFourLeadNews,
        sectionFourRightSide,
        sectionFourWithoutVote,
        sectionFourSubleadNews,
    } = sectionFourData;
    const {
        lead_ad,
        sub_lead_ad,
        right_side_ad,
        section_top_ad,
        section_bottom_ad,
    } = sectionFourData;
    const voteStatus = sectionFourData?.voteStatus;
    const votePoll = sectionFourData?.votePoll;

    const voteOptions =
        votePoll
            ? Object.keys(votePoll)
                .filter(
                    (key) =>
                        key.startsWith("option_") &&
                        key.endsWith("_status") &&
                        votePoll[key] === 1
                )
                .map((statusKey) => {
                    const match = statusKey.match(/\d+/);
                    if (!match) return null;

                    const optionNumber = match[0];

                    return {
                        id: optionNumber,
                        label: votePoll[`option_${optionNumber}_bn`] ?? "",
                        value: optionNumber,
                    };
                })
                .filter((item): item is { id: string; label: string; value: string } => Boolean(item))
            : [];

    return (
        <>
            {section_top_ad?.ad_status === 1 && (
                <>
                    {section_top_ad?.ad_type === "premium" ? (
                        <div className="pt-2">
                            <Ads
                                adsImg={section_top_ad?.ad_thumbnail}
                                adsWidth={768}
                                adsHeight={90}
                            />
                        </div>
                    ) : (
                        <div className="w-3xl h-22.5">
                            <GoogleAds
                                code={section_top_ad?.ad_google_script}
                            />
                        </div>
                    )}
                </>
            )}
            <section className="bg-linear-to-b from-[#F0F5F4] to-[#FFFFFF] py-8 lg:py-16">
                <div className="container">
                    <div className="flex flex-col lg:flex-row">
                        <div className="w-full lg:max-w-[67.343%] lg:pr-5 lg:border-r border-title">
                            <SectionTitle
                                title={category?.name_bn}
                                href={`/${category?.slug_en}`}
                            />
                            <div className="mt-8 flex flex-col md:flex-row">
                                <div className="w-full md:max-w-[61.282%] md:pr-5 md:border-r border-[#A1A1A1]">
                                    {sectionFourLeadNews?.map((item: any) => (
                                        <NationalLedNews
                                            key={item?.post_id}
                                            image={item?.post_thumbnail}
                                            title={item?.post_title}
                                            time={item?.post_published_at}
                                            href={`/${item?.category?.category_slug}/${item?.subcategory?.subcategory_slug}/${item?.post_slug}`}
                                        />
                                    ))}
                                    {lead_ad?.ad_status === 1 && (
                                        <>
                                            {lead_ad?.ad_type === "premium" ? (
                                                <Ads
                                                    adsImg={lead_ad?.ad_thumbnail}
                                                    adsWidth={496}
                                                    adsHeight={372}
                                                />
                                            ) : (
                                                <div className="w-124 h-93">
                                                    <GoogleAds
                                                        code={lead_ad?.ad_google_script}
                                                    />
                                                </div>
                                            )}
                                        </>
                                    )}
                                    <div className="grid grid-cols-2 mt-5 gap-4">
                                        {sectionFourSubleadNews?.map((item: any) => (
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
                                    {sub_lead_ad?.ad_status === 1 && (
                                        <>
                                            {sub_lead_ad?.ad_type === "premium" ? (
                                                <Ads
                                                    adsImg={sub_lead_ad?.ad_thumbnail}
                                                    adsWidth={496}
                                                    adsHeight={372}
                                                />
                                            ) : (
                                                <div className="w-124 h-93">
                                                    <GoogleAds
                                                        code={sub_lead_ad?.ad_google_script}
                                                    />
                                                </div>
                                            )}
                                        </>
                                    )}
                                </div>
                                <div className="w-full md:max-w-[38.599%] md:pl-5 my-5 md:my-0">
                                    <div className="divide-y divide-[#D4D4D4] space-y-4">
                                        <div className="pb-4 last:pb-0">
                                            {sectionFourRightSide?.map((item: any) => (
                                                <NewsItem
                                                    key={item?.post_id}
                                                    image={item?.post_thumbnail}
                                                    imageWidth={104}
                                                    imageHeight={78}
                                                    title={item?.post_title}
                                                    href={`/${item?.category?.category_slug}/${item?.subcategory?.subcategory_slug}/${item?.post_slug}`}
                                                    time={item?.post_published_at}
                                                    timeMt={"10"}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    {right_side_ad?.ad_status === 1 && (
                                        <>
                                            {right_side_ad?.ad_type === "premium" ? (
                                                <Ads
                                                    adsImg={right_side_ad?.ad_thumbnail}
                                                    adsWidth={496}
                                                    adsHeight={372}
                                                />
                                            ) : (
                                                <div className="w-124 h-93">
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
                        {voteStatus === 1 &&
                            votePoll &&
                            votePoll?.status !== 1 &&
                            voteOptions.length > 0 ? (
                            <div className="w-full lg:max-w-[32.5%] lg:pl-5 mt-5 lg:mt-0">
                                <div className="pb-3 lg:pb-6 border-b-2 border-[#A1A1A1] flex gap-3 items-center">
                                    <h4 className="text-xl lg:text-2xl font-semibold font-inter">
                                        অনলাইন ভোট
                                    </h4>
                                </div>
                                <div className="mt-5 flex flex-col">
                                    <OnlineVote
                                        image={votePoll?.thumbnail_image}
                                        date={votePoll?.created_at}
                                        question={votePoll?.title_bn}
                                        options={voteOptions}
                                    />
                                </div>
                            </div>
                        ) : (
                            <div className="w-full lg:max-w-[32.5%] lg:pl-5 mt-5 lg:mt-0">
                                <div className="divide-y divide-[#D4D4D4] space-y-4">
                                    <div className="pb-4 last:pb-0">
                                        {sectionFourWithoutVote?.map((item: any) => (
                                            <NewsItem
                                                key={item?.post_id}
                                                image={item?.post_thumbnail}
                                                imageWidth={104}
                                                imageHeight={78}
                                                title={item?.post_title}
                                                href={`/${item?.category?.category_slug}/${item?.subcategory?.subcategory_slug}/${item?.post_slug}`}
                                                time={item?.post_published_at}
                                                timeMt={"10"}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            {section_bottom_ad?.ad_status === 1 && (
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
