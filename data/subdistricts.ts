// data/subdistricts.ts

import { getFetchData } from "@/utils/getFetchData";

export const getUpazillas = async (districtId: number | string) => {

  if (!districtId) {
    return [{ value: "", label: "উপজেলা" }];
  }

  const upazillaData = await getFetchData(`/get/upazilla?district_id=${districtId}`);

  return [
    { value: "", label: "উপজেলা" },
    ...(upazillaData?.map((item: any) => ({
      value: item.upazilla_id,     // search এর জন্য id
      label: item.upazilla_name,   // UI তে নাম
    })) || [])
  ];
};
