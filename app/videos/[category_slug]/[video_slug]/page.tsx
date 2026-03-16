import { getFetchData } from "@/utils/getFetchData";
import FullDetailsItem from "./fullDetailsItem";
import HasTagButton from "@/components/button/HasTagButton";
import CommentBox from "@/components/comment-box/CommentBox";
import CategoryNewsHeadding from "@/components/category/CategoryNewsHeadding";
import ShareIcons from "@/components/shareicon/ShareIcon";
import ReportTitle from "@/components/details/ReportTitle";
import ReportNews from "@/components/details/RportNews";
import VideoPlayer from "@/components/video/VideoPage";
import TextNews from "@/components/details/TextNews";

type VideoProps = {
    params: Promise<{
        category_slug: string;
        video_slug: string;
    }>;
};

export default async function Page({ params }: VideoProps) {
    const { category_slug, video_slug } = await params;
    const video = await getFetchData(`/videos/galleries/${category_slug}/${video_slug}`);
    const leadVideo = video?.leadVideo;
    const rightSideNews = video?.rightSideNews;
    const tags = video?.tags;

    return (
        <>
            <section className="pt-10 pb-14">
                <div className="container">
                    <div className="flex flex-col lg:flex-row">
                        <div className="flex flex-col sm:flex-row w-full lg:max-w-[76.171%]">
                            <div className="w-full sm:max-w-20 md:max-w-24 ">
                                <ShareIcons />
                            </div>

                            <div className="w-full sm:max-w-[calc(100%-80px)] md:max-w-[calc(100%-96px)] sm:px-8 xl:px-10 space-y-4 sm:space-y-8">

                                <div className="sm:px-8 border-b border-[#B6C3C8]">
                                    <ReportTitle
                                        category={leadVideo?.category?.category_name}
                                        title={leadVideo?.video_title}
                                    />

                                    <div className="flex items-center justify-between gap-3 mt-2 py-3 flex-wrap">
                                        <ReportNews
                                            reporterName="রিপোটারের নাম"
                                            publishDate={leadVideo?.video_published_at}
                                        />
                                    </div>
                                </div>

                                <div className="sm:px-7.5">
                                    <VideoPlayer
                                        src={leadVideo?.video_url}
                                    />
                                </div>

                                <div className="sm:px-7.5 space-y-4 sm:space-y-8">
                                    <TextNews
                                        text={leadVideo?.video_descriptions}
                                    />

                                </div>
                                <div className="bg-[#FBF7EF] p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                    <h5>আরো পড়ুন:</h5>
                                    <div className="flex items-center gap-2 flex-wrap">
                                        {tags?.map((item: any) => (
                                            <HasTagButton
                                                key={item?.tag_id}
                                                href={`/tags/${item?.tag_slug}`}
                                                label={item?.tag_name}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <CommentBox post_id={leadVideo?.video_id} />
                                </div>
                            </div>

                        </div>

                        <div className="w-full lg:max-w-[23.828%] mt-4 lg:mt-0">

                            <CategoryNewsHeadding highlightText={leadVideo?.category?.category_name} />

                            <div className="w-full flex flex-col space-y-4.5 divide-y divide-[#D4D4D4] mt-6">
                                {rightSideNews?.map((item: any) => (
                                    <div key={item?.video_id}>
                                        <FullDetailsItem
                                            videoSrc={item?.video_url}
                                            title={item?.video_title}
                                            href={`/videos/${item?.category?.category_slug}/${item?.video_slug}`}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
