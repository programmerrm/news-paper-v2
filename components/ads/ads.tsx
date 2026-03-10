import Image from "next/image";

type Props = {
    adsImg?: string;          // optional, image এর জন্য
    adsWidth?: number;        // aspect ratio set করার জন্য
    adsHeight?: number;       // aspect ratio set করার জন্য
};

export default function Ads({
    adsImg,
    adsWidth = 768,
    adsHeight = 90,
}: Props) {
    if (!adsImg) return null; // যদি image না থাকে, কিছু দেখাবে না

    return (
        <section className="py-6 bg-[#FAFAFA]">
            <div className="container mx-auto">
                <div
                    className="relative w-full"
                    style={{
                        aspectRatio: `${adsWidth} / ${adsHeight}`, // image এর proportion ঠিক রাখবে
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
