
import RiverImage from "../../assets/image/river-image.png"
import SingleNewsItem from "@/components/news-items/SingleNewsItem";
import Button from "@/components/button/Button";
import searchIcon from "../../assets/icon/search.svg"
import HasTagButton from "@/components/button/HasTagButton";
import NewsFilterBar from "@/components/news-filter/NewsFilterBar";

export default function SearchNewspage() {
    return (
        <>
            <section className="py-5 sm:py-10">
                <div className="container">
                    <h2 className="text-2xl font-bold">খুঁজুন</h2>
                    <div className="bg-[#E0EBF0] p-4 md:p-8 mt-8 ">
                        <form action="#" className="flex items-center gap-6 bg-white pr-3 border border-[#B6C3C8]">
                            <div className="flex-1">
                                <input type="text" placeholder="কি খুজতে চান?" className="w-full  focus:outline-0 py-4 sm:py-6 pl-4 sm:pl-7" />
                            </div>
                            <div className="w-full max-w-24 md:max-w-38">
                                <Button
                                    imageSrc={searchIcon}
                                    text="খুজুন"
                                />
                            </div>
                        </form>
                        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                            <span className="text-[17px] font-semibold leading-6 text-title min-w-27">ট্রেন্ডিং হ্যাসট্যাগ:</span>
                            <div className="flex items-center flex-wrap gap-2">
                                <HasTagButton
                                    label="ওয়েদার"
                                    href="#"
                                    color="#171717"
                                />
                                <HasTagButton
                                    label="ইলেকশন"
                                    href="#"
                                    color="#171717"
                                />
                                <HasTagButton
                                    label="পার্লামেন্ট"
                                    href="#"
                                    color="#171717"
                                />
                                <HasTagButton
                                    label="জামাত"
                                    href="#"
                                    color="#171717"
                                />
                                <HasTagButton
                                    label="পলিটিক্স"
                                    href="#"
                                    color="#171717"
                                />
                                <HasTagButton
                                    label="জামাত"
                                    href="#"
                                    color="#171717"
                                />
                                <HasTagButton
                                    label="আইডলজিক্যাল"
                                    href="#"
                                    color="#171717"
                                />
                                <HasTagButton
                                    label="বাংলাদেশ"
                                    href="#"
                                    color="#171717"
                                />
                                <HasTagButton
                                    label="ডিমান্ডস"
                                    href="#"
                                    color="#171717"
                                />
                                <HasTagButton
                                    label="পার্টি"
                                    href="#"
                                    color="#171717"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-7 pb-7 border-b border-[#A1A1A1] sm:px-5">
                        <NewsFilterBar
                            total="২০২৩২"
                            options={[
                                { label: "রিলেভেন্ট খবর", value: "relevant" },
                                { label: "রিলেভেন্ট খবর1", value: "relevant1" },
                                { label: "রিলেভেন্ট খবর2", value: "relevant2" },
                                { label: "রিলেভেন্ট খবর3", value: "relevant3" },
                            ]}
                        />
                    </div>
                </div>
            </section>
            <section className="py-7 lg:py-14">
                <div className="container">
                    <div className="space-y-8 divide-y divide-gray-dark max-w-220.5 mx-auto">

                        <div className="pb-4 md:pb-8">
                            <SingleNewsItem
                                image={RiverImage}
                                imageWidth={340}
                                imageHeight={304}
                                title={"চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"}
                                time={"১ সেকেন্ড আগে"}
                                href="#"
                                timeMt={16}
                                SingleimageWrap="max-w-[200px]"
                                content="বলিউডের আইটেম গার্ল খ্যাত অভিনেত্রী মালাইকা অরোরা ব্যক্তিগত জীবন নিয়ে সবসময় আলোচনায় থাকেন। দীর্ঘদাম্পত্য আর সম্পর্ক ভেঙে যাওয়ার পর মালাইকা এবার নতুন প্রেমের গুঞ্জনে ছড়িয়ে পড়েছেন।"
                                titleMb={12}
                            />
                        </div>
                        <div className="pb-4 md:pb-8">
                            <SingleNewsItem
                                image={RiverImage}
                                imageWidth={340}
                                imageHeight={304}
                                title={"চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"}
                                time={"১ সেকেন্ড আগে"}
                                href="#"
                                timeMt={16}
                                SingleimageWrap="max-w-[200px]"
                                content="বলিউডের আইটেম গার্ল খ্যাত অভিনেত্রী মালাইকা অরোরা ব্যক্তিগত জীবন নিয়ে সবসময় আলোচনায় থাকেন। দীর্ঘদাম্পত্য আর সম্পর্ক ভেঙে যাওয়ার পর মালাইকা এবার নতুন প্রেমের গুঞ্জনে ছড়িয়ে পড়েছেন।"
                                titleMb={12}

                            />
                        </div>
                        <div className="pb-4 md:pb-8">
                            <SingleNewsItem
                                image={RiverImage}
                                imageWidth={340}
                                imageHeight={304}
                                title={"চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"}
                                time={"১ সেকেন্ড আগে"}
                                href="#"
                                timeMt={16}
                                SingleimageWrap="max-w-[200px]"
                                content="বলিউডের আইটেম গার্ল খ্যাত অভিনেত্রী মালাইকা অরোরা ব্যক্তিগত জীবন নিয়ে সবসময় আলোচনায় থাকেন। দীর্ঘদাম্পত্য আর সম্পর্ক ভেঙে যাওয়ার পর মালাইকা এবার নতুন প্রেমের গুঞ্জনে ছড়িয়ে পড়েছেন।"
                                titleMb={12}
                                showPlayButton={true}
                            />
                        </div>
                        <div className="pb-4 md:pb-8">
                            <SingleNewsItem
                                image={RiverImage}
                                imageWidth={340}
                                imageHeight={304}
                                title={"চূড়ান্ত প্রার্থী তালিকা সময়মতো জানাবে জামায়াত: আমির ডা. শফিকুর রহমান"}
                                time={"১ সেকেন্ড আগে"}
                                href="#"
                                timeMt={16}
                                SingleimageWrap="max-w-[200px]"
                                content="বলিউডের আইটেম গার্ল খ্যাত অভিনেত্রী মালাইকা অরোরা ব্যক্তিগত জীবন নিয়ে সবসময় আলোচনায় থাকেন। দীর্ঘদাম্পত্য আর সম্পর্ক ভেঙে যাওয়ার পর মালাইকা এবার নতুন প্রেমের গুঞ্জনে ছড়িয়ে পড়েছেন।"
                                titleMb={12}
                                showPlayButton={true}
                            />
                        </div>
                        <div className="pb-4 md:pb-8 pt-2 max-w-60 mx-auto">
                            <Button
                                text="আরো দেখুন"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}