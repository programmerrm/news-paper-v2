import Link from "next/link";

export default function ContactUs() {
    return (
        <>
            <section className="py-5 sm:py-10">
                <div className="container">
                    <h2 className="text-2xl md:text-[32px] font-semibold md:leading-10 py-2 text-title border-b border-[#A1A1A1]">শর্তাবলি ও নীতিমালা</h2>
                    <div className="max-w-211.5 mx-auto">
                        <div className="flex flex-col sm:flex-row items-center gap-4 py-6 md:py-12">
                            <div className="w-full sm:max-w-87.5 space-y-4 sm:space-y-8 ">
                                <>
                                    <h3 className="text-red mb-3">অফিসের ঠিকানা</h3>
                                    <p className="text-sm sm:text-lg leading-7 text-[#171717]">হাউজ #৫৮৪, রোড #১৩, বারিধারা ডিওএইচএস, ঢাকা-১২০৬</p>
                                </>
                                <>
                                    <h3 className="text-red mb-3">যোগাযোগের মাধ্যম</h3>
                                    <div className="space-y-3">
                                        <div>
                                            <span className="text-base sm:text-lg leading-7 text-[#171717]">ইমেইল: </span><a className="block text-base sm:text-lg leading-7 text-[#171717] transition-all hover:text-blue" href="mailto:newsflash71info@gmail.com">newsflash71info@gmail.com</a>
                                        </div>
                                        <div>
                                            <span className="text-base sm:text-lg leading-7 text-[#171717]">হট লাইন নাম্বার: </span><a className="block text-base sm:text-lg leading-7 text-[#171717] transition-all hover:text-blue" href="tel:88 02-8418076">88 02-8418076</a>
                                        </div>
                                    </div>
                                </>
                                <>
                                    <h3 className="text-red mb-3">সোসাল মিডিয়া</h3>
                                    <div className="flex items-center gap-3">
                                        <Link target="_blank" href={"#"} className="text-blue group w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-gray-100 hover:bg-red-600 flex items-center justify-center transition">
                                            <span className="text-[18px] group-hover:text-white transition">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M7.678 4.146V6.59H6v2.987h1.678v8.876h3.445V9.577h2.313s.216-1.432.322-2.999h-2.62V4.536c0-.305.374-.716.746-.716h1.878V.71H11.21C7.593.71 7.68 3.7 7.68 4.147" />
                                                </svg>
                                            </span>
                                        </Link>
                                        <Link target="_blank" href={"#"} className="text-[#000000] group w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-gray-100 hover:bg-red-600 flex items-center justify-center transition">
                                            <span className="text-[18px] group-hover:text-white transition">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="currentColor">
                                                    <path d="M13.23.787h2.576l-5.628 6.449 6.622 8.777h-5.184L7.553 10.69l-4.644 5.322H.33l6.02-6.9L0 .788h5.316l3.667 4.864zm-.906 13.68h1.428L4.536 2.252H3.005z" />
                                                </svg>
                                            </span>
                                        </Link>
                                        <Link target="_blank" href={"#"} className="text-blue group w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-gray-100 hover:bg-red-600 flex items-center justify-center transition">
                                            <span className="text-[18px] group-hover:text-white transition">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-red-600 group-hover:text-white transition">
                                                    <path d="M21.594 7.203a2.5 2.5 0 0 0-1.762-1.766c-1.566-.43-7.83-.437-7.83-.437s-6.265-.007-7.832.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.52 2.52 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831M9.997 15.005l.005-6 5.207 3.005z" />
                                                </svg>
                                            </span>
                                        </Link>
                                        <Link target="_blank" href={"#"} className="text-blue group w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-gray-100 hover:bg-red-600 flex items-center justify-center transition">
                                            <span className="text-[18px] group-hover:text-white transition">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M17.566 10.976v5.903h-3.423V11.37c0-1.384-.495-2.328-1.733-2.328-.946 0-1.509.637-1.756 1.252-.09.22-.114.526-.114.834v5.75H7.116s.047-9.328 0-10.295h3.424v1.459c.455-.7 1.267-1.701 3.085-1.701 2.252 0 3.94 1.472 3.94 4.634M3.536 1.62c-1.171 0-1.937.768-1.937 1.778 0 .988.744 1.78 1.892 1.78h.022c1.194 0 1.936-.792 1.936-1.78-.02-1.01-.742-1.778-1.914-1.778M1.801 16.88h3.422V6.584H1.802z" />
                                                </svg>
                                            </span>
                                        </Link>
                                    </div>
                                </>
                            </div>
                            {/* Google Map */}
                            <div className="w-full md:flex-1 h-60 sm:h-100 md:h-135 overflow-hidden">
                                <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.3349847488957!2d90.41298437589826!3d23.80668428661212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c79bb3430645%3A0xc44420b45dc292d6!2sDOHS%20Baridhara%20Enterance%2FExit!5e0!3m2!1sen!2sbd!4v1773769315058!5m2!1sen!2sbd"
                                className="w-full h-72 md:h-full border-0"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}