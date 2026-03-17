import Link from "next/link";
import NavLinks from "./FooterLinks";
import TopHeader from "../header/topHeader";
import { getFetchData } from "@/utils/getFetchData";

type Category = {
    category_id: number;
    category_name: string;
    category_slug: string;
    category_sl: number | null;
    top_menu_status: number;
    footer_menu_status: number;
};

const chunkArray = <T,>(array: T[], size: number): T[][] => {
    const result: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
};

export default async function Footer() {
    const webinfo = await getFetchData('/webinfo');
    const categories = await getFetchData('/categories');

    const footerCategories =
        categories?.filter((cat: any) => cat.footer_menu_status === 1) || [];

    const categoryChunks = chunkArray<Category>(footerCategories, 3);

    const currentYear = new Date().getFullYear();

    return (
        <footer className="pt-6 lg:pt-12 border-t border-[#E5E5E5]">
            <div className="container">
                <div className="space-y-4 md:space-y-8 divide-y divide-gray-dark">
                    <div className="pb-4 md:pb-8">
                        <TopHeader isTimeData={false} />
                    </div>
                    <div className="pb-4 md:pb-8">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 md:divide-x divide-gray-dark">
                            {categoryChunks.map((chunk, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-center text-center"
                                >
                                    <NavLinks links={chunk} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <ul className="pb-4 md:pb-8 flex items-center justify-center gap-y-3 gap-5 md:gap-x-7 lg:gap-x-14 flex-wrap">
                        <li>
                            <Link href="/about-us" className="text-[15px] leading-3.75 tracking-[0.15px] text-black transition-all hover:text-blue">
                                আমাদের সম্পর্কে
                            </Link>
                        </li>

                        <li>
                            <Link href="/contact-us" className="text-[15px] leading-3.75 tracking-[0.15px] text-black transition-all hover:text-blue">
                                যোগাযোগ
                            </Link>
                        </li>
                        <li>
                            <Link href="/advertisement" className="text-[15px] leading-3.75 tracking-[0.15px] text-black transition-all hover:text-blue">
                                বিজ্ঞাপন
                            </Link>
                        </li>
                        <li>
                            <Link href="/terms-and-conditions" className="text-[15px] leading-3.75 tracking-[0.15px] text-black transition-all hover:text-blue">
                                ট্রামস অফ সার্ভিস
                            </Link>
                        </li>
                        <li>
                            <Link href="/privacy-policy" className="text-[15px] leading-3.75 tracking-[0.15px] text-black transition-all hover:text-blue">
                                প্রাইভেসি পলিসি
                            </Link>
                        </li>
                    </ul>
                    <div className="pb-4 md:pb-8 flex items-center justify-center sm:justify-between gap-5 flex-wrap">
                        <p className="text-[15px] leading-3.75 tracking-[0.15px] text-black">প্রকাশকঃ মোহাম্মদ শামীম রেজা</p>
                        <span className="text-[15px] leading-3.75 tracking-[0.15px] text-black">© {currentYear} নিউজফ্ল্যাশ ৭১ | সর্বস্বত্ব সংরক্ষিত</span>
                    </div>
                </div>
            </div>
            <div className="bg-[#E0EBF0] py-4">
                <div className="container flex items-center justify-center">
                    <span className="text-sm leading-4.5 tracking-[0.15px] text-black text-center">{webinfo?.webInfo?.copyright}</span>
                </div>
            </div>
        </footer>
    );
}
