interface SectionHeaderProps {
  category: string;
}

export default function SectionHeader({ category }: SectionHeaderProps) {
  return (
    <div>
      <h3>
        বিশেষ খবর - <span className="text-red">{category}</span>
      </h3>
    </div>
  );
}
