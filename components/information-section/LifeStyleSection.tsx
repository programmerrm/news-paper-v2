import { getFetchData } from "@/utils/getFetchData";
import NewsItem from "../news-items/newsItem";
import SectionHeader from "./SectionHeader";

export default async function LifeStyleSection() {
    const sectionThirteen = await getFetchData('/section/thirteen');
    if (!sectionThirteen) return null;
    const {
        section13PartOne,
        section13PartTwo,
        section13PartThree,
    } = sectionThirteen;
    const isAllEmpty =
        !section13PartOne &&
        (!section13PartTwo?.length) &&
        (!section13PartThree?.length);
    if (isAllEmpty) return null;
    return (
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
                    <div className="w-full lg:max-w-[32.579% lg:pr-6.75 divide-y divide-gray-dark space-y-3 lg:space-y-5">                        <SectionHeader
                        className="lg:hidden"
                        title={section13PartOne[0]?.category.category_name}
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
                    </div>
                    <div className="w-full lg:max-w-[34.688%] lg:px-6.75 divide-y divide-gray-dark space-y-3 lg:space-y-5">
                        <SectionHeader
                            className="lg:hidden"
                            title={section13PartTwo[0].category.category_name}
                        />
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
                            title={section13PartThree[0].category.category_name}
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
                    </div>
                </div>
            </div>
        </section>
    );
}
