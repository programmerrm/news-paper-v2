import { divisions } from "@/data/division";
import CustomSelect from "../selects/CustomSelect";
import { districts } from "@/data/districts";
import { subdistricts } from "@/data/subdistricts";
import Button from "../button/Button";

export default function Bangladesh() {
    return (
        <div className="bg-[#E0EBF0] p-4 lg:p-8 mt-8 ">
            <h5 className="text-center mb-3.5">আপনার এলাকার খবর</h5>
            <form action="" className="flex flex-col sm:flex-row items-center gap-3">
                <div className="w-full grid sm:grid-cols-3 gap-3 sm:flex-1">
                    <CustomSelect
                        options={divisions}
                    />
                    <CustomSelect
                        options={districts}
                    />
                    <CustomSelect
                        options={subdistricts}
                    />
                </div>
                <div className="w-full sm:max-w-40 lg:max-w-60">
                    <Button
                        text="সার্চ করুন"
                    />
                </div>
            </form>
        </div>
    )
}
