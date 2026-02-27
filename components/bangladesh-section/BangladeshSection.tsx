import SectionTitle from "../section-title/SectionTitle";
import NewsItem from "../news-items/newsItem";
import LedNews from "../led-news/LedNews";
import ledImage from "../../assets/image/led-image.png"
import Button from "../button/Button";
import { subdistricts } from "@/data/subdistricts";
import { districts } from "@/data/districts";
import { divisions } from "@/data/division";
import CustomSelect from "../selects/CustomSelect";
import { getFetchData } from "@/utils/getFetchData";

export default async function BangldeshNews() {
    const sectionThreeData = await getFetchData('/section/three');
    const category = sectionThreeData?.category;
    const sectionThreeLeadNews = sectionThreeData?.sectionThreeLeadNews;
    const sectionThreeLeftSide = sectionThreeData?.sectionThreeLeftSide;
    const sectionThreeRightSide = sectionThreeData?.sectionThreeRightSide;

    return (
        <section className="py-8 lg:py-16">
            <div className="container">
                <SectionTitle
                    title={category?.category_name}
                    href={`/${category?.category_slug}`}
                />

                <div className="bg-[#E0EBF0] p-4 lg:p-8 mt-8 ">
                    <h5 className="text-center mb-3.5">আপনার এলাকার খবর</h5>
                    <form action="" className="flex flex-col sm:flex-row items-center gap-3">
                        <div className="w-full grid sm:grid-cols-3 gap-3 sm:flex-1">
                            <CustomSelect
                                options={divisions}
                            />
                            <CustomSelect
                                options={districts}
                            />
                            <CustomSelect
                                options={subdistricts}
                            />
                        </div>
                        <div className="w-full sm:max-w-40 lg:max-w-60">
                            <Button
                                text="সার্চ করুন"
                            />
                        </div>
                    </form>
                </div>

                <div className="flex flex-col lg:flex-row mt-8">
                    <div className="w-full lg:max-w-[32.031%] lg:pr-5 mt-4 lg:mt-0 flex flex-col gap-2.5 lg:gap-5 divide-y divide-[#D4D4D4] order-2 lg:order-1">
                        {sectionThreeLeftSide?.map((item: any) => (
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
                        {sectionThreeLeadNews?.map((item: any) => (
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
                    </div>
                    <div className="w-full lg:max-w-[25.391%] lg:pl-5 mt-4 lg:mt-0 flex flex-col gap-3 lg:gap-5 divide-y divide-[#D4D4D4] order-3 lg:order-3">
                        {sectionThreeRightSide?.map((item: any) => (
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
                    </div>
                </div>
            </div>
        </section>
    );
}
