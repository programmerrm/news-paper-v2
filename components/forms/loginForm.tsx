"use client";

import Link from "next/link";
import { Field } from "../field/field";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export default function LoginForm() {
    const [isShow, setIsShow] = useState<boolean>(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<any>();

    const onSubmitForm = async (formData: any) => {
        console.log('formData -- ', formData);
    }

    return (
        <form className="w-full" onSubmit={handleSubmit(onSubmitForm)}>
            <div>
                <div className="flex flex-col flex-wrap gap-y-2.5 w-full">
                    <Field label={"Enter your email"} error={errors.email}>
                        <input
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Enter a valid email.",
                                },
                                minLength: {
                                    value: 10,
                                    message: "Email must be at least 10 characters",
                                },
                                maxLength: {
                                    value: 40,
                                    message: "Email must be at most 40 characters",
                                },
                            })}
                            className="text-black placeholder:text-black text-sm md:text-base font-normal placeholder:text-sm md:placeholder:text-base placeholder:font-normal py-3 px-2.5 md:px-3.5 border border-black rounded-xl"
                            type="email"
                            name="email"
                            id="email"
                            autoFocus
                            placeholder="Enter your email"
                        />
                    </Field>
                </div>

                <div className="flex flex-col flex-wrap gap-y-2.5 w-full relative">
                    <Field label={"Enter your password"} error={errors.password}>
                        <div className="flex flex-col flex-wrap w-full relative">
                            <input
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 5,
                                        message: "Password must be at least 5 characters",
                                    },
                                    maxLength: {
                                        value: 15,
                                        message: "Password must be at most 15 characters",
                                    },
                                })}
                                className="text-black placeholder:text-black text-sm md:text-base font-normal placeholder:text-sm md:placeholder:text-base placeholder:font-normal py-3 px-3.5 border border-black rounded-xl"
                                type={isShow ? "text" : "password"}
                                name="password"
                                id="password"
                                placeholder="********"
                            />
                            <button
                                className="absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer z-50"
                                type="button"
                                onClick={() => setIsShow((prev) => !prev)}
                            >
                                {isShow ? (
                                    <EyeSlashIcon className="text-black text-lg md:text-xl" />
                                ) : (
                                    <EyeIcon className="text-black text-lg md:text-xl" />
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
                    <button className="bg-white text-title w-full flex items-center justify-center gap-2 p-2 sm:p-3 text-sm font-medium leading-6 transition-all border border-[#B6C3C8] cursor-pointer" type="submit">
                        Login
                    </button>
                </div>

                <span className="text-center block py-3 sm:py-4 text-sm leading-6 font-medium text-black">or</span>

                <div className="space-y-3">
                    <button className="bg-white text-title w-full flex items-center justify-center gap-2 p-2 sm:p-3 text-sm font-medium leading-6 transition-all border border-[#B6C3C8] cursor-pointer" type="button">
                        Facebook
                    </button>
                    <button className="bg-white text-title w-full flex items-center justify-center gap-2 p-2 sm:p-3 text-sm font-medium leading-6 transition-all border border-[#B6C3C8] cursor-pointer" type="button">
                        Google
                    </button>

                </div>

            </div>
        </form>
    );
}
