interface CategoryNewsHeadding {
  highlightText: string;
}

export default function CategoryNewsHeadding({ highlightText }: CategoryNewsHeadding) {
  return (
    <div>
      <h4 className="pb-3 relative after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-[#D4D4D4]">
        <span className="text-red">{highlightText}</span> - খবর থেকে আরো পড়ুন
      </h4>
    </div>
  );
}
