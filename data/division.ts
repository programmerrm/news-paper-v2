// data/divisions.ts

import { getFetchData } from "@/utils/getFetchData";

const divisionsData = await getFetchData("/divisions");

export const divisions = [
  { value: "", label: "বিভাগ" },
  ...(divisionsData?.map((item: any) => ({
    value: item.division_id,
    label: item.division_name,
  })) || []),
];
