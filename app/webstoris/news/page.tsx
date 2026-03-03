import Button from "@/components/button/Button";
import { getFetchData } from "@/utils/getFetchData";
import WebStorisCard from "@/components/storis/webStorisCard";
import SubCategory from "@/components/subcategory/SubCategory";
import NewsBreadcrumb from "@/components/breadcrumb/NewsBreadcrumb";

export default async function Page() {
    const webstoris = await getFetchData('/webstores/details/page');
    const webStories = webstoris?.webStories;
    const tags = webstoris?.tags;
    return (
        <>
            <section className="pt-5 md:pt-10 pb-7 md:pb-14">
                <div className="container">
                    <div>
                        <NewsBreadcrumb
                            title="ওয়ের স্টোরিস"
                        />
                        <SubCategory />
                    </div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-3 sm:mt-7">
                        {webStories?.map((item: any) => (
                            <WebStorisCard
                                key={item?.post_id}
                                post_thumbnail={item?.post_thumbnail}
                                post_title={item?.post_title}
                                post_published_at={item?.post_published_at}
                            />
                        ))}
                    </div>
                    <div className="max-w-60 mx-auto mt-10">
                        <Button
                            text="আরো দেখুন"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
