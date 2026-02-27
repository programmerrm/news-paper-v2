
import RiverImage from "../../assets/image/river-image.png"
import SingleNewsItem from "@/components/news-items/SingleNewsItem";
import Button from "@/components/button/Button";
import NewsFilterBar from "@/components/news-filter/NewsFilterBar";
import DatePicker from "@/components/date/DatePicker";
import CalenderIcon from "../../assets/icon/calender.svg";
import { sections } from "@/data/sections";
import { topic } from "@/data/topic";
import CustomSelect from "@/components/selects/CustomSelect";


export default function Archive() {
    return (
        <>

            <section className="py-5 sm:py-10">
                <div className="container">
                    <h2 className="text-2xl font-bold">আর্কাইভ খবর</h2>
                    <form className="bg-[#E0EBF0] p-4 lg:p-6 mt-8 flex flex-col sm:flex-row items-center gap-3">
                        <div className="w-full grid sm:grid-cols-3 gap-3 sm:flex-1">
                            <div>
                                <DatePicker />
                            </div>
                            <CustomSelect 
                                icon={CalenderIcon}
                                 options={sections}
                            />
                            <CustomSelect 
                                icon={CalenderIcon}
                                 options={topic}
                            />
                        </div>
                        <div className="w-full sm:max-w-40 lg:max-w-60">
                            <Button
                                text= "সার্চ করুন"
                            />
                        </div>
                    </form>
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
                                href="/singledetails"
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
                                href="/singledetails"
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
                                href="/singledetails"
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
                                href="/singledetails"
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