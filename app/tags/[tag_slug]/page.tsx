import Button from "@/components/button/Button";
import { getFetchData } from "@/utils/getFetchData";
import NewsFilterBar from "@/components/news-filter/NewsFilterBar";
import SingleNewsItem from "@/components/news-items/SingleNewsItem";

type TagNewsProps = {
    params: Promise<{
        tag_slug: string;
    }>;
};

export default async function Page({ params }: TagNewsProps) {
    const { tag_slug } = await params;
    const news = await getFetchData(`/tag/${tag_slug}`);
    const tagSection = news?.tagSection;
    const total = news?.total;
    return (
        <>
            <section className="py-5 sm:py-10">
                <div className="container">
                    <h2 className="text-2xl font-bold">{tagSection?.name_bn}</h2>
                    <div className="mt-7 pb-7 border-b border-[#A1A1A1] sm:px-5">
                        <NewsFilterBar
                            total={total}
                            options={[
                                { label: "রিলেভেন্ট খবর", value: "relevant" },
                                { label: "রিলেভেন্ট খবর1", value: "relevant1" },
                                { label: "রিলেভেন্ট খবর2", value: "relevant2" },
                                { label: "রিলেভেন্ট খবর3", value: "relevant3" },
                            ]}
                        />
                    </div>
                </div>
            </section>
            <section className="py-7 lg:py-14">
                <div className="container">
                    <div className="space-y-8 divide-y divide-gray-dark max-w-220.5 mx-auto">
                        {news?.posts?.map((item: any) => (
                            <div className="pb-4 md:pb-8" key={item?.post_id}>
                                <SingleNewsItem
                                    image={item?.post_thumbnail}
                                    imageWidth={340}
                                    imageHeight={304}
                                    title={item?.post_title}
                                    time={item?.post_published_at}
                                    href={`/${item?.category?.category_slug}/${item?.subcategory?.subcategory_slug}/${item?.post_slug}`}
                                    timeMt={16}
                                    SingleimageWrap="max-w-[200px]"
                                    content={item?.post_descriptions}
                                    titleMb={12}
                                />
                            </div>
                        ))}
                        <div className="pb-4 md:pb-8 pt-2 max-w-60 mx-auto">
                            <Button
                                text="আরো দেখুন"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
