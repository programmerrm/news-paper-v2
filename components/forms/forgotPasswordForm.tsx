"use client";

import { Field } from "../field/field";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { SERVER_API_URL } from "@/utils/api";
import Cookies from "js-cookie";

type FormValues = {
    email: string;
};

export default function ForgotPasswordForm() {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormValues>();

    const onSubmitForm = async (formData: FormValues) => {
        try {
            const response = await fetch(
                `${SERVER_API_URL}/forgot-password?email=${formData.email}`,
                {
                    method: "POST",
                }
            );

            const data = await response.json();

            if (!response.ok) {
                toast.error(data.message || "Failed to send verification code");
                return;
            }

            toast.success(data.message || "Verification code sent to your email");

            Cookies.set("forgot_password_email", formData.email, { expires: 1 }); 

            reset();

            // redirect verification page
            router.push("/user/forgot-password/verification");

        } catch (error) {
            console.error(error);
            toast.error("Something went wrong");
        }
    };

    return (
        <form
            className="flex flex-col gap-y-3 w-full text-black pb-5"
            onSubmit={handleSubmit(onSubmitForm)}
        >
            <Field label="" error={errors.email}>
                <input
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Enter a valid email.",
                        },
                    })}
                    className="text-sm w-full bg-white border border-[#B6C3C8] p-3 sm:p-4 focus:outline-0"
                    type="email"
                    placeholder="Email address"
                />
            </Field>

            <div className="mt-4">
                <button
                    className="bg-red text-white w-full flex items-center justify-center p-3 text-sm font-medium border border-[#B6C3C8] cursor-pointer"
                    type="submit"
                >
                    Send verification code
                </button>
            </div>
        </form>
    );
}