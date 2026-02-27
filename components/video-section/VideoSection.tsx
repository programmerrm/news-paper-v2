import { getFetchData } from "@/utils/getFetchData";
import VideoSectionWraper from "./VideoSectionWraper";

export default async function VideoSection() {
  const data = await getFetchData("/section/five");
  return <VideoSectionWraper data={data} />;
}