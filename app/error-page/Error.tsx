"use client";

import { useRouter } from "next/navigation";

const SearchIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="24"
        height="24"
        viewBox="0 0 48 48"
    >
        <g>
            <path
                d="m40.9 39.485-7.813-7.812a14.878 14.878 0 0 0 3.72-9.865c0-4.007-1.56-7.774-4.393-10.607s-6.6-4.393-10.606-4.393S14.034 8.368 11.2 11.2s-4.393 6.6-4.393 10.607 1.56 7.773 4.393 10.606 6.6 4.394 10.607 4.394c3.67 0 7.13-1.323 9.865-3.721l7.812 7.812a.997.997 0 0 0 1.414 0 1 1 0 0 0 0-1.414zM12.614 31c-2.455-2.456-3.807-5.72-3.807-9.192s1.352-6.737 3.807-9.193c2.456-2.455 5.72-3.807 9.193-3.807S28.544 10.16 31 12.615c2.455 2.456 3.808 5.72 3.808 9.193S33.455 28.544 31 31c-2.456 2.455-5.72 3.808-9.192 3.808S15.07 33.455 12.615 31z"
                fill="#000000"
                opacity="1"
            />
        </g>
    </svg>
);

export default function NotFoundPage() {
    const router = useRouter();

    return (
        <div className="min-h-[62vh] flex items-center justify-center bg-transparent px-4">
            <div className="text-center max-w-xl w-full">
                <h1 className="text-red text-xl sm:text-2xl font-semibold mb-3">
                    সংবাদটি পাওয়া যায়নি
                </h1>

                <p className="text-gray-700 text-sm sm:text-base leading-6 mb-6">
                    দুঃখিত, এই লিংকটি হয়তো আর সক্রিয় নেই অথবা ঠিকভাবে প্রবেশ করানো হয়নি।
                    সর্বশেষ ও নির্ভরযোগ্য সংবাদ পেতে অনুগ্রহ করে Newsflash-এর হোমপেজে ফিরে যান।
                </p>

                <form action={"#"}>
                    <div className="relative mb-5 w-full max-w-122 mx-auto">
                        <input
                            type="text"
                            placeholder="সার্চ করুন"
                            className="w-full border border-[#B6C3C8] px-4 py-2 sm:py-3 pr-10 outline-none"
                        />
                        <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer">
                            <SearchIcon />
                        </button>
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            onClick={() => router.push("/")}
                            className="w-full max-w-60 bg-red text-white px-6 py-3 text-sm leading-6 font-medium hover:bg-red-900 transition cursor-pointer"
                        >
                            হোমপেজে ফিরে যান
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}