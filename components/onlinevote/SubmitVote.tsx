"use client";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import OnVoteItem from "./OnvoteItem";

type VoteOption = {
  id: string;
  label: string;
  value: string;
  percent?: number;
};

type OnlineVhoteProps = {
  image: StaticImageData;
  date: string;
  question: string;
  options: VoteOption[];
  totalVotes: number;
};

export default function SubmitVote({
  image,
  date,
  question,
  options,
  totalVotes,
}: OnlineVhoteProps) {
  const [vote, setVote] = useState("");

  return (
    <div className="flex flex-col gap-4 border border-[#A1A1A1] p-4">
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
        <div className="mt-4 text-sm text-[#525252] font-medium">
            <h5>মোট ভোট - {totalVotes}</h5>
          </div>
        <form className="flex flex-col gap-2 mt-1">
          {options.map((option) => (
            <OnVoteItem
              key={option.id}
              idname={option.id}
              name={question}
              value={option.value}
              label={option.label}
              checked={vote === option.value}
              onChange={setVote}
              percent={option.percent}
              
            />
          ))}
        </form>
      </div>
    </div>
  );
}
