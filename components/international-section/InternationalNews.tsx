import LedNews from "../led-news/LedNews";
import NewsItem from "../news-items/newsItem";
import HasTagButton from "../button/HasTagButton";
import LatestNews from "../latest-news/LatestNews";
import { getFetchData } from "@/utils/getFetchData";
import SectionTitle from "../section-title/SectionTitle";
import LatestNewsRead from "../LatestNewsRed/LatestNewsRed";

export default async function InternationalNews() {
    const sectionTen = await getFetchData('/section/ten');
    if (!sectionTen) return null;
    const {
        sectionTenLeftSide,
        sectionTenLeadNews,
        sectionTenSubleadNews,
    } = sectionTen;
    const isAllEmpty =
        !sectionTenLeftSide &&
        (!sectionTenLeadNews?.length) &&
        (!sectionTenSubleadNews?.length);
    if (isAllEmpty) return null;
    const sectionTenLatest = sectionTen?.sectionTenLatest;
    const sectionTenReadMore = sectionTen?.sectionTenReadMore;
    const tags = sectionTen?.tags;
    
    return (
        <section className="py-8 lg:py-16 bg-linear-to-b from-[#F0F5F4] to-[#FFFFFF]">
            <div className="container">
                <div className="flex flex-col lg:flex-row lg:divide-x divide-[#D4D4D4] ">
                    <div className="w-full lg:max-w-[74.609%] lg:pr-5">
                        <div className="mb-8">
                            <SectionTitle title={sectionTenLeadNews[0]?.category?.category_name} href={sectionTenLeadNews[0]?.category?.category_slug} />
                        </div>
                        <div className="flex flex-col sm:flex-row sm:divide-x divide-[#D4D4D4]">
                            <div className="w-full sm:max-w-[42.977%] sm:pr-5 space-y-3 lg:space-y-5 divide-y divide-[#D4D4D4] mt-5 sm:mt-0 order-2 sm:order-1">
                                {sectionTenLeftSide?.map((item: any) => (
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
                            <div className="w-full sm:max-w-[calc(100%-42.977%)] sm:pl-5 order-1 sm:order-2">
                                {sectionTenLeadNews?.map((item: any) => (
                                    <LedNews
                                        key={item.post_id}
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
                        </div>
                        <div className="border-t border-[#A1A1A1] mt-5 pt-5 grid sm:grid-cols-3 gap-4 sm:divide-x divide-[#D4D4D4]">
                            {sectionTenSubleadNews?.map((item: any) => (
                                <div className="pr-4" key={item.post_id}>
                                    <NewsItem
                                        title={item?.post_title}
                                        content={item?.post_descriptions}
                                        time={item?.post_published_at}
                                        href={`/${item?.category?.category_slug}/${item?.subcategory?.subcategory_slug}/${item?.post_slug}`}
                                        titleMb={"12"}
                                        timeMt={"16"}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full lg:max-w-[25.390%] lg:pl-5 order-3 lg:order-3 mt-5 lg:mt-0">
                        <div className="flex flex-col gap-5">
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
                                <div className="flex">
                                    <label
                                        htmlFor="latest"
                                        className="w-1/2 text-center text-base leading-6 font-medium py-2 cursor-pointer border-b border-[#A1A1A1] text-title  group-has-[#latest:checked]:border-red group-has-[#latest:checked]:text-red"
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
                                <div className="mt-6">
                                    {sectionTenLatest && (
                                        <div className="hidden group-has-[#latest:checked]:block">
                                        <LatestNews items={sectionTenLatest} />
                                    </div>
                                    )}
                                    {sectionTenReadMore && (
                                        <div className="hidden group-has-[#popular:checked]:block">
                                        <LatestNewsRead items={sectionTenReadMore} />
                                    </div>
                                    )}
                                </div>
                            </div>
                            {tags && (
                                <div className="bg-[#FBF7EF] p-5">
                                    <h5 className="text-[17px] font-semibold ">ট্রেন্ডিং হ্যাসট্যাগ</h5>
                                    <div className="flex items-center flex-wrap gap-2 mt-3">
                                        {tags?.map((item: any) => (
                                            <HasTagButton
                                                key={item?.tag_id}
                                                href={`/tags/${item?.tag_slug}`}
                                                label={item?.tag_name}
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
