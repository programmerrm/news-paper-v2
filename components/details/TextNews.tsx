type TextNewsProps = {
  text: string;
  className?: string;
};

export default function TextNews({ text, className = "" }: TextNewsProps) {
  return (
    <p
      className={`text-base sm:text-lg sm:leading-7 text-[#171717] ${className}`}
    >
      {text}
    </p>
  );
}
