import Link from "next/link";
import Image from "next/image";
import { getFetchData } from "@/utils/getFetchData";

export default async function TopNews() {
  const newsData = await getFetchData('/header/news');
  const news = newsData?.headerNews;
  if (!news) return null;
  return (
    <div className="py-5">
      <div className="container">
        <div className="grid grid-cols-4 items-center justify-between gap-5">
          {news.map((item: any) => (
            <div key={item.post_id} className="flex gap-3 w-full lg:w-auto">
              <Link
                href={`/${item.category.category_slug}/${item.subcategory.subcategory_slug}/${item.post_slug}`}
                className="bg-gray-dark w-full max-w-22 h-full max-h-16.5"
              >
                <Image
                  src={item.post_thumbnail}
                  alt={item.post_title}
                  width={88}
                  height={66}
                  className="object-cover"
                />
              </Link>
              <div className="hidden lg:block">
                <Link href={`/${item.category.category_slug}/${item.subcategory.subcategory_slug}/${item.post_slug}`} className="line-clamp-2 font-inter text-sm sm:text-base font-medium sm:leading-6">
                  {item.post_title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
