"use client";

import { useForm } from "react-hook-form";
import { Field } from "../field/field";

type FormValues = {
    otp1: string;
    otp2: string;
    otp3: string;
    otp4: string;
    otp5: string;
};

export default function VerifyOtpForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();

    const onSubmitForm = async (formData: FormValues) => {
        const otp =
            formData.otp1 +
            formData.otp2 +
            formData.otp3 +
            formData.otp4 +
            formData.otp5;

        console.log("OTP:", otp);
    };

    const moveNext = (e: any) => {
        if (e.target.value.length === 1) {
            const next = e.target.nextElementSibling;
            if (next) next.focus();
        }
    };

    return (
        <form className="w-full" onSubmit={handleSubmit(onSubmitForm)}>
            <div className="flex items-center justify-center gap-3">
                {[1, 2, 3, 4, 5].map((num) => (
                    <div
                        key={num}
                        className="w-14 h-14 bg-white flex items-center justify-center border border-[#B6C3C8] relative"
                    >
                        <Field error={errors[`otp${num}` as keyof FormValues]}>
                            <input
                                {...register(`otp${num}` as keyof FormValues, {
                                    required: "OTP required",
                                    maxLength: 1,
                                })}
                                onInput={moveNext}
                                maxLength={1}
                                className="absolute inset-0 w-full h-full text-center text-lg font-semibold focus:outline-none bg-transparent"
                                type="number"
                            />
                        </Field>
                    </div>
                ))}

            </div>

            <div className="mt-6">
                <button
                    className="bg-white text-title w-full flex items-center justify-center gap-2 p-3 text-sm font-medium border border-[#B6C3C8] cursor-pointer"
                    type="submit"
                >
                    Continue
                </button>
            </div>
        </form>
    );
}