import VideoPlayer from "../video/VideoPage";

type ReportVideoProps = {
  caption?: string;
};

export default function ReportVideo({

  caption,
}: ReportVideoProps) {
  return (
    <div className="w-full max-w-185 h-full border-b border-[#D4D4D4]">
      <div className=" bg-gray-dark max-w-185 max-h-138.75">
        
        <VideoPlayer
          src="/video/jodinat.mp4"
          poster="/video/Image.png"
          controls={true}
          muted
        />
      </div>
        {caption && (
          <span className="py-3 text-base leading-6 font-medium text-[#525252] block">
            {caption}
          </span>
        )}
    </div>
  );
}
