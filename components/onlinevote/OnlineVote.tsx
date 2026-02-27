"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import VoteItem from "./VoteItem";

type VoteOption = {
    id: string;
    label: string;
    value: string;
};

type OnlineVhoteProps = {
    image: StaticImageData;
    date: string;
    question: string;
    options: VoteOption[];
};

export default function OnlineVhote({
    image,
    date,
    question,
    options,
}: OnlineVhoteProps) {
    const [vote, setVote] = useState("");
    return (
        <div className="flex flex-col gap-4 overflow-hidden border border-[#A1A1A1] p-4">
            <Image
                src={image}
                alt="Online Vote Image"
                width={364}
                height={240}
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                priority
            />
            <div>
                <span className="text-[13px] text-[#525252]">{date}</span>
                <p className="text-sm sm:text-base font-medium mt-1">{question}</p>
                <form className="flex flex-col gap-2 mt-4">
                    {options.map((option) => (
                        <VoteItem
                            key={option.id}
                            idname={option.id}
                            name={question}
                            value={option.value}
                            label={option.label}
                            checked={vote === option.value}
                            onChange={setVote}
                        />
                    ))}
                    <button
                        type="button"
                        disabled
                        className="bg-red p-3 text-white font-medium mt-4 cursor-pointer transition-all hover:bg-red/80"
                    >
                        ভোট দিন
                    </button>
                </form>
            </div>
        </div>
    );
}
