import { getFetchData } from "@/utils/getFetchData";
import LedNews from "@/components/led-news/LedNews";
import NewsItem from "@/components/news-items/newsItem";
import SubCategory from "@/components/subcategory/SubCategory";
import SingleNewsItem from "@/components/news-items/SingleNewsItem";
import NewsBreadcrumb from "@/components/breadcrumb/NewsBreadcrumb";
import CategoryNewsHeadding from "@/components/category/CategoryNewsHeadding";

type CategoryProps = {
    params: Promise<{ category_slug: string; }>;
};

export default async function Page({ params }: CategoryProps) {
    const { category_slug } = await params;
    const category = await getFetchData(`/newsflash/${category_slug}`);
    const categoryLeadNews = category?.categoryLeadNews;
    const categoryLeftNews = category?.categoryLeftNews;
    const categoryRightNews = category?.categoryRightNews;
    const categoryBottomNews = category?.categoryBottomNews;
    return (
        <>
            <section className="py-5 sm:py-10">
                <div className="container">

                    <div>
                        <NewsBreadcrumb
                            title={category.category.category_name}
                        />
                        <SubCategory
                            categorySlug={category.category.category_slug}
                            subCategories={category.category.subcategory}
                        />
                    </div>

                    <div className="flex flex-col lg:flex-row mt-8 gap-5">
                        {categoryLeftNews?.length > 0 && (
                            <div className="w-full lg:max-w-[30.469%] flex flex-col divide-y divide-[#D4D4D4] order-2 lg:order-1">
                                {categoryLeftNews?.map((item: any) => (
                                    <NewsItem
                                        key={item.post_id}
                                        image={item.post_thumbnail}
                                        imageWidth={140}
                                        imageHeight={104}
                                        title={item.post_title}
                                        time={item.post_published_at}
                                        href={`/${item?.category?.category_slug}/${item?.subcategory?.subcategory_slug}/${item?.post_slug}`}
                                        timeMt={"16"}
                                        imageWrap="max-w-[104px]"
                                    />
                                ))}
                            </div>
                        )}

                        {categoryLeadNews?.length > 0 && (
                            <div className="w-full lg:max-w-[42.421%] lg:px-4.75 lg:border-r lg:border-l border-[#A1A1A1] order-1 lg:order-2">
                                {categoryLeadNews?.map((item: any) => (
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
                        )}

                        {categoryRightNews?.length > 0 && (
                            <div className="w-full lg:max-w-[23.829%] order-3 lg:order-3">
                                <CategoryNewsHeadding
                                    highlightText={category.category.category_name}
                                />
                                <div className="flex flex-col divide-y divide-[#D4D4D4] mt-6">
                                    {categoryRightNews?.map((item: any) => (
                                        <NewsItem
                                            key={item.post_id}
                                            title={item.post_title}
                                            image={item.post_thumbnail}
                                            imageWidth={88}
                                            imageHeight={66}
                                            imageWrap="max-w-[88px]"
                                            titleFontWeight={"500"}
                                            href={`/${item?.category?.category_slug}/${item?.subcategory?.subcategory_slug}/${item?.post_slug}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section >
            
            {categoryBottomNews?.length > 0 && (
                <section className="py-7 lg:py-14">
                    <div className="container">
                        <div className="space-y-8 divide-y divide-gray-dark max-w-220.5 mx-auto">
                            {categoryBottomNews?.map((item: any) => (
                                <div className="pb-4 md:pb-8" key={item.post_id}>
                                    <SingleNewsItem
                                        image={item.post_thumbnail}
                                        imageWidth={340}
                                        imageHeight={304}
                                        title={item.post_title}
                                        time={item.post_published_at}
                                        href={item.post_slug}
                                        timeMt={16}
                                        SingleimageWrap="max-w-[200px]"
                                        content={item.post_descriptions}
                                        titleMb={12}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
            
        </>
    );
}
