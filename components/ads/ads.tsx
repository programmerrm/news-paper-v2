import Image from "next/image";

type Props = {
    adsImg: string;
    adsWidth?: number;
    adsHeight?: number;
};

export default function Ads({
    adsImg,
    adsWidth = 768,
    adsHeight = 90,
}: Props) {
    if (!adsImg) return null;

    return (
        <section className="py-6 bg-[#FAFAFA]">
            <div className="container">
                <div
                    className="relative w-full mx-auto"
                    style={{
                        aspectRatio: `${adsWidth} / ${adsHeight}`,
                        maxWidth: "100%",
                    }}
                >
                    <Image
                        src={adsImg}
                        alt="Advertisement"
                        fill
                        sizes="100vw"
                        className="object-contain"
                    />
                </div>
            </div>
        </section>
    );
}
