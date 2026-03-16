import NewsBreadcrumb from "@/components/breadcrumb/NewsBreadcrumb";
import SectionTitle from "@/components/section-title/SectionTitle";
import VideoCardItem from "@/components/video-section/videocardItem";
import VideoCategorySection from "@/components/video-section/VideoCategorySection";
import { getFetchData } from "@/utils/getFetchData";
import Link from "next/link";

export default async function Page() {
    const videosData = await getFetchData('/videos/galleries');
    const categories = videosData?.categories;
    const leadVideo = videosData?.leadVideo;
    const latestVideos = videosData?.latestVideos;
    const categoryWise = videosData?.categoryWise;
    return (
        <>
            <section className="pb-2 pt-5 sm:pt-10">
                <div className="container">
                    <div>
                        <NewsBreadcrumb
                            title="ভিডিও খবর"
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
                <VideoCategorySection leadVideo={leadVideo} latestVideos={latestVideos} />
            </section>
            {categoryWise && (
                <>
                    {categoryWise?.map((item: any) => (
                        <section className="border-b border-[#ddd] py-8 lg:py-16 last:border-b-0" key={item.category_id}>
                            <div className="container">
                                <SectionTitle
                                    title={item?.category_name}
                                    href={`/videos/${item?.category_slug}`}
                                />
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 mt-8">
                                    {item?.videos?.map((item: any) => (
                                        <VideoCardItem
                                            key={item.video_id}
                                            viderUrl={item?.video_url}
                                            title={item?.video_title}
                                            time={item?.video_published_at}
                                            href={`/videos/${item?.category?.category_slug}/${item?.video_slug}`}
                                            imageWidth={305}
                                            imageHeight={229}
                                        />
                                    ))}

                                </div>
                            </div>
                        </section>
                    ))}
                </>
            )}
        </>
    );
}
