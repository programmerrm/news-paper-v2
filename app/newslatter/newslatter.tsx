"use client";

import { useState } from "react";
export default function SubscriptionForm() {
    const [email, setEmail] = useState("");
    const [categories, setCategories] = useState<string[]>([]);
    const categoryOptions = [
        "রাজনীতি",
        "অর্থনীতি",
        "আন্তর্জাতিক সংবাদ",
        "জনসাধারণ",
        "খেলাধুলা",
        "অপরাধ",
        "দূর্ঘটনা"
    ];
    const handleCheckboxChange = (category: string) => {
        if (categories.includes(category)) {
            setCategories(categories.filter((c) => c !== category));
        } else {
            setCategories([...categories, category]);
        }
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        alert("সাবস্ক্রিপশন সফলভাবে জমা হয়েছে!");
        
    };
    return (
        <div className="flex justify-center py-6 md:py-12">
            <div className="">
                <h3 className="text-red text-center font-semibold mb-3">
                    আপনার পছন্দের খবর, সরাসরি ইনবক্সে
                </h3>
                <p className="text-title text-bsdr sm:text-lg leading-7 text-center mb-6">
                    রাজনীতি, অর্থনীতি, আন্তর্জাতিক সংবাদ, খেলা ও জীবনযাপন—
 Newsflash বাছাই করা গুরুত্বপূর্ণ খবর পৌঁছে দেবে আপনার ইমেইলে। এক ক্লিকেই সাবস্ক্রাইব করুন, আপডেট থাকুন নির্ভরযোগ্য সংবাদের সাথে।
                </p>

                <form onSubmit={handleSubmit} className="bg-[#E0EBF0] w-full px-4 py-7 md:py-14">
                    <div className=" max-w-122 mx-auto">
                        <label className="block mb-2 text-title text-sm sm:text-base leading-6.5">
                            Email Address
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full border border-[#B6C3C8] px-2 sm:px-4 py-1.5 sm:py-3 rounded-xs mb-4 outline-none bg-white text-sm leading-5.5 text-[#404040] placeholder:text-[#404040]"
                            required
                        />

                        <p className="text-title text-sm sm:text-base leading-6.5 mb-2">
                            আপনার আগ্রহ অনুযায়ী টপিক সিলেক্ট করুন -
                        </p>

                        <div className="mb-2 sm:mb-4">
                            {categoryOptions.map((category, index) => (
                                <div key={category} className="flex items-center gap-3 sm:gap-4 mb-1 sm:mb-2">
                                    <input
                                        type="checkbox"
                                        id={`category-${index}`}
                                        checked={categories.includes(category)}
                                        onChange={() => handleCheckboxChange(category)}
                                        className="w-4 sm:w-[19] h-4 sm:h-[19] accent-red-600 cursor-pointer"
                                    />
                                    <label htmlFor={`category-${index}`} className="text-[#000000] text-sm sm:text-base leading-6.5 cursor-pointer">
                                        {category}
                                    </label>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center justify-center">
                            <button
                                type="submit"
                                className="w-full max-w-60 bg-red text-white text-sm leading-6 font-medium p-2 sm:p-3 hover:bg-red-900 transition cursor-pointer"
                            >
                                সাবস্ক্রাইব করুন
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}