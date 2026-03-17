
export default function ContactUs() {
    return (
        <>
            <section className="py-5 sm:py-10">
                <div className="container">
                    <h2 className="text-2xl font-bold py-2 border-b border-[#0000001f]">যোগাযোগ</h2> 
                    
                    <div className="space-y-2 sm:space-y-4 pt-5">
                        <div className="space-y-1">
                            <h3>প্রধান কার্যালয় </h3>
                            <p className="text-sm sm:text-base leading-5 font-medium text-body">১৯ কারওয়ান বাজার, ঢাকা ১২১৫, বাংলাদেশ।</p>
                        </div>
                        <div className="">
                            <h3>ফোন</h3>
                            <div className="flex flex-col gap-1">
                                <a className="text-body transition-all hover:text-blue text-sm sm:text-base inline-block" href="tel:+৮৮ ০২ ৫৫০১৩৪৩০">+৮৮ ০২ ৫৫০১৩৪৩০</a>
                                <a className="text-body transition-all hover:text-blue text-sm sm:text-base inline-block" href="tel:+৮৮ ০২ ৫৫০১৩৪৩২">+৮৮ ০২ ৫৫০১৩৪৩২</a>
                                <a className="text-body transition-all hover:text-blue text-sm sm:text-base inline-block" href="tel:+৮৮ ০২ ৫৫০১৩৪৩৩">+৮৮ ০২ ৫৫০১৩৪৩৩</a>
                                <a className="text-body transition-all hover:text-blue text-sm sm:text-base inline-block" href="tel:+৮৮ ০২ ৫৫০১৩৪৩৪">+৮৮ ০২ ৫৫০১৩৪৩৪</a>
                            </div>
                        </div>
                        <div className="">
                            <h3>ইমেইল</h3>
                            <div className="flex flex-col gap-1">
                                <div>
                                    <span className="text-body text-sm sm:text-base">অফিস: </span>
                                    <a className="text-body transition-all hover:text-blue text-sm sm:text-base inline-block" href="mailto:info@prothomalo.com">info@prothomalo.com</a>
                                </div>
                                
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}