"use client";

import { useRef, useState } from "react";
import calenderIcon from "../../assets/icon/calender.svg"
import Image from "next/image";

export default function DatePicker() {
  const [date, setDate] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const hasDate = Boolean(date);

  const formatDate = (value: string) => {
    if (!value) return "";
    const d = new Date(value);
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    };
    return d.toLocaleDateString("bn-BD", options);
  };

  return (
    <div className="w-full border border-[#B6C3C8] py-2 lg:py-3 px-4 bg-white">
      <div className="relative">
        <input
          ref={inputRef}
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="absolute left-0 top-0 w-full h-full opacity-0 pointer-events-none"
        />

        <div className="w-full flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => inputRef.current?.showPicker()}
            className="cursor-pointer"
          >
            <Image 
                src={calenderIcon}
                alt="#"
            />
          </button>

          <span className={`${hasDate ? "text-title text-sm leading-6 font-medium" : "text-title text-sm leading-6 font-medium"}`}>
            {hasDate ? formatDate(date) : "তারিখ"}
          </span>
        </div>
      </div>
    </div>
  );
}
