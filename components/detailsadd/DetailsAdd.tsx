import Image, { StaticImageData } from "next/image";

type DetailsAddProps = {
  src: StaticImageData | string;
  alt?: string;
  width?: number;
  height?: number;
};

export default function DetailsAdd({
  src,
  alt = "advertisement",
  width = 740,
  height = 137,
}: DetailsAddProps) {
  return (
    <div className="max-h-62">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-full"
        unoptimized={typeof src === "string"}
      />
    </div>
  );
}
