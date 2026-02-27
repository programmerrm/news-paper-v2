import { formatBanglaPublishedDate } from "@/utils/formatBanglaTimeAgo";

type ReportNewsProps = {
  reporterName: string;
  publishDate: string;
};

export default function ReportNews({
  reporterName,
  publishDate,
}: ReportNewsProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:divide-x divide-[#B6C3C8]">
      <h6 className="text-sm text-[#171717] font-semibold leading-5.5 pr-2">
        {reporterName}
      </h6>

      <p className="text-xs font-medium leading-4.5 text-[#525252]">
        {formatBanglaPublishedDate(publishDate)}
      </p>
    </div>
  );
}
