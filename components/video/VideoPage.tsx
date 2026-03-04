"use client";

type Props = {
  src: string;
  className?: string;
};

export default function VideoPlayer({ src, className }: Props) {
  const getEmbedUrl = (url: string) => {
    if (!url) return "";

    if (url.includes("watch?v=")) {
      const id = url.split("watch?v=")[1]?.split("&")[0];
      return `https://www.youtube.com/embed/${id}`;
    }

    if (url.includes("youtu.be/")) {
      const id = url.split("youtu.be/")[1]?.split("?")[0];
      return `https://www.youtube.com/embed/${id}`;
    }

    return "";
  };

  const embedUrl = getEmbedUrl(src);

  if (!embedUrl) return null;

  return (
    <div className={`w-full aspect-video ${className}`}>
      <iframe
        className="w-full h-full rounded"
        src={embedUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
