import Button from "@/components/button/Button";
import searchIcon from "../../assets/icon/search.svg"
import HasTagButton from "@/components/button/HasTagButton";
import NewsFilterBar from "@/components/news-filter/NewsFilterBar";

export default function Page() {
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

                                <button type="submit" className="bg-red text-white w-full flex items-center justify-center gap-2 p-2 sm:p-3 text-sm font-medium leading-6 transition-all border border-[#B6C3C8] cursor-pointer">
                                    খুজুন
                                </button>

                            </div>
                        </form>
                        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                            <span className="text-[17px] font-semibold leading-6 text-title min-w-27">ট্রেন্ডিং হ্যাসট্যাগ:</span>
                            <div className="flex items-center flex-wrap gap-2">
                                <HasTagButton
                                    label="ওয়েদার"
                                    href="/tags/ওয়েদার"
                                    color="#171717"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-7 pb-7 border-b border-[#A1A1A1] sm:px-5">
                        <NewsFilterBar
                            total="২০২৩২"
                            options={[
                                { label: "Latest", value: "Latest" },
                                { label: "Older", value: "Older" },
                            ]}
                        />
                    </div>
                </div>
            </section>

        </>
    );
}
