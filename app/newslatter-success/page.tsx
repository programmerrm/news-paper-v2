
export default function NewsLatterPage() {
    return (
        <>
            <section className="py-6 sm:py-12">
                <div className="container max-w-211.5">
                    <div className="flex justify-center py-6 md:py-12">
                        <div className="">
                            <h3 className="text-red text-center font-semibold mb-3">আপনার পছন্দের খবর, সরাসরি ইনবক্সে</h3>
                            <p className="text-title text-bsdr sm:text-lg leading-7 text-center mb-6">রাজনীতি, অর্থনীতি, আন্তর্জাতিক সংবাদ, খেলা ও জীবনযাপন— Newsflash বাছাই করা গুরুত্বপূর্ণ খবর পৌঁছে দেবে আপনার ইমেইলে। এক ক্লিকেই সাবস্ক্রাইব করুন, আপডেট থাকুন নির্ভরযোগ্য সংবাদের সাথে।</p>

                            <form className="bg-[#E0EBF0] w-full px-4 py-7 md:py-14">
                                <div className=" max-w-122 mx-auto">
                                    
                                    <p className="text-title text-sm sm:text-[17px] leading-6.5 font-semibold text-center max-w-81.25 mx-auto mb-4">
                                        ধন্যবাদ! আপনি সফলভাবে সাবস্ক্রিপশন করেছেন। Newflash71 নিউজলেটার সার্ভিসে স্বাগতম।
                                    </p>

                                    <div className="flex items-center justify-center">
                                        <a href="/"
                                            type="submit"
                                            className="w-full max-w-60 bg-red text-white text-sm leading-6 font-medium p-2 sm:p-3 hover:bg-red-900 transition cursor-pointer text-center"
                                        >
                                            হোমপেজে ফিরে যান
                                        </a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}