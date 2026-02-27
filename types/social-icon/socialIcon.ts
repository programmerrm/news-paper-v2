import { StaticImageData } from "next/image";

export interface IconIcon {
    icon: StaticImageData;
    label: string;
    href: string;
    showOn?: "all" | "md";
};
