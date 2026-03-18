"use client";

import { SERVER_API_URL } from "@/utils/api";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { Field } from "../field/field";

type FormValues = {
    password: string;
    password_confirmation: string;
};

export default function ResetPasswordForm() {
    const [showNew, setShowNew] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormValues>();

    const router = useRouter();

    const onSubmitForm = async (data: FormValues) => {
        console.log("submit triggered ✅");

        try {
            const email = Cookies.get("forgot_password_email");
            const code = Cookies.get("code");

            console.log({ email, code, data });

            if (!email || !code) {
                toast.error("Session expired. Please try again.");
                return;
            }

            const response = await fetch(`${SERVER_API_URL}/reset-password`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    code,
                    password: data.password,
                    password_confirmation: data.password_confirmation,
                }),
            });

            console.log("status:", response.status);

            const result = await response.json();

            if (!response.ok) {
                toast.error(result.message || "Password reset failed");
                return;
            }

            toast.success(result.message || "Password reset successfully");

            // clear cookies
            Cookies.remove("forgot_password_email");
            Cookies.remove("code");

            router.push("/user/login");
            reset();
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong");
        }
    };

    return (
        <form className="w-full" onSubmit={handleSubmit(onSubmitForm)}>
            <div>
                {/* New Password */}
                <Field error={errors.password}>
                    <div className="relative mb-4">
                        <input
                            {...register("password", {
                                required: "New password is required",
                                minLength: {
                                    value: 5,
                                    message: "Password must be at least 5 characters",
                                },
                            })}
                            type={showNew ? "text" : "password"}
                            placeholder="New Password"
                            className="w-full border border-[#B6C3C8] p-2 sm:p-4 pr-10 outline-none"
                        />

                        <button
                            type="button"
                            onClick={() => setShowNew(!showNew)}
                            className="absolute right-3 top-1/2 -translate-y-1/2"
                        >
                            {showNew ? (
                                <EyeSlashIcon className="w-5 h-5" />
                            ) : (
                                <EyeIcon className="w-5 h-5" />
                            )}
                        </button>
                    </div>
                </Field>

                {/* Confirm Password */}
                <Field error={errors.password_confirmation}>
                    <div className="relative mb-6">
                        <input
                            {...register("password_confirmation", {
                                required: "Confirm password is required",
                                validate: (value, formValues) =>
                                    value === formValues.password ||
                                    "Passwords do not match",
                            })}
                            type={showConfirm ? "text" : "password"}
                            placeholder="Confirm Password"
                            className="w-full border border-[#B6C3C8] p-2 sm:p-4 pr-10 outline-none"
                        />

                        <button
                            type="button"
                            onClick={() => setShowConfirm(!showConfirm)}
                            className="absolute right-3 top-1/2 -translate-y-1/2"
                        >
                            {showConfirm ? (
                                <EyeSlashIcon className="w-5 h-5" />
                            ) : (
                                <EyeIcon className="w-5 h-5" />
                            )}
                        </button>
                    </div>
                </Field>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-red text-white py-3 text-sm font-medium rounded hover:bg-red-900 transition"
                >
                    Continue
                </button>
            </div>
        </form>
    );
}