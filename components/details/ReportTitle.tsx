
type ReportTitleProps = {
  category: string;
  title: string;
};

export default function ReportTitle({
  category,
  title,
}: ReportTitleProps) {
  return (
    <div>
      <span className="text-xl leading-7 font-semibold text-red">
        {category}
      </span>

      <h1 className="mt-3">
          {title}
      </h1>
    </div>
  );
}
