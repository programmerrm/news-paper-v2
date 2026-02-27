import BreadcrumbItem from "./BreadcrumbItem";

interface NewsBreadcrumbProps {
  title: string;
  subtitle?: string;
}

export default function NewsBreadcrumb({
  title,
  subtitle,
}: NewsBreadcrumbProps) {
  const hasBreadcrumb = typeof subtitle === "string" && subtitle.length > 0;
  return (
    <div className="flex items-center gap-4">
      <h2 className={hasBreadcrumb ? "text-[#525252]" : "text-black"}>
        {title}
      </h2>
      {hasBreadcrumb && <BreadcrumbItem text={subtitle} />}
    </div>
  );
}
