import Image from "next/image";

type Props = {
    adsImg?: string;         
    adsWidth?: number;        
    adsHeight?: number;       
};

export default function Ads({
    adsImg,
    adsWidth = 740,
    adsHeight = 137,
}: Props) {
    if (!adsImg) return null;

    return (
        <section className="py-3 md:py-6 bg-[#FAFAFA]">
            <div className="container mx-auto">
                <div
                    className="relative w-full mx-auto"
                    style={{
                        // aspectRatio: `${adsWidth} / ${adsHeight}`, 
                        maxWidth: "740px",
                    }}
                >
                    <Image
                        src={adsImg}
                        alt="Advertisement"
                        width={740}
                        height={137}
                        className="object-contain"
                    />
                </div>
            </div>
        </section>
    );
}
