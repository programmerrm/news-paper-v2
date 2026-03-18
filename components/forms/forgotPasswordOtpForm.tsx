"use client";

import { useForm } from "react-hook-form";
import { Field } from "../field/field";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

type FormValues = {
  otp1: string;
  otp2: string;
  otp3: string;
  otp4: string;
  otp5: string;
};

export default function ForgotPasswordOtpForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmitForm = (formData: FormValues) => {
    const otp =
      formData.otp1 +
      formData.otp2 +
      formData.otp3 +
      formData.otp4 +
      formData.otp5;

    Cookies.set("code", otp, { expires: 1 });

    toast.success("OTP saved successfully");

    router.push("/user/reset-password");
  };


  const moveNext = (e: any) => {
    // remove non number
    e.target.value = e.target.value.replace(/[^0-9]/g, "");

    if (e.target.value.length === 1) {
      const parent = e.target.parentElement?.parentElement;
      const nextBox = parent?.nextElementSibling?.querySelector("input");

      if (nextBox) nextBox.focus();
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
                  pattern: {
                    value: /^[0-9]$/,
                    message: "Only numbers allowed",
                  },
                })}
                onInput={moveNext}
                inputMode="numeric"
                maxLength={1}
                className="absolute inset-0 w-full h-full text-center text-lg font-semibold focus:outline-none bg-transparent"
                type="text"
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