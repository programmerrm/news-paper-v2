import Link from "next/link";

const toBanglaNumber = (num: number) => {
  const bn = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  return num
    .toString()
    .padStart(2, "0")
    .split("")
    .map((n) => bn[Number(n)])
    .join("");
};

const LatestNews = ({ items }: { items: any[] }) => {
  return (
    <div className="mt-6 space-y-4">
      {items.map((item: any, index: number) => (
        <div
          key={index}
          className="flex items-center gap-3 border-b border-[#D4D4D4] pb-4"
        >
          <span className="text-xl md:text-2xl text-[#525252] font-semibold md:leading-6">
            {toBanglaNumber(index + 1)}
          </span>

          <h5>
            <Link
              href={`/${item?.category?.category_slug}/${item?.subcategory?.subcategory_slug}/${item?.post_slug}`}
              className="transition-all hover:text-blue-600"
            >
              {item.post_title}
            </Link>
          </h5>
        </div>
      ))}
    </div>
  );
};

export default LatestNews;
