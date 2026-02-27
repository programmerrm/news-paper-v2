"use client";

type VideoPlayerProps = {
  src: string;
  poster?: string;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  className?: string;
};

export default function VideoPlayer({
  src,
  poster,
  controls = true,
  autoPlay = false,
  loop = false,
  muted = false,
  className = "",
}: VideoPlayerProps) {
  return (
    <video
      className={`w-full h-full object-cover ${className}`}
      controls={controls}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      poster={poster}
      playsInline
    >
      <source className="w-full h-full object-cover" src={src} type="video/mp4" />
    </video>
  );
}
