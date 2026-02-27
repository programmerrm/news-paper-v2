import { ElementType } from "react";

export interface NewsItemsProps {
    imageWrap?: string;
    wrapperClass?: string;
    image?: string;
    title?: string;
    content?: string;
    time?: string;
    href?: string;
    post_published_at?: string;
    headingTag?: ElementType;
    isLive?: boolean;
    titleFontWeight?: string;
    timeMt?: string;
    titleMb?: string;
    imageHeight?: number;
    imageWidth?: number;
    post_id?: number;
    post_thumbnail?: string;
    post_title?: string;
    post_slug?: string;
    post_descriptions?: string;
}
