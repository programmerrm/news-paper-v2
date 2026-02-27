import Link from "next/link";

export default function SubCategory({ categorySlug, subCategories }: any) {
  if (!categorySlug && !subCategories) return null;
  return (
    <ul className="flex items-center gap-y-2 gap-x-6 flex-wrap mt-2">
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
    </ul>
  );
}
