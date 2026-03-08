import Ads from "@/components/ads/ads";
import LoadMoreNews from "./loadMoreNews";
import { getFetchData } from "@/utils/getFetchData";
import LedNews from "@/components/led-news/LedNews";
import NewsItem from "@/components/news-items/newsItem";
import LatestNews from "@/components/latest-news/LatestNews";
import LatestNewsRead from "@/components/LatestNewsRed/LatestNewsRed";

export default async function Page() {
    const lastestNews = await getFetchData('/lastestnews');
    if (!lastestNews)return null;
    const topad = lastestNews?.topad;
    const middleAd = lastestNews?.middleAd;
    const bottomAd = lastestNews?.bottomAd;
    const latestLeadNews = lastestNews?.latestLeadNews;
    const latestLeftSideNews = lastestNews?.latestLeftSideNews;
    const latestRightSideNews = lastestNews?.latestRightSideNews;
    const readMorelatestNews = lastestNews?.readMorelatestNews;
    const latestBotomNews = lastestNews?.latestBotomNews;
    return (
        <section>
            <section className="py-5 sm:py-10">
                <div className="container">
                    <h2 className="text-2xl font-bold">সর্বশেষ সংবাদ</h2>
                    <div className="flex flex-col lg:flex-row mt-8 gap-5">
                        {/* Left column */}
                        <div className="w-full lg:max-w-[32%] flex flex-col gap-5 divide-y divide-[#D4D4D4] order-2 lg:order-1">
                            {latestLeftSideNews?.map((item: any) => (
                                <NewsItem
                                    key={item.post_id}
                                    image={item.post_thumbnail}
                                    imageWidth={140}
                                    imageHeight={104}
                                    title={item.post_title}
                                    time={item.post_published_at}
                                    href={`/${item?.category?.category_slug}/${item?.subcategory?.subcategory_slug}/${item?.post_slug}`}
                                    timeMt={"16"}
                                    imageWrap="max-w-[140px]"
                                />
                            ))}
                        </div>
                        {/* LED news */}
                        <div className="w-full lg:max-w-[42%] lg:px-4.75 lg:border-r lg:border-l border-[#A1A1A1] order-1 lg:order-2">
                            {latestLeadNews?.map((item: any) => (
                                <LedNews
                                    key={item.post_id}
                                    image={item.post_thumbnail}
                                    imageWidth={503}
                                    imageHeight={377}
                                    title={item.post_title}
                                    content={item.post_descriptions}
                                    time={item.post_published_at}
                                    href={`/${item?.category?.category_slug}/${item?.subcategory?.subcategory_slug}/${item?.post_slug}`}
                                    contentMt={"12"}
                                    timeMt={"16"}
                                />
                            ))}
                        </div>
                        {/* Right column - tabs */}
                        <div className="w-full lg:max-w-[25%] flex flex-col gap-5 divide-y divide-[#D4D4D4] order-3 lg:order-3">
                            <div className="group">
                                <input
                                    type="radio"
                                    name="newsTab"
                                    id="latest"
                                    defaultChecked
                                    className="hidden"
                                />
                                <input
                                    type="radio"
                                    name="newsTab"
                                    id="popular"
                                    className="hidden"
                                />
                                {/* Tab labels */}
                                <div className="flex">
                                    <label
                                        htmlFor="latest"
                                        className="w-1/2 text-center text-base leading-6 font-medium py-2 cursor-pointer border-b border-[#A1A1A1] text-title group-has-[#latest:checked]:border-red group-has-[#latest:checked]:text-red"
                                    >
                                        সর্বশেষ
                                    </label>
                                    <label
                                        htmlFor="popular"
                                        className="w-1/2 text-center text-base leading-6 font-medium py-2 cursor-pointer border-b border-[#A1A1A1] text-title group-has-[#popular:checked]:border-red group-has-[#popular:checked]:text-red"
                                    >
                                        বেশি পঠিত
                                    </label>
                                </div>
                                {/* Tab content */}
                                <div className="mt-6">
                                    <div className="hidden group-has-[#latest:checked]:block">
                                        <LatestNews items={latestRightSideNews} />
                                    </div>
                                    <div className="hidden group-has-[#popular:checked]:block">
                                        <LatestNewsRead items={readMorelatestNews} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {topad?.ad_status == 1 && (
                <Ads
                    adsImg={topad?.ad_thumbnail}
                    adsWidth={768}
                    adsHeight={90}
                />
            )}
            <section className="py-7 lg:py-14">
                <div className="container">
                    <div className="space-y-8 divide-y divide-gray-dark max-w-220.5 mx-auto">
                        <LoadMoreNews
                            initialData={latestBotomNews?.data}
                            middleAd={middleAd}
                            nextLink={latestBotomNews?.links?.next}
                        />
                        {bottomAd?.ad_status == 1 && (
                            <div className="pb-4 md:pb-8">
                                <Ads
                                    adsImg={bottomAd?.ad_thumbnail}
                                    adsWidth={768}
                                    adsHeight={90}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </section>
    );
}
