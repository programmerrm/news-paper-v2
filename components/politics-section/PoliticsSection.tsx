import LedNews from "../led-news/LedNews";
import NewsItem from "../news-items/newsItem";
import { getFetchData } from "@/utils/getFetchData";
import SectionTitle from "../section-title/SectionTitle";
import NationalNews from "../national-section/NationalNews";

export default async function PoliticsSection() {
    const sectionSix = await getFetchData('/section/six');
    const category = sectionSix?.category;
    const sectionSixLeadNews = sectionSix?.sectionSixLeadNews;
    const sectionSixSubleadNews = sectionSix?.sectionSixSubleadNews;
    const sectionSixRightSide = sectionSix?.sectionSixRightSide;
    return (
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
                        {sectionSixLeadNews?.map((item: any) => (
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
                    </div>
                    <div className="sm:px-5 sm:border-x border-[#A1A1A1]">
                        <div className="space-y-5 divide-y divide-[#D4D4D4]">
                            {sectionSixSubleadNews?.map((item: any) => (
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
    );
}
