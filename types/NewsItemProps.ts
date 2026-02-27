import { StaticImageData } from "next/image";

export interface NewsItemProps {
  image?: StaticImageData;
  title?: string;
  content?: string;
  time?: string;
  href?: string;
  imageWidth?: number;
  imageHeight?: number;
  titleMb?: number;
  isLive?: boolean;
  timeMt?: number;
  contentMt?:number;
  titleFontWeight?: number | string;
  imageWrap?: "max-w-[80px]" | "max-w-[104px]";
  SingleimageWrap?: "max-w-[150px]" | "max-w-[200px]";
  showPlayButton?: boolean;
};