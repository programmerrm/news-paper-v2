import Image from "next/image";

export default function Ads({ adsImg, adsWidth, adsHeight }: any) {
    return (
        <section className="py-6 bg-[#FAFAFA]">
            <div className="container">
                <div
                    className="w-full max-w-3xl mx-auto relative"
                    style={{ width: adsWidth, height: adsHeight }}
                >
                    <Image
                        src={adsImg}
                        alt="GoogleAdd"
                        fill
                    />
                </div>
            </div>
        </section>
    );
}