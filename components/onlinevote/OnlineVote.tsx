"use client";

import Image from "next/image";
import { useState } from "react";
import VoteItem from "./VoteItem";
import { SERVER_API_URL } from "@/utils/api";
import { toast } from "react-toastify";

type VoteOption = {
    id: string;
    label: string;
    value: string;
};

type OnlineVhoteProps = {
    vote_id: number;
    image: string;
    date: string;
    question: string;
    options: VoteOption[];
};

export default function OnlineVhote({
    vote_id,
    image,
    date,
    question,
    options,
}: OnlineVhoteProps) {
    const [vote, setVote] = useState("");
    const [loading, setLoading] = useState(false);


    const handleVoteSubmit = async () => {
        if (!vote) {
            toast("একটি অপশন নির্বাচন করুন");
            return;
        }

        try {
            setLoading(true);

            const body = {
                id: vote_id,
                option_one_count: vote === "one" ? 1 : 0,
                option_two_count: vote === "two" ? 1 : 0,
                option_three_count: vote === "three" ? 1 : 0,
                option_four_count: vote === "four" ? 1 : 0,
            };

            const res = await fetch(`${SERVER_API_URL}/section/four/given/vote`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            });

            if (!res.ok) throw new Error("Vote failed");

            toast.success("ভোট সফলভাবে দেওয়া হয়েছে");
            setVote("");
        } catch (error) {
            console.error(error);
            toast.error("ভোট দিতে সমস্যা হয়েছে");
        } finally {
            setLoading(false);
        }
    };

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
                        onClick={handleVoteSubmit}
                        disabled={!vote || loading}
                        className="bg-red p-3 text-white font-medium mt-4 cursor-pointer transition-all hover:bg-red/80 disabled:opacity-50"
                    >
                        {loading ? "দেওয়া হচ্ছে..." : "ভোট দিন"}
                    </button>
                </form>
            </div>
        </div>
    );
}
