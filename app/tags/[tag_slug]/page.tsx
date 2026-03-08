import { getFetchData } from "@/utils/getFetchData";
import NewsFilterBar from "@/components/news-filter/NewsFilterBar";
import LoadMoreTagNews from "./LoadMoreTagNews";

type TagNewsProps = {
    params: Promise<{
        tag_slug: string;
    }>;
};

export default async function Page({ params }: TagNewsProps) {
    const { tag_slug } = await params;
    const news = await getFetchData(`/tag/${tag_slug}?orderBy=latest`);
    const tagSection = news?.tagSection;
    const initialPosts = news?.posts?.data;
    const total = news?.posts?.meta?.total;
    const nextLink = initialPosts?.links?.next || null;

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
                                { label: "সর্বশেষ", value: "latest" },
                                { label: "পুরোনো", value: "oldest" },
                            ]}
                        />
                    </div>
                </div>
            </section>

            <section className="py-7 lg:py-14">
                <div className="container">
                    <LoadMoreTagNews
                        initialData={initialPosts}
                        nextLink={nextLink}
                        tagSlug={tag_slug}
                    />
                </div>
            </section>
        </>
    );
}
