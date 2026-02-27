import { getFetchData } from "@/utils/getFetchData";
import Image from "next/image";
import NewsItem from "@/components/news-items/newsItem";
import CategoryNewsHeadding from "@/components/category/CategoryNewsHeadding";
import ShareIcons from "@/components/shareicon/ShareIcon";
import HasTagButton from "@/components/button/HasTagButton";
import CommentBox from "@/components/comment-box/CommentBox";
import LedNews from "@/components/led-news/LedNews";
import ReportImage from "@/components/details/ReportImage";
import ReportTitle from "@/components/details/ReportTitle";
import ReportNews from "@/components/details/RportNews";
import PlayBtn from "../../../../../assets/icon/playbtn.svg";
import TextNews from "@/components/details/TextNews";

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
    return (
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
                                    category={news?.detailsNews?.category?.category_name}
                                    title={news?.detailsNews?.post_title}
                                />
                                <div className="flex items-center justify-between gap-3 mt-2 py-3 flex-wrap">
                                    <ReportNews
                                        reporterName={news?.detailsNews?.author?.author_name}
                                        publishDate={news?.detailsNews?.post_published_at}
                                    />
                                    <div className="flex items-center gap-2.5">
                                        <button type="submit" className="cursor-pointer">
                                            <Image width={23} height={23} src={PlayBtn} alt="PlayBtn" />
                                        </button>
                                        <span className="text-sm leading-6 font-medium text-[#171717]">
                                            খবরটি শুনুন
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:px-7.5">
                                <ReportImage
                                    src={news?.detailsNews?.post_thumbnail}
                                    alt={news?.detailsNews?.post_title}
                                    caption={news?.detailsNews?.post_caption}
                                />
                            </div>
                            <div className="sm:px-7.5 space-y-4 sm:space-y-8">
                                <TextNews
                                    text={news?.detailsNews?.post_descriptions}
                                />

                            </div>
                            {news?.detailsNews?.tags && (
                                <div className="bg-[#FBF7EF] p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                    <h5>আরো পড়ুন:</h5>
                                    <div className="flex items-center gap-2 flex-wrap">
                                        {news?.detailsNews?.tags?.map((item: any) => (
                                            <HasTagButton
                                                key={item.tag_id}
                                                href="#"
                                                label={item.tag_name}
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}
                            <div>
                                <CommentBox />
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
                                    imageWidth={88}
                                    imageHeight={66}
                                    imageWrap="max-w-[88px]"
                                    titleFontWeight={"500"}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                {news?.bottomNews && (
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
                                    href={`#`}
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
