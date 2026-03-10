// data/districts.ts

import { getFetchData } from "@/utils/getFetchData";

export const getDistricts = async (divisionId: number | string) => {

  if (!divisionId) {
    return [{ value: "", label: "জেলা" }];
  }

  const districtsData = await getFetchData(`/get/district?division_id=${divisionId}`);

  return [
    { value: "", label: "জেলা" },
    ...(districtsData?.map((item: any) => ({
      value: item.district_id,   // search এর জন্য id
      label: item.district_name, // UI তে নাম
    })) || [])
  ];
};
