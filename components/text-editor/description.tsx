"use client";

export default function Description({ description }: any) {
    return <span dangerouslySetInnerHTML={{ __html: description }}></span>;
}
