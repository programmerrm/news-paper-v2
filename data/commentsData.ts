// data/commentsData.ts
import { StaticImageData } from "next/image";
import comment1 from "../assets/image/image-1.jpg";
import comment2 from "../assets/image/image-2.jpg";
import comment3 from "../assets/image/image-1.jpg";

export interface Comment {
    id: number;
    author: string;
    date: string;
    image: StaticImageData;
}

export const comments: Comment[] = [
    {
        id: 1,
        author: "খালেদা জিয়া ও আসমান, তারেক রহমান বগুড়া-৬ এ বিএনপির প্রার্থী খালেদা জিয়া ও আসমান, তারেক রহমান বগুড়া-৬ এ বিএনপির প্রার্থী খালেদা জিয়া ও আসমান, তারেক রহমান বগুড়া-৬ এ বিএনপির প্রার্থী",
        date: "১২ ডিসেম্বর ২০২৫",
        image: comment1,
    },
    {
        id: 2,
        author: "খালেদা জিয়া ও আসমান, তারেক রহমান বগুড়া-৬ এ বিএনপির প্রার্থী",
        date: "১২ ডিসেম্বর ২০২৫",
        image: comment2,
    },
    {
        id: 3,
        author: "খালেদা জিয়া ও আসমান, তারেক রহমান বগুড়া-৬ এ বিএনপির প্রার্থী",
        date: "১২ ডিসেম্বর ২০২৫",
        image: comment3,
    },
];
