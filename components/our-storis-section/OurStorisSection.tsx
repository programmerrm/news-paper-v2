import StorisData from "./storisData";
import { getFetchData } from "@/utils/getFetchData";
import SectionTitle from "../section-title/SectionTitle";

export default async function OurStorisSection() {
  const webStoriesData = await getFetchData('/web/stories');
  const webStories = webStoriesData?.webStories;
  if (!webStories || webStories.length === 0) return null;
  return (
    <section className="bg-linear-to-b from-[#F0F5F4] to-[#FFFFFF] py-8 lg:py-16">
      <div className="container">
        <SectionTitle
          title="ওয়েব স্টোরিস"
          href="/webstoris/news"
        />
        <StorisData webStories={webStories} />
      </div>
    </section>
  );
}
