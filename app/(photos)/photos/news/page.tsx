import NewsBreadcrumb from "@/components/breadcrumb/NewsBreadcrumb";
import GalleryNews from "@/components/gallary-section/GallaryNews";
import SectionTitle from "@/components/section-title/SectionTitle";
import { getFetchData } from "@/utils/getFetchData";
import Link from "next/link";

export default async function Page() {
    const galleriesData = await getFetchData('/galleries');
    const galleries = galleriesData?.galleries;
    const categoryWise = galleriesData?.categoryWisel
    return (
        <>
            <section className="pb-2 pt-5 sm:pt-10">
                <div className="container">
                    <div>
                        <NewsBreadcrumb
                            title="ছবি খবর"
                        />
                        {/* <ul className="flex items-center gap-y-2 gap-x-6 flex-wrap mt-2">
                            {subCategories.map((subCategory: any) => (
                                <li key={subCategory.subcategory_id}>
                                    <Link
                                        href={`/${categorySlug}/${subCategory.subcategory_slug}`}
                                        className="relative top-1/2 pl-3 
                       after:absolute after:top-1/2 after:-translate-y-1/2
                       after:left-0 after:w-1.5 after:h-1.5
                       after:bg-[#B6C3C8] after:rounded-full
                       text-black"
                                    >
                                        {subCategory.subcategory_name}
                                    </Link>
                                </li>
                            ))}
                        </ul> */}
                    </div>
                </div>
            </section>
            {/* <ImageSection />  */}
            {categoryWise?.posts?.map((item: any) => (
                <section className="border-b border-[#ddd] py-8 lg:py-16 last:border-b-0">
                <div className="container">
                    <SectionTitle 
                        title="বাংলাদেশ"
                        href="/image-category"
                    />
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 mt-8">
                        <GalleryNews
                            image={item?.thumbnail}
                            title={item?.title_bn}
                            time={item?.created_at}
                            photoCount={item?.image_count}
                            href="/imagedetails"
                        />
                    </div>
                </div>
            </section>
            ))}
        </>
    );
}
