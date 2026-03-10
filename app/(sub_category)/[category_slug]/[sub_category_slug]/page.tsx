import { getFetchData } from "@/utils/getFetchData";
import NewsItem from "@/components/news-items/newsItem";
import LedNews from "@/components/led-news/LedNews";
import SingleNewsItem from "@/components/news-items/SingleNewsItem";
import CategoryNewsHeadding from "@/components/category/CategoryNewsHeadding";
import NewsBreadcrumb from "@/components/breadcrumb/NewsBreadcrumb";
import SectionHeader from "@/components/category/SectionHeader";
import LoadMoreNews from "./loadMoreNews";

type SubCategoryProps = {
    params: Promise<{
        category_slug: string;
        sub_category_slug: string;
    }>;
};

export default async function Page({ params }: SubCategoryProps) {
    const { category_slug, sub_category_slug } = await params;
    const sub_category = await getFetchData(`/newsflash/${category_slug}/${sub_category_slug}`);
    const subcategory = sub_category?.subcategory;
    const subCategoryLeadNews = sub_category?.subCategoryLeadNews;
    const subCategoryLeftNews = sub_category?.subCategoryLeftNews;
    const subCategoryRightNews = sub_category?.subCategoryRightNews;
    const specialNews = sub_category?.specialNews;
    const subCategoryBottomNews = sub_category?.subCategoryBottomNews;
    const ads = sub_category?.ads;
    const subCategoryafterAdBottomNews = sub_category?.subCategoryafterAdBottomNews;
    const subCategoryBottomNewsLastPaignate = sub_category?.subCategoryBottomNewsLastPaignate;

    return (
        <>
            
            <section className="py-5 sm:py-10">
                <div className="container">
                    <div>
                        <NewsBreadcrumb
                            title={subcategory?.category?.category_name}
                            subtitle={subcategory?.subcategory_name}
                        />
                    </div>
                    <div className="flex flex-col lg:flex-row mt-8 gap-5">
                        {subCategoryLeftNews?.length > 0 && (
                            <div className="w-full lg:max-w-[30.469%] flex flex-col divide-y divide-[#D4D4D4] order-2 lg:order-1">
                                {subCategoryLeftNews?.map((item: any) => (
                                    <NewsItem
                                        key={item?.post_id}
                                        imageWidth={140}
                                        imageHeight={104}
                                        image={item?.post_thumbnail}
                                        title={item?.post_title}
                                        time={item?.post_published_at}
                                        href={item?.post_slug}
                                        timeMt={"16"}
                                        imageWrap="max-w-[104px]"
                                    />
                                ))}
                            </div>
                        )}
                        {subCategoryLeadNews?.length > 0 && (
                            <div className="w-full lg:max-w-[42.421%] lg:px-4.75 lg:border-r lg:border-l border-[#A1A1A1] order-1 lg:order-2">
                                {subCategoryLeadNews?.map((item: any) => (
                                    <LedNews
                                        key={item?.post_id}
                                        image={item?.post_thumbnail}
                                        imageWidth={503}
                                        imageHeight={377}
                                        title={item?.post_title}
                                        content={item?.post_descriptions}
                                        time={item?.post_published_at}
                                        href={item?.post_slug}
                                        contentMt={"12"}
                                        timeMt={"16"}
                                    />
                                ))}
                            </div>
                        )}
                        {subCategoryRightNews?.length > 0 && (
                            <div className="w-full lg:max-w-[23.829%] order-3 lg:order-3">
                                <CategoryNewsHeadding
                                    highlightText={subcategory.subcategory_name}
                                />
                                {subCategoryRightNews?.map((item: any) => (
                                    <div className="flex flex-col divide-y divide-[#D4D4D4] mt-6" key={item.post_id}>
                                        <NewsItem
                                            title={item?.post_title}
                                            image={item?.post_thumbnail}
                                            imageWidth={88}
                                            imageHeight={66}
                                            imageWrap="max-w-[88px]"
                                            titleFontWeight={"500"}
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                        
                    </div>
                </div>
            </section>
            <section className="bg-linear-to-b from-[#F0F5F4] to-[#FFFFFF] py-8 lg:py-16 border-b border-[#B6C3C8]">
                <div className="container">
                    <SectionHeader />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
                        {specialNews?.map((item: any) => (
                            <LedNews
                                key={item?.post_id}
                                image={item?.post_thumbnail}
                                imageWidth={305}
                                imageHeight={229}
                                title={item?.post_title}
                                time={item?.post_published_at}
                                href={`/${item?.category?.category_slug}/${item?.subcategory?.subcategory_slug}/${item?.post_slug}`}
                                timeMt={"16"}
                                headingLevel="h5"
                                gap="gap-3"
                            />
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-7 lg:py-14">
                <div className="container">
                    <div className="space-y-8 divide-y divide-gray-dark max-w-220.5 mx-auto">
                        {subCategoryBottomNews?.map((item: any) => (
                            <div className="pb-4 md:pb-8" key={item.post_id}>
                                <SingleNewsItem
                                    image={item?.post_thumbnail}
                                    imageWidth={340}
                                    imageHeight={304}
                                    title={item?.post_title}
                                    time={item?.post_published_at}
                                    href={item?.post_slug}
                                    timeMt={16}
                                    SingleimageWrap="max-w-[200px]"
                                    content={item?.post_descriptions}
                                    titleMb={12}
                                />
                            </div>
                        ))}
                        {subCategoryafterAdBottomNews?.map((item: any) => (
                            <div className="pb-4 md:pb-8" key={item.post_id}>
                                <SingleNewsItem
                                    image={item?.post_thumbnail}
                                    imageWidth={340}
                                    imageHeight={304}
                                    title={item?.post_title}
                                    time={item?.post_published_at}
                                    href={item?.post_slug}
                                    timeMt={16}
                                    SingleimageWrap="max-w-[200px]"
                                    content={item?.post_descriptions}
                                    titleMb={12}
                                />
                            </div>
                        ))}
                        <LoadMoreNews
                            initialData={subCategoryBottomNewsLastPaignate?.data}
                            nextLink={subCategoryBottomNewsLastPaignate?.links?.next}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
