"use client";

import Image, { StaticImageData } from "next/image";
type ButtonProps = {
  text?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  imageSrc?: StaticImageData;
  bgColor?: string;     
  hoverColor?: string;  
  textColor?: string;   
  hoverTextColor?: string; 
};

export default function Button({
  text = "Login",
  disabled = false,
  onClick,
  imageSrc,
  bgColor = "#A71E22",
  hoverColor = "#B91C1C",
  textColor = "#FFFFFF",
  hoverTextColor = "#FFFFFF",
}: ButtonProps) {
  return (
    <button 
      type="submit"
      onClick={onClick}
      disabled={disabled}
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
      className="w-full flex items-center justify-center gap-2 p-2 sm:p-3 text-sm font-medium leading-6 transition-all border border-[#B6C3C8] cursor-pointer"
      onMouseEnter={(e) => {
        if (!disabled) {
          e.currentTarget.style.backgroundColor = hoverColor;
          e.currentTarget.style.color = hoverTextColor;
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          e.currentTarget.style.backgroundColor = bgColor;
          e.currentTarget.style.color = textColor;
        }
      }}
    >
      {imageSrc && (
        <Image 
          src={imageSrc}
          alt=""
          width={20} 
          height={20} 
        />
      )}
      {text}
    </button>
  );
}