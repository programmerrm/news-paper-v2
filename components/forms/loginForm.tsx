"use client";

import Link from "next/link";
import { Field } from "../field/field";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { SERVER_API_URL } from "@/utils/api";
import Cookies from "js-cookie";

type FormValues = {
    email: string;
    password: string;
};

export default function LoginForm() {
    const [isShow, setIsShow] = useState(false);
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
                `${SERVER_API_URL}/login?email=${formData.email}&password=${formData.password}`,
                {
                    method: "POST",
                }
            );

            const data = await response.json();

            if (!response.ok) {
                toast.error(data.message || "Login failed");
                return;
            }

            // save token and user
            Cookies.set("access_token", data.access_token, { expires: 7 });
            Cookies.set("user", JSON.stringify(data.user), { expires: 7 });

            toast.success(data.message || "Login successful");

            reset();

            // redirect user page
            router.push("/user");

        } catch (error) {
            console.error(error);
            toast.error("Something went wrong");
        }
    };

    return (
        <form
            className="flex flex-col flex-wrap gap-y-2.5 md:gap-y-5 w-full text-black pb-5"
            onSubmit={handleSubmit(onSubmitForm)}
        >
            <div className="flex flex-col flex-wrap gap-y-2.5 w-full">
                <Field label={""} error={errors.email}>
                    <input
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: "Enter a valid email.",
                            },
                        })}
                        className="text-sm leading-6 text-gray placeholder:text-gray font-inter w-full bg-white border border-[#B6C3C8] p-3 sm:p-4 focus:outline-0"
                        type="email"
                        placeholder="Email address"
                    />
                </Field>
            </div>

            <div className="flex flex-col flex-wrap gap-y-2.5 w-full relative">
                <Field label={""} error={errors.password}>
                    <div className="flex flex-col flex-wrap w-full relative">
                        <input
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 5,
                                    message: "Password must be at least 5 characters",
                                },
                            })}
                            className="text-sm leading-6 text-gray placeholder:text-gray font-inter w-full bg-white border border-[#B6C3C8] p-3 sm:p-4 focus:outline-0"
                            type={isShow ? "text" : "password"}
                            placeholder="Password"
                        />

                        <button
                            className="absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer"
                            type="button"
                            onClick={() => setIsShow((prev) => !prev)}
                        >
                            {isShow ? (
                                <EyeSlashIcon className="w-5 h-5" />
                            ) : (
                                <EyeIcon className="w-5 h-5" />
                            )}
                        </button>
                    </div>
                </Field>
            </div>

            <div className="flex items-center justify-between mt-4">
                <div className="flex items-center">
                    <label className="flex items-center cursor-pointer select-none group">
                        <input type="checkbox" className="sr-only" />
                        <div className="w-5 h-5 border border-[#B6C3C8] flex items-center justify-center group-has-checked:bg-green-600 group-has-checked:border-green-600 transition-all">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="white"
                                strokeWidth="3"
                                className="w-4 h-4 opacity-0 group-has-checked:opacity-100 transition-opacity"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>

                        <span className="text-xs sm:text-sm sm:leading-6 font-medium ml-2 text-[#171717]">Remember me</span>
                    </label>
                </div>
                <Link href="/user/forgot-password" className="font-inter text-[#171717] underline text-xs sm:text-sm sm:leading-6 font-medium">
                    Forget Password
                </Link>
            </div>

            <div className="mt-4 sm:mt-6">
                <button
                    className="bg-red text-white w-full flex items-center justify-center p-3 text-sm font-medium border border-[#B6C3C8] cursor-pointer"
                    type="submit"
                >
                    Login
                </button>
            </div>
        </form>
    );
}