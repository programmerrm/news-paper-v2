"use client";

type Props = {
    code: string;
};

export default function GoogleAds({ code }: Props) {
    return (
        <div
            className="google-ads-wrapper"
            dangerouslySetInnerHTML={{ __html: code }}
        />
    );
}
