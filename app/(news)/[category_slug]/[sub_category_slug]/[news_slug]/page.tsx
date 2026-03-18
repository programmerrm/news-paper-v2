import { getFetchData } from "@/utils/getFetchData";
import Image from "next/image";
import { notFound } from 'next/navigation';
import NewsItem from "@/components/news-items/newsItem";
import CategoryNewsHeadding from "@/components/category/CategoryNewsHeadding";
import ShareIcons from "@/components/shareicon/ShareIcon";
import HasTagButton from "@/components/button/HasTagButton";
import CommentBox from "@/components/comment-box/CommentBox";
import LedNews from "@/components/led-news/LedNews";
import ReportImage from "@/components/details/ReportImage";
import ReportTitle from "@/components/details/ReportTitle";
import ReportNews from "@/components/details/RportNews";
import TextNews from "@/components/details/TextNews";
import TextHighlight from "./textHighlight";
import ReadMoreCard from "./readMoreCard";
import Ads from "@/components/ads/ads";
import AudioPlayer from "./audioPlayer";

type NewsProps = {
    params: Promise<{
        category_slug: string;
        sub_category_slug: string;
        news_slug: string;
    }>;
};

export default async function Page({ params }: NewsProps) {
    const { category_slug, sub_category_slug, news_slug } = await params;
    const news = await getFetchData(`/posts/${category_slug}/${sub_category_slug}/${news_slug}`);
    if (!news) {
        notFound();
    }
    const detailsNews = news?.detailsNews;
    const postDetails = news?.postDetails;
    return (
        <section className="pt-5 lg:pt-10 pb-7 lg:pb-14" id="news-section">
            <div className="container">
                <div className="flex flex-col lg:flex-row">
                    <div className="flex flex-col sm:flex-row w-full lg:max-w-[76.171%]">
                        <div className="w-full sm:max-w-20 md:max-w-24 ">
                            <ShareIcons />
                        </div>
                        <div className="w-full sm:max-w-[calc(100%-80px)] md:max-w-[calc(100%-96px)] sm:px-8 xl:px-10 space-y-4 sm:space-y-8">
                            <div className="sm:px-8 border-b border-[#B6C3C8]">
                                <ReportTitle
                                    category={detailsNews?.category?.category_name}
                                    title={detailsNews?.post_title}
                                />
                                <div className="flex items-center justify-between gap-3 mt-2 py-3 flex-wrap">
                                    <ReportNews
                                        reporterName={detailsNews?.author?.author_name}
                                        publishDate={detailsNews?.post_published_at}
                                    />
                                    {detailsNews?.post_voice && (
                                        <AudioPlayer src={detailsNews?.post_voice} />
                                    )}
                                </div>
                            </div>
                            <div className="sm:px-7.5">
                                <ReportImage
                                    src={detailsNews?.post_thumbnail}
                                    alt={detailsNews?.post_title}
                                    caption={detailsNews?.post_caption}
                                />
                            </div>
                            <div className="sm:px-7.5 space-y-4 sm:space-y-8">
                                <TextNews
                                    text={detailsNews?.post_descriptions}
                                />
                                {postDetails?.map((item: any, index: any) => (
                                    <div className="space-y-5" key={index}>
                                        {item?.post_details_ad_status === 0 && (
                                            <>
                                                {item?.post_details_ad && (
                                                    <Ads
                                                        key={index}
                                                        adsImg={item?.post_details_ad}
                                                        adsWidth={740}
                                                        adsHeight={137}
                                                    />
                                                )}
                                            </>
                                        )}
                                        {item?.post_details_content && (
                                            <TextNews
                                                key={index}
                                                text={item?.post_details_content}
                                            />
                                        )}
                                        {item?.post_details_lead_caption && (
                                            <TextHighlight
                                                key={index}
                                                text={item?.post_details_lead_caption}
                                            />
                                        )}
                                        {item?.more_read_news && (
                                            <ReadMoreCard
                                                key={index}
                                                image={item?.more_read_news?.post_thumbnail}
                                                title={item?.more_read_news?.post_title}
                                                href={item?.more_read_news?.post_slug}
                                            />
                                        )}
                                        {item?.post_details_image && (
                                            <div className="flex flex-col flex-wrap w-full max-w-185 max-h-138.75" key={item?.post_id}>
                                                <Image

                                                    src={item?.post_details_image}
                                                    alt={item?.post_details_image_caption}
                                                    width={740}
                                                    height={555}
                                                    className="w-full h-auto object-cover"
                                                />
                                                {item?.post_details_image_caption && (
                                                    <span className="inline-block mt-3.5">{item?.post_details_image_caption}</span>
                                                )}
                                            </div>
                                        )}
                                        {item?.post_details_ad_status === 1 && (
                                            <Ads
                                                key={index}
                                                adsImg={item?.post_details_ad}
                                                // adsWidth={740}
                                                // adsHeight={137}
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                            {news?.detailsNews?.tags && (
                                <div className="bg-[#FBF7EF] p-3 sm:p-5 flex flex-row items-center flex-wrap gap-2 sm:gap-4">
                                    <h5>আরো পড়ুন:</h5>
                                    <div className="flex items-center gap-2 flex-wrap">
                                        {news?.detailsNews?.tags?.map((item: any) => (
                                            <HasTagButton
                                                key={item.tag_id}
                                                href={`/tags/${item?.tag_slug}`}
                                                label={item.tag_name}
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}
                            <div>
                                <CommentBox post_id={detailsNews?.post_id} />
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:max-w-[23.828%] mt-4 lg:mt-0">
                        <CategoryNewsHeadding highlightText={news?.detailsNews?.category?.category_name} />
                        <div className="flex flex-col divide-y divide-[#D4D4D4] mt-6">
                            {news?.sideNews?.map((item: any) => (
                                <NewsItem
                                    key={item.post_id}
                                    image={item.post_thumbnail}
                                    title={item.post_title}
                                    href={`/${item?.category?.category_slug}/${item?.subcategory?.subcategory_slug}/${item?.post_slug}`}
                                    imageWidth={88}
                                    imageHeight={66}
                                    imageWrap="max-w-[88px] max-h-[66px]"
                                    titleFontWeight={"500"}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                {news?.bottomNews.length > 0 && (
                    <div className="mt-14">
                        <h3>রিলেটেড নিউজ</h3>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-4">
                            {news?.bottomNews?.map((item: any) => (
                                <LedNews
                                    key={item.post_id}
                                    image={item.post_thumbnail}
                                    title={item.post_title}
                                    imageWidth={305}
                                    imageHeight={229}
                                    time={item?.post_published_at}
                                    href={`/${item?.category?.category_slug}/${item?.subcategory?.subcategory_slug}/${item?.post_slug}`}
                                    timeMt={"16"}
                                    headingLevel="h5"
                                    gap="gap-3"
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
