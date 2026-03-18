import NewsBreadcrumb from "@/components/breadcrumb/NewsBreadcrumb";
import VideoCardItem from "@/components/video-section/videocardItem";
import { getFetchData } from "@/utils/getFetchData";
import Link from "next/link";

export default async function Page() {
    const reelsData = await getFetchData('/videos/reelgalleries');
    const categories = reelsData?.category;
    const leadReel = reelsData?.latestReelVideoGaller?.data;
    return (
        <>
            <section className="pb-2 pt-5 sm:pt-10">
                <div className="container">
                    <div>
                        <NewsBreadcrumb
                            title="রিলস খবর"
                        />
                        <ul className="flex items-center gap-y-2 gap-x-6 flex-wrap mt-2">
                            {categories.map((category: any) => (
                                <li key={category.category_id}>
                                    <Link
                                        href={`/reels/${category.category_slug}`}
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

                    {leadReel && (
                        <>
                            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-3 sm:mt-7">
                                {leadReel?.map((item: any) => (
                                    <VideoCardItem
                                        key={item?.post_id}
                                        viderUrl={item?.video_url}
                                        title={item?.video_title}
                                        time={item?.video_published_at}
                                    />
                                ))}
                            </div>
                        </>
                    )}

                </div>
            </section>

        </>
    );
}
