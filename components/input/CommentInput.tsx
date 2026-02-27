type CommentInputProps = {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

export default function CommentInput({
  placeholder = "এখানে আপনার মন্তব্য শেয়ার করুন",
  value,
  onChange,
  className = "",
}: CommentInputProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
      className={`text-sm leading-6 text-[#171717] font-medium placeholder:text-[#525252] w-full bg-white border border-[#B6C3C8] p-2 sm:p-3 focus:outline-0 ${className}`}
    />
  );
}
