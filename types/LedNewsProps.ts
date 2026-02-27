import { StaticImageData } from "next/image";
export interface LedNewsProps {
  image: StaticImageData;
  title: string;
  content?: string;
  time?: string;
  href?: string;
  imageWidth?: number;
  imageHeight?: number;
  contentMt?: number;
  timeMt?: string;
  imageWrap?: "max-w-[80px]" | "max-w-[104px]";
};