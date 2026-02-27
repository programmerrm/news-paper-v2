"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import CaretDown from "../../assets/image/caretdown.svg";

export type SelectOption = {
  value: string;
  label: string;
};

type CustomSelectProps = {
  options: SelectOption[];     
  icon?: StaticImageData;      
  defaultValue?: string; 
  className?: string;       
};

export default function CustomSelect({
  options,
  icon,
  defaultValue,
  className = " py-2 lg:py-3 px-4",
  
}: CustomSelectProps) {
  const initial =
    options.find((opt) => opt.value === defaultValue) || options[0];

  const [selected, setSelected] = useState<SelectOption>(initial);
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <div
        className={`border border-[#B6C3C8] bg-white text-sm font-medium leading-6
          flex items-center justify-between cursor-pointer gap-1 ${className}`}
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-2">
          {icon && <Image src={icon} alt="icon" width={16} height={16} />}
           <span>{selected.label}</span> 
        </div>

        <Image src={CaretDown} alt="caretdown" width={16} height={16} />
      </div>

      {open && (
        <ul className="absolute z-30 w-full border border-[#B6C3C8] bg-white shadow-md text-sm font-medium leading-6 max-h-60 overflow-auto">
          {options.map((option) => (
            <li
              key={option.value}
              className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                selected.value === option.value
                  ? "bg-gray-100 font-medium"
                  : ""
              }`}
              onClick={() => {
                setSelected(option);
                setOpen(false);
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
