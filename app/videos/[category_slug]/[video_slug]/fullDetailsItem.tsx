import VideoPlayer from "@/components/video/VideoPage";
import Link from "next/link";

type VideoCardProps = {
    videoSrc: string;
    title: string;
    href?: string;
};

export default function FullDetailsItem({
    videoSrc,
    title,
    href = "#",
}: VideoCardProps) {
    return (
        <div className="flex bg-white gap-3 pb-4.5" >
            <div className="w-full max-w-32">
                <VideoPlayer
                    src={videoSrc}
                />
            </div>

            <div className="w-full bg-white">
                <h5 className=" transition-colors hover:text-blue">
                    <Link href={href}>
                        {title}
                    </Link>
                </h5>
            </div>
        </div>
    );
}
