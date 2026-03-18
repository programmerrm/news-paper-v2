"use client";

import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Cookies from "js-cookie";
import { SERVER_API_URL } from "@/utils/api";
import { toast } from "react-toastify";

export default function UserProfileUpdateForm() {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [country, setCountry] = useState("");
    const [avatarLetter, setAvatarLetter] = useState("T");

    useEffect(() => {
        const userCookie = Cookies.get("user");
        if (userCookie) {
            try {
                const user = JSON.parse(userCookie);
                if (user.name) {
                    setName(user.name);
                    setAvatarLetter(user.name.charAt(0).toUpperCase());
                }
            } catch (err) {
                console.error("Failed to parse user cookie", err);
            }
        }
    }, []);

    const handleChange = (date: Date | null) => setStartDate(date);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const dob = startDate ? startDate.toISOString().split("T")[0] : "";

        const token = Cookies.get("access_token");
        if (!token) return toast.error("Not authenticated");

        try {
            const response = await fetch(`${SERVER_API_URL}/user/profile/update?name=${encodeURIComponent(name)}&dob=${dob}&country=${country}`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
            });

            if (response.ok) {
                toast.success("Profile updated successfully!");
            } else {
                const data = await response.json();
                toast.error("Failed to update profile: " + data.message || "");
            }
        } catch (err) {
            console.error(err);
            toast.error("Something went wrong!");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="text-xl sm:text-2xl font-medium mb-5 border-b border-[#E5E5E5] pb-2.5">
                My Profile
            </h2>

            {/* Avatar */}
            <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-xl font-semibold">
                {avatarLetter}
            </div>

            {/* Form Inputs */}
            <div className="w-full flex-1 space-y-4 mt-4">
                <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border border-[#B6C3C8] p-2 sm:p-4 outline-none text-sm leading-6 font-medium"
                />
                <div className="relative w-full">
                    <DatePicker
                        selected={startDate}
                        onChange={handleChange}
                        placeholderText="Select date"
                        dateFormat="dd/MM/yyyy"
                        showPopperArrow={false}
                        wrapperClassName="w-full"
                        className="w-full border border-[#B6C3C8] p-2 sm:p-4 pr-10 outline-none text-sm leading-6 font-medium"
                    />
                </div>
                <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full border border-[#B6C3C8] p-2 sm:p-4 outline-none text-sm leading-6 font-medium"
                >
                    <option value="">Country</option>
                    <option value="BD">Bangladesh</option>
                    <option value="USA">USA</option>
                </select>

                <button
                    type="submit"
                    className="w-full bg-red text-white text-sm font-medium leading-6 py-2 sm:py-3 hover:bg-red-900 transition-all duration-500"
                >
                    Edit Profile
                </button>
            </div>
        </form>
    );
}