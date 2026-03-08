"use client";

import { useState } from "react";
import { Field } from "../field/field";
import { useForm } from "react-hook-form";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { SERVER_API_URL } from "@/utils/api";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

type FormValues = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
};

export default function RegistrationForm() {
    const [show, setShow] = useState({ password: false, confirm: false });

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormValues>();

    const password = watch("password");

    const toggleVisibility = (field: "password" | "confirm") => {
        setShow((prev) => ({ ...prev, [field]: !prev[field] }));
    };

    const onSubmitForm = async (formData: FormValues) => {
        try {
            const response = await fetch(`${SERVER_API_URL}/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                toast.error(data.message || "Registration failed");
                return;
            }

            // cookie set
            Cookies.set("access_token", data.access_token, { expires: 7 });
            Cookies.set("user", JSON.stringify(data.user), { expires: 7 });

            toast.success(data.message || "Registration successful");

            console.log("User:", data.user);
            console.log("Token:", data.access_token);

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
            {/* Name */}
            <Field label="" error={errors.name}>
                <input
                    {...register("name", {
                        required: "Full name is required",
                        minLength: { value: 3, message: "Minimum 3 characters" },
                    })}
                    className="text-black text-sm md:text-base py-3 px-3 border border-black rounded-xl"
                    type="text"
                    placeholder="Full Name"
                />
            </Field>

            {/* Email */}
            <Field label="" error={errors.email}>
                <input
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Enter a valid email",
                        },
                    })}
                    className="text-black text-sm md:text-base py-3 px-3 border border-black rounded-xl"
                    type="email"
                    placeholder="Email address"
                />
            </Field>

            {/* Password */}
            <Field label="" error={errors.password}>
                <div className="relative">
                    <input
                        {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Minimum 6 characters" },
                        })}
                        className="w-full text-black py-3 px-3 border border-black rounded-xl"
                        type={show.password ? "text" : "password"}
                        placeholder="Password"
                    />

                    <button
                        type="button"
                        className="absolute top-1/2 -translate-y-1/2 right-4"
                        onClick={() => toggleVisibility("password")}
                    >
                        {show.password ? (
                            <EyeSlashIcon className="w-5 h-5" />
                        ) : (
                            <EyeIcon className="w-5 h-5" />
                        )}
                    </button>
                </div>
            </Field>

            {/* Confirm Password */}
            <Field label="" error={errors.password_confirmation}>
                <div className="relative">
                    <input
                        {...register("password_confirmation", {
                            required: "Confirm password is required",
                            validate: (value) =>
                                value === password || "Passwords do not match",
                        })}
                        className="w-full text-black py-3 px-3 border border-black rounded-xl"
                        type={show.confirm ? "text" : "password"}
                        placeholder="Confirm Password"
                    />

                    <button
                        type="button"
                        className="absolute top-1/2 -translate-y-1/2 right-4"
                        onClick={() => toggleVisibility("confirm")}
                    >
                        {show.confirm ? (
                            <EyeSlashIcon className="w-5 h-5" />
                        ) : (
                            <EyeIcon className="w-5 h-5" />
                        )}
                    </button>
                </div>
            </Field>

            <span className="text-sm">
                Use atleast 8 characters, mix of numbers & letters
            </span>

            <button
                className="cursor-pointer bg-black text-white text-sm md:text-base font-medium px-10 py-3.5 rounded-xl"
                type="submit"
            >
                Registration
            </button>
        </form>
    );
}