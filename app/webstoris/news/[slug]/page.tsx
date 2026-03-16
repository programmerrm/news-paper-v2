import Link from "next/link";
import { getFetchData } from "@/utils/getFetchData";
import LoadMoreWebStories from "./LoadMoreWebStories";
import NewsBreadcrumb from "@/components/breadcrumb/NewsBreadcrumb";

type SingleWebStoriesProps = {
    params: Promise<{ slug: string; }>;
};

export default async function Page({ params }: SingleWebStoriesProps) {
    const { slug } = await params;
    const webstoris = await getFetchData(`/webstores/details/page/${slug}`);
    const webStories = webstoris?.webStories?.data;
    const nextLink = webstoris?.webStories?.links?.next || null;
    const categories = webstoris?.categories;
    const category = webstoris?.category;
    return (
        <section className="pt-5 md:pt-10 pb-7 md:pb-14">
            <div className="container">
                <div>
                    <NewsBreadcrumb title="ওয়েব স্টোরিস" subtitle={category?.category_name} />
                    <ul className="flex items-center gap-y-2 gap-x-6 flex-wrap mt-2">
                        {categories?.map((category: any) => (
                            <li key={category.category_id}>
                                <Link
                                    href={`/webstoris/news/${category.category_slug}`}
                                    className="relative top-1/2 pl-3 
                      after:absolute after:top-1/2 after:-translate-y-1/2
                      after:left-0 after:w-1.5 after:h-1.5
                      after:bg-[#B6C3C8] after:rounded-full
                      text-black"
                                >
                                    {category.category_name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <LoadMoreWebStories
                    initialData={webStories}
                    nextLink={nextLink}
                />
            </div>
        </section>
    );
}
