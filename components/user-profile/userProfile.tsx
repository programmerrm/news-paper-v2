"use client";

import Image from "next/image";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "./button";
import { comments } from "@/data/commentsData";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";


export default function UserProfile() {
    const [showCurrent, setShowCurrent] = useState(false);
    const [showNew, setShowNew] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [activeTab, setActiveTab] = useState("profile");
    const [activeCommentId, setActiveCommentId] = useState<number | null>(null);
    const router = useRouter();

    const handleViewComment = (id: number) => {
        setActiveCommentId((prev) => (prev === id ? null : id));
    };
    const [startDate, setStartDate] = useState<Date | null>(null);

    const handleChange = (date: Date | null) => {
        setStartDate(date);
    };

    const handleLogout = () => {
        Cookies.remove("access_token");
        Cookies.remove("user");


        router.push("/user/login");
    };

    return (
        <div className="w-full flex flex-col sm:flex-row gap-10 lg:gap-16 xl:gap-24">
            {/* Sidebar */}
            <div className="w-full sm:w-64 sm:min-h-124 bg-white border border-[#B6C3C8] p-4 flex flex-col justify-between">
                <div>
                    <Button
                        active={activeTab === "profile"}
                        onClick={() => setActiveTab("profile")}
                    >
                        My Profile
                    </Button>

                    <Button
                        active={activeTab === "password"}
                        onClick={() => setActiveTab("password")}
                    >
                        Change Password
                    </Button>

                    <Button
                        active={activeTab === "comments"}
                        onClick={() => setActiveTab("comments")}
                    >
                        My Comments
                    </Button>
                </div>

                <button
                    onClick={handleLogout}
                    className="border border-red text-red p-2 mt-10 hover:bg-red-50 cursor-pointer flex items-center gap-2"
                    type="button"
                >
                    <span>Logout</span>
                </button>
            </div>

            {/* Content */}
            <div className="flex-1 h-fit bg-white">
                {/* Profile Tab */}
                {activeTab === "profile" && (
                    <>
                        <h2 className="text-xl sm:text-2xl sm:leading-6 font-medium mb-5 sm:mb-10 border-b border-[#E5E5E5] pb-2.5 sm:pb-5">
                            My Profile
                        </h2>
                        <div className="flex flex-col gap-6 items-start">
                            <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-xl font-semibold">
                                T
                            </div>
                            <div className="w-full flex-1 space-y-4">
                                <input
                                    id="FirstName"
                                    name="FirstName"
                                    type="text"
                                    placeholder="Theresa Webb"
                                    className="w-full border border-[#B6C3C8] p-2 sm:p-4 outline-none text-sm leading-6 font-medium "
                                />
                                <input
                                    id="LaststName"
                                    name="LaststName"
                                    type="tel"
                                    placeholder="Contact number"
                                    maxLength={11}
                                    inputMode="numeric"
                                    onInput={(e) => {
                                        e.currentTarget.value = e.currentTarget.value
                                            .replace(/[^0-9]/g, "")
                                            .slice(0, 11);
                                    }}
                                    className="w-full border border-[#B6C3C8] p-2 sm:p-4 outline-none text-sm leading-6 font-medium"
                                />
                                <div className="relative w-full">
                                    <DatePicker
                                        selected={startDate}
                                        onChange={handleChange}
                                        placeholderText="Select date"
                                        dateFormat="dd/MM/yyyy"
                                        wrapperClassName="w-full"
                                        className="w-full border border-[#B6C3C8] p-2 sm:p-4 pr-10 outline-none text-sm leading-6 font-medium"
                                    />

                                    <svg
                                        className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                                <div className="relative w-full">
                                    <select className="w-full appearance-none border border-[#B6C3C8] p-2 sm:p-4 outline-none text-sm leading-6 font-medium">
                                        <option>Country</option>
                                        <option>Bangladesh</option>
                                        <option>USA</option>
                                    </select>
                                    <svg
                                        className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </div>
                                <button className="w-full bg-red text-white text-sm font-medium leading-6 py-2 sm:py-3 transition-all duration-500 hover:bg-red-900 cursor-pointer">
                                    Edit Profile
                                </button>
                            </div>
                        </div>
                    </>
                )}

                {/* Password Tab */}
                {activeTab === "password" && (

                    <>
                        <h2 className="text-xl sm:text-2xl sm:leading-6 font-medium mb-5 sm:mb-10 border-b border-[#E5E5E5] pb-2.5 sm:pb-5">
                            Change Password
                        </h2>

                        <div className="relative mb-4">
                            <input
                                id="CurrentPassword"
                                name="CurrentPassword"
                                type={showCurrent ? "text" : "password"}
                                placeholder="Current Password"
                                className="w-full border border-[#B6C3C8] p-2 sm:p-4 pr-12 rounded outline-none"
                            />

                            <button
                                type="button"
                                onClick={() => setShowCurrent(!showCurrent)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors duration-200"
                            >
                                {showCurrent ? (
                                    /* eye icon */
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 sm:w-6 h-4 sm:h-6" fill="none" viewBox="0 0 24 24"><path stroke="#262626" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.586 10.587a2 2 0 1 0 2.829 2.828" /><path stroke="#262626" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.778 13.889a2 2 0 1 0-1.926-3.507" /><path stroke="#262626" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.862 14.87C16.5 17 13.655 18.012 12 18q-5.4 0-9-6c1.272-2.12 3.5-4.5 7.18-5.82m0 0A9 9 0 0 1 12 6q5.4 0 9 6-1 1.665-2.138 2.87" /></svg>
                                ) : (
                                    /* eye slash icon */
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 sm:w-6 h-4 sm:h-6" fill="none" viewBox="0 0 24 24"><path stroke="#262626" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.586 10.587a2 2 0 1 0 2.829 2.828" /><path stroke="#262626" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.681 16.673A8.7 8.7 0 0 1 12 18q-5.4 0-9-6 1.908-3.18 4.32-4.674m2.86-1.146A9 9 0 0 1 12 6q5.4 0 9 6-1 1.665-2.138 2.87M3 3l18 18" /></svg>
                                )}
                            </button>
                        </div>

                        {/* New Password */}
                        <div className="relative mb-4">
                            <input
                                id="NewPassword"
                                name="NewPassword"
                                type={showNew ? "text" : "password"}
                                placeholder="New Password"
                                className="w-full border border-[#B6C3C8] p-2 sm:p-4 pr-10 outline-none"
                            />
                            <button
                                type="button"
                                onClick={() => setShowNew(!showNew)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors duration-200"
                            >
                                {showNew ? (
                                    /* eye icon */
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 sm:w-6 h-4 sm:h-6" fill="none" viewBox="0 0 24 24"><path stroke="#262626" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.586 10.587a2 2 0 1 0 2.829 2.828" /><path stroke="#262626" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.778 13.889a2 2 0 1 0-1.926-3.507" /><path stroke="#262626" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.862 14.87C16.5 17 13.655 18.012 12 18q-5.4 0-9-6c1.272-2.12 3.5-4.5 7.18-5.82m0 0A9 9 0 0 1 12 6q5.4 0 9 6-1 1.665-2.138 2.87" /></svg>
                                ) : (
                                    /* eye slash icon */
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 sm:w-6 h-4 sm:h-6" fill="none" viewBox="0 0 24 24"><path stroke="#262626" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.586 10.587a2 2 0 1 0 2.829 2.828" /><path stroke="#262626" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.681 16.673A8.7 8.7 0 0 1 12 18q-5.4 0-9-6 1.908-3.18 4.32-4.674m2.86-1.146A9 9 0 0 1 12 6q5.4 0 9 6-1 1.665-2.138 2.87M3 3l18 18" /></svg>
                                )}
                            </button>
                        </div>

                        {/* Confirm Password */}
                        <div className="relative mb-4">
                            <input
                                id="ConfirmPassword"
                                name="ConfirmPassword"
                                type={showConfirm ? "text" : "password"}
                                placeholder="Confirm Password"
                                className="w-full border border-[#B6C3C8] p-2 sm:p-4 pr-10 outline-none"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirm(!showConfirm)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors duration-200"
                            >
                                {showConfirm ? (
                                    /* eye icon */
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 sm:w-6 h-4 sm:h-6" fill="none" viewBox="0 0 24 24"><path stroke="#262626" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.586 10.587a2 2 0 1 0 2.829 2.828" /><path stroke="#262626" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.778 13.889a2 2 0 1 0-1.926-3.507" /><path stroke="#262626" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.862 14.87C16.5 17 13.655 18.012 12 18q-5.4 0-9-6c1.272-2.12 3.5-4.5 7.18-5.82m0 0A9 9 0 0 1 12 6q5.4 0 9 6-1 1.665-2.138 2.87" /></svg>
                                ) : (
                                    /* eye slash icon */
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 sm:w-6 h-4 sm:h-6" fill="none" viewBox="0 0 24 24"><path stroke="#262626" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.586 10.587a2 2 0 1 0 2.829 2.828" /><path stroke="#262626" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.681 16.673A8.7 8.7 0 0 1 12 18q-5.4 0-9-6 1.908-3.18 4.32-4.674m2.86-1.146A9 9 0 0 1 12 6q5.4 0 9 6-1 1.665-2.138 2.87M3 3l18 18" /></svg>
                                )}
                            </button>
                        </div>

                        <button className="w-full bg-red text-white text-sm font-medium leading-6 py-2 sm:py-3 transition-all duration-500 hover:bg-red-900 cursor-pointer">
                            Save Password
                        </button>
                    </>
                )}
                {/* Password Tab */}

                {/* Comments Tab */}
                {activeTab === "comments" && (
                    <>
                        <h2 className="text-xl sm:text-2xl sm:leading-6 font-medium mb-5 sm:mb-10 border-b border-[#E5E5E5] pb-2.5 sm:pb-5">
                            My Comments
                        </h2>

                        {comments.map((comment) => (
                            <div
                                key={comment.id}
                                className="flex flex-col gap-2 pb-6"
                            >
                                <div className="flex items-start justify-between gap-1 lg:gap-4 flex-wrap">
                                    <div className="flex gap-3">
                                        <div className="w-16 h-16 relative flex items-center justify-center">
                                            <Image
                                                src={comment.image}
                                                alt={comment.author}
                                                width={88}
                                                height={66}
                                                className=" object-cover"
                                            />
                                        </div>
                                        <div className="flex flex-col max-w-51.25 justify-center">
                                            <p className="font-medium text-base leading-6 text-title line-clamp-2">{comment.author}</p>
                                        </div>
                                    </div>

                                    <div className="w-full max-w-91.75 flex flex-col items-start gap-2">
                                        {/* Smooth expand/collapse without extra lib */}
                                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeCommentId === comment.id
                                            ? "max-h-96 opacity-100 mt-2"
                                            : "max-h-0 opacity-0 mt-0"
                                            }`}
                                        >
                                            <p className="text-sm leading-5.5">{comment.author}</p>
                                        </div>

                                        <p className="text-xs leading-3.75">{comment.date}</p>
                                        <div className="flex gap-2">
                                            {/* <ViewCommentButton
                                                onClick={() => handleViewComment(comment.id)}
                                                active={activeCommentId === comment.id}
                                            /> */}
                                            <button className="border cursor-pointer text-xs leading-4 border-red text-body px-3 py-1.5 hover:bg-red-50">
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
}
