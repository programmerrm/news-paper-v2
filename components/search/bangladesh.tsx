"use client";

import { useState } from "react";
import Link from "next/link";
import { divisions } from "@/data/division";
import { getDistricts } from "@/data/districts";
import { getUpazillas } from "@/data/subdistricts";
import CustomSelect from "../selects/CustomSelect";

export default function Bangladesh() {

    const [selectedDivision, setSelectedDivision] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [selectedUpazilla, setSelectedUpazilla] = useState("");

    const [districts, setDistricts] = useState([{ value: "", label: "জেলা" }]);
    const [upazillas, setUpazillas] = useState([{ value: "", label: "উপজেলা" }]);

    const handleDivisionChange = async (divisionId: any) => {
        setSelectedDivision(divisionId);

        const data = await getDistricts(divisionId);
        setDistricts(data);

        setSelectedDistrict("");
        setUpazillas([{ value: "", label: "উপজেলা" }]);
        setSelectedUpazilla("");
    };

    const handleDistrictChange = async (districtId: any) => {
        setSelectedDistrict(districtId);

        const data = await getUpazillas(districtId);
        setUpazillas(data);

        setSelectedUpazilla("");
    };

    const handleUpazillaChange = (upazillaId: any) => {
        setSelectedUpazilla(upazillaId);
    };

    const query = new URLSearchParams();
    if (selectedDivision) query.append("division_id", selectedDivision);
    if (selectedDistrict) query.append("district_id", selectedDistrict);
    if (selectedUpazilla) query.append("upazilla_id", selectedUpazilla);

    return (
        <div className="bg-[#E0EBF0] p-4 lg:p-8 mt-8 ">
            <h5 className="text-center mb-3.5">
                আপনার এলাকার খবর
            </h5>
            <form className="flex flex-col sm:flex-row items-center gap-3">
                <div className="w-full grid sm:grid-cols-3 gap-3 sm:flex-1">
                    <CustomSelect
                        options={divisions}
                        onChange={handleDivisionChange}
                    />
                    <CustomSelect
                        options={districts}
                        onChange={handleDistrictChange}
                    />
                    <CustomSelect
                        options={upazillas}
                        onChange={handleUpazillaChange}
                    />
                </div>
                <div className="w-full sm:max-w-40 lg:max-w-60">
                    <Link
                        className="w-full flex items-center justify-center border border-[#B6C3C8] gap-2 p-2 sm:p-3.5 text-sm font-medium bg-red text-white cursor-pointer transition-all hover:bg-red-900"
                        href={`/search/news?${query.toString()}`}
                    >
                        সার্চ করুন
                    </Link>
                </div>
            </form>
        </div>
    );
}
