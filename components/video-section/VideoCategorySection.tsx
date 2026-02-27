
import VideoCategoryNewsItem from "./VideoCategoryNewsItem";
import VideoCard from "./videocard";

const videoList = [
  {
    title: "দুইশো ডেক তোবারক বিতরণ করা হবে রাজৈর বেপারীপাড়ার মাহফিলে",
    time: "১ মিনিট আগে",
  },
  {
    title: "দুইশো ডেক তোবারক বিতরণ করা হবে রাজৈর বেপারীপাড়ার মাহফিলে",
    time: "১ মিনিট আগে",
  },
  {
    title: "দুইশো ডেক তোবারক বিতরণ করা হবে রাজৈর বেপারীপাড়ার মাহফিলে",
    time: "১ মিনিট আগে",
  },
  {
    title: "দুইশো ডেক তোবারক বিতরণ করা হবে রাজৈর বেপারীপাড়ার মাহফিলে",
    time: "১ মিনিট আগে",
  },
];


export default function VideoCategorySection() {
  return (
    <div className="bg-[#F0F5F4] py-8 lg:py-16">
      <div className="container">
        <div className="flex flex-col h-full md:flex-row gap-6">
          
          <VideoCard
            title="টানা ২৮ বছর ধরে আওয়ামী লীগের আসনে বিএনপির ইঞ্জিনিয়ার আশরাফ উদ্দিন বকুল"
            time="১ মিনিট আগে"
            href="/videofulldetails"
          />

          <div className="w-full md:max-w-[42.188%] flex flex-col gap-5">
              {videoList.map((item, index) => (
                <VideoCategoryNewsItem
                key={index}
                title={item.title}
                time={item.time}
                contenthref="/videofulldetails"
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
