import StorisCard from "./StorisCard";
import SectionTitle from "../section-title/SectionTitle";
import { getFetchData } from "@/utils/getFetchData";

export default async function OurStorisSection() {
  const webStoriesData = await getFetchData('/web/stories');
  const webStories = webStoriesData?.webStories;
  if (!webStories) return null;
  return (
    <section className="bg-linear-to-b from-[#F0F5F4] to-[#FFFFFF] py-8 lg:py-16">
        <div className="container">
          <SectionTitle
              title="ওয়েব স্টোরিস"
              href="/webstoris/news"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 mt-7">
            {webStories.map((item: any) => (
                <StorisCard
                  key={item.post_id}
                  image={item.post_thumbnail}
                  title={item.post_title}
                  href={item.post_slug}
                />
              ))}
          </div>
        </div>
    </section>
  );
}
