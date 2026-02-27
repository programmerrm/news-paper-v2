"use client";
type VoteItemProps = {
  idname: string;
  name: string;
  label: string;
  value: string;
  checked?: boolean;
  onChange?: (value: string) => void;
};
export default function VoteItem({
  idname,
  name,
  label,
  value,
  checked = false,
  onChange,
}: VoteItemProps) {
  return (
    <label
      htmlFor={idname}
      className="flex items-center gap-2 px-4 py-2.5 border border-[#D4D4D4] cursor-pointer"
    >
      
      <input
        id={idname}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange?.(value)}
        className="cursor-pointer"
      />
      <span className="leading-6 font-medium">{label}</span>
    </label>
  );
}
