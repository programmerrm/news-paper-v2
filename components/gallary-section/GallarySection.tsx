import SectionTitle from "../section-title/SectionTitle";
import GallaryLednews from "./GallaryLednews";
import GalleryNews from "./GallaryNews";
import MousqueImage from "../../assets/image/mosque.png"
import { getFetchData } from "@/utils/getFetchData";

export default async function GallarySection() {
    const sectionTwelve = await getFetchData('/section/twelve');
    if (!sectionTwelve) return null;
    const {
        sectionTwelveLeadNews,
        sectionTwelveSubleadNews,
    } = sectionTwelve;

    const isAllEmpty =
        !sectionTwelveLeadNews &&
        (!sectionTwelveSubleadNews?.length);
    if (isAllEmpty) return null;
    
    return (
        <section className="py-8 lg:py-16 ">
            <div className="container">
                <SectionTitle
                    title={"ছবি"}
                    href={`/photos/news`}
                />
                <div className="mt-8 flex flex-col md:flex-row items-start ">
                    <div className="w-full md:max-w-[48.125%]">
                        {sectionTwelveLeadNews?.map((item: any) => (
                            <GallaryLednews
                                key={item.post_id}
                                imageSrc={item.post_thumbnail}
                                title={item.post_title}
                                time={item.post_published_at}
                                href={`/photos/news/${item?.post_slug}`}
                            />
                        ))}
                    </div>
                    <div className="w-full md:max-w-[51.875%] md:pl-6 grid grid-cols-2 gap-3 md:gap-6 mt-5 md:mt-0">
                        {sectionTwelveSubleadNews?.map((item: any) => (
                            <GalleryNews
                                key={item.post_id}
                                image={MousqueImage}
                                title={item.post_title}
                                time={item.post_published_at}
                                href={`/photos/news/${item?.post_slug}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
