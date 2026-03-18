"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { toast } from "react-toastify";
import { SERVER_API_URL } from "@/utils/api";
import Cookies from "js-cookie";

type FormValues = {
    current_password: string;
    new_password: string;
    new_password_confirmation: string;
};

export default function ChangePasswordForm() {
    const [showCurrent, setShowCurrent] = useState(false);
    const [showNew, setShowNew] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>();

    const onSubmitForm = async (data: FormValues) => {
        try {
            const token = Cookies.get("access_token");
            const response = await fetch(`${SERVER_API_URL}/user/password/change`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                toast.error(result.message || "Password change failed");
                return;
            }

            toast.success(result.message || "Password changed successfully");
            reset();
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong");
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmitForm)}>
            <h2 className="text-xl sm:text-2xl sm:leading-6 font-medium mb-5 sm:mb-10 border-b border-[#E5E5E5] pb-2.5 sm:pb-5">
                Change Password
            </h2>

            {/* Current Password */}
            <div className="relative mb-4">
                <input
                    {...register("current_password", { required: "Current password is required" })}
                    type={showCurrent ? "text" : "password"}
                    placeholder="Current Password"
                    className="w-full border border-[#B6C3C8] p-2 sm:p-4 pr-12 rounded outline-none"
                />
                <button
                    type="button"
                    onClick={() => setShowCurrent(!showCurrent)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors duration-200"
                >
                    {showCurrent ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                </button>
                {errors.current_password && <p className="text-red-500 text-sm mt-1">{errors.current_password.message}</p>}
            </div>

            {/* New Password */}
            <div className="relative mb-4">
                <input
                    {...register("new_password", {
                        required: "New password is required",
                        minLength: { value: 5, message: "Password must be at least 5 characters" }
                    })}
                    type={showNew ? "text" : "password"}
                    placeholder="New Password"
                    className="w-full border border-[#B6C3C8] p-2 sm:p-4 pr-10 outline-none"
                />
                <button
                    type="button"
                    onClick={() => setShowNew(!showNew)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors duration-200"
                >
                    {showNew ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                </button>
                {errors.new_password && <p className="text-red-500 text-sm mt-1">{errors.new_password.message}</p>}
            </div>

            {/* Confirm Password */}
            <div className="relative mb-6">
                <input
                    {...register("new_password_confirmation", {
                        required: "Confirm password is required",
                        validate: (value, formValues) => value === formValues.new_password || "Passwords do not match"
                    })}
                    type={showConfirm ? "text" : "password"}
                    placeholder="Confirm Password"
                    className="w-full border border-[#B6C3C8] p-2 sm:p-4 pr-10 outline-none"
                />
                <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors duration-200"
                >
                    {showConfirm ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                </button>
                {errors.new_password_confirmation && <p className="text-red-500 text-sm mt-1">{errors.new_password_confirmation.message}</p>}
            </div>

            <button
                type="submit"
                className="w-full bg-red text-white py-3 text-sm font-medium rounded hover:bg-red-900 transition-colors duration-200"
            >
                Save Password
            </button>

        </form>
    );
}