import VideoCard from "./videocard";
import VideoCategoryNewsItem from "./VideoCategoryNewsItem";

export default function VideoCategorySection({ leadVideo, latestVideos }: any) {
  return (
    <div className="bg-[#F0F5F4] py-8 lg:py-16">
      <div className="container">
        <div className="flex flex-col h-full md:flex-row gap-6">
          <VideoCard
            viderUrl={leadVideo?.video_url}
            title={leadVideo?.video_title}
            time={leadVideo?.video_published_at}
            href={`/videos/${leadVideo?.category?.category_slug}/${leadVideo?.video_slug}`}
          />
          <div className="w-full md:max-w-[42.188%] flex flex-col gap-5">
            {latestVideos.map((item: any) => (
              <VideoCategoryNewsItem
                key={item?.video_id}
                viderUrl={item?.video_url}
                title={item?.video_title}
                time={item?.video_published_at}
                contenthref={`/videos/${item?.category?.category_slug}/${item?.video_slug}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
