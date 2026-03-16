import NewsBreadcrumb from "@/components/breadcrumb/NewsBreadcrumb";
import Button from "@/components/button/Button";
import VideoCardItem from "@/components/video-section/videocardItem";
import VideoCategorySection from "@/components/video-section/VideoCategorySection";
import { getFetchData } from "@/utils/getFetchData";
import Link from "next/link";

type CategoryVideoProps = {
    params: Promise<{ category_slug: string; }>;
};

export default async function Page({ params }: CategoryVideoProps) {
    const { category_slug } = await params;
    const categoryVideoData = await getFetchData(`/videos/galleries/${category_slug}`);
    const leadVideo = categoryVideoData?.leadVideo;
    const middleVideo = categoryVideoData?.middleVideo;
    const categories = categoryVideoData?.categories;
    return (
        <>
            <section className="pb-2 pt-5 sm:pt-10">
                <div className="container">
                    <div>
                        <NewsBreadcrumb
                            title="ভিডিও খবর"
                            subtitle={leadVideo?.category?.category_name}
                        />
                        <ul className="flex items-center gap-y-2 gap-x-6 flex-wrap mt-2">
                            {categories.map((category: any) => (
                                <li key={category.category_id}>
                                    <Link
                                        href={`/videos/${category.category_slug}`}
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
                </div>
            </section>

            <section>
                <VideoCategorySection leadVideo={leadVideo} latestVideos={middleVideo} />
            </section>

            <section className="border-b border-[#ddd] py-8 lg:py-16 last:border-b-0">

                <div className="container">
                    <div className="max-w-205.5 mx-auto border-b border-gray-dark py-4 md:py-8 first:pt-0 space-y-2.5 lg:space-y-5">
                        {middleVideo?.map((item: any) => (
                            <VideoCardItem
                                title={item?.video_title}
                                time={item?.video_published_at}
                                href={`/videos/${item?.category?.category_slug}/${item?.video_slug}`}
                                viderUrl={item?.video_url}
                                imageWidth={340}
                                imageHeight={255}
                                content={item?.video_descriptions}
                                className="sm:flex-row gap-4 md:gap-8"
                            />
                        ))}
                    </div>
                </div>
            </section>

        </>
    );
}
