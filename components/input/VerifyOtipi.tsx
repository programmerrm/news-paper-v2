"use client";

type Props = {
  index?: number;
};

export default function VerifyOtipi({ index }: Props) {
  return (
    <input
      type="text"
      inputMode="numeric"
      maxLength={1}
      onInput={(e) => {
        e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "");
      }}
      className="absolute inset-0 w-full h-full text-center text-base leading-6 text-[#404040] font-inter focus:outline-none bg-transparent"
    />
  );
}