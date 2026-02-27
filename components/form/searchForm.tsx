"use client";

import Image, { StaticImageData } from "next/image";

type SearchFormProps = {
  placeholder?: string;
  icon: StaticImageData;
};

export default function SearchForm({
  placeholder = "সার্চ করুন",
  icon,
}: SearchFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const value = formData.get("search");

    console.log("Search:", value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-3 border border-[#B6C3C8] px-4 py-2.75 mb-3"
    >
      <div className="flex-1">
        <input
          type="text"
          name="search"
          placeholder={placeholder}
          className="w-full h-full focus:outline-none text-base leading-6.5 font-normal text-black placeholder:text-black"
        />
      </div>

      <button className="w-5 flex items-center justify-center cursor-pointer">
        <Image src={icon} alt="search icon" width={20} height={20} />
      </button>
    </form>
  );
}
