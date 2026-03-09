import HasTagButton from "@/components/button/HasTagButton";
import CategoryNewsHeadding from "@/components/category/CategoryNewsHeadding";
import CommentBox from "@/components/comment-box/CommentBox";
import ReportImage from "@/components/details/ReportImage";
import ReportTitle from "@/components/details/ReportTitle";
import ReportNews from "@/components/details/RportNews";
import ImageCategoryItem from "@/components/gallary-section/imageCategoryItem";
import ShareIcons from "@/components/shareicon/ShareIcon";
import { getFetchData } from "@/utils/getFetchData";

type SinglePhotoProps = {
    params: Promise<{ news_slug: string; }>;
};

export default async function Page({ params }: SinglePhotoProps) {
    const { news_slug } = await params;
    const singlePhotoNews = await getFetchData(`/gallery/details/${news_slug}`);
    const galleries = singlePhotoNews?.galleries;
    const rightSideNews = singlePhotoNews?.rightSideNews;
    return (
        <>
            <section className="pt-7 sm:pt-10 pb-7 sm:pb-14">
                <div className="container">
                    <div className="flex flex-col lg:flex-row">
                        <div className="flex flex-col sm:flex-row w-full lg:max-w-[76.171%]">
                            <div className="w-full sm:max-w-20 md:max-w-24 ">
                                <ShareIcons
                                    showZoomButtons={false}
                                />
                            </div>
                            <div className="w-full sm:max-w-[calc(100%-80px)] md:max-w-[calc(100%-96px)] sm:px-8 xl:px-10 space-y-4 sm:space-y-8">
                                <div className="sm:px-8 border-b border-[#B6C3C8]">
                                    <ReportTitle
                                        category="রাজনীতি"
                                        title={galleries?.post_title}
                                    />
                                    <div className="flex items-center justify-between gap-3 mt-2 py-3 flex-wrap">
                                        <ReportNews
                                            reporterName="রিপোটারের নাম"
                                            publishDate="৫ নম্বেবর ২০২৫, ১৪:১৬মিনিট"
                                        />
                                    </div>
                                </div>
                                {galleries?.postDetails?.map((item: any) => (
                                    <div className="sm:px-7.5" key={item.post_details_id}>
                                        <ReportImage
                                            src={item?.post_detail_thumbnail}
                                            alt="led image"
                                            caption={item?.post_detail_image_caption}
                                        />
                                    </div>
                                ))}
                                <div className="bg-[#FBF7EF] p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                    <h5>আরো পড়ুন:</h5>
                                    <div className="flex items-center gap-2 flex-wrap">
                                        {galleries?.tags?.map((item: any) => (
                                            <HasTagButton
                                                href={`/tags/${item?.tag_slug}`}
                                                label={item?.tag_name}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <CommentBox />
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:max-w-[23.828%] mt-4 lg:mt-0">
                            <CategoryNewsHeadding highlightText="রাজনীতি" />
                            {rightSideNews?.map((item: any) => (
                                <div className="space-y-4 divide-y divide-[#D4D4D4] mt-6">
                                    <ImageCategoryItem
                                        href="/imagedetails"
                                        image={item?.post_thumbnail}
                                        title={item?.post_title}
                                        imageWidth={120}
                                        imageHeight={90}
                                        iconHeight={16}
                                        iconWidth={16}
                                        iconPositionClass="bottom-2 left-2"
                                        headingTag="h5"
                                        wrapperClass="flex items-start gap-3 md:gap-4 pb-4.5"
                                        imageWrapperClass="w-full max-w-35"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
