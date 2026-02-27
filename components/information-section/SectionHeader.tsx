interface SectionHeaderProps {
  title: string;
  className?: string;
}

export default function SectionHeader({
  title,
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`w-full pb-3 lg:pb-6 border-b-2 border-[#A1A1A1] ${className}`}
    >
      <h3>{title}</h3>
    </div>
  );
}