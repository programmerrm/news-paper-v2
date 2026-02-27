"use client";

import CustomSelect from "../selects/CustomSelect";

type NewsFilterBarProps = {
  total: number | string;
  options: {
    label: string;
    value: string;
  }[];
};

export default function NewsFilterBar({
  total,
  options,
}: NewsFilterBarProps) {
  return (
    <div className="flex items-center justify-between gap-2">
      <p className="text-sm sm:text-base text-[#171717] font-medium leading-6">
        টোটাল খবর - <span>{total}</span>
      </p>

      <div>
        {options && 
        <CustomSelect 
         options={options} 
         className="py-2 px-3"
        />}
      </div>
    </div>
  );
}