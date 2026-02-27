"use client";
type VoteItemProps = {
  idname: string;
  name: string;
  label: string;
  value: string;
  checked?: boolean;
  onChange?: (value: string) => void;
  percent?: number;
};

export default function OnvoteItem({
  idname,
  name,
  label,
  value,
  checked = true,
  onChange,
  percent = 0,
}: VoteItemProps) {
  return (
    <label
      htmlFor={idname}
      className="relative flex items-center gap-3 px-4 py-2 border border-[#D4D4D4] cursor-pointer overflow-hidden"
    >
      {percent > 0 && (
        <div
          className="absolute left-0 top-0 h-full bg-[#FDE3E4]"
          style={{ width: `${percent}%` }}
        ></div>
      )}

      <input
        id={idname}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange?.(value)}
        className="relative z-10 cursor-pointer"
      />
      <span className="relative z-10 font-medium">{label}</span>

      {percent > 0 && (
        <span className="ml-auto relative z-10 font-medium">{percent}%</span>
      )}
    </label>
  );
}
