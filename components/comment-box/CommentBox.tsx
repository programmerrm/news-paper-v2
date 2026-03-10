"use client";

import Link from "next/link";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { SERVER_API_URL } from "@/utils/api";
import { toast } from "react-toastify";

export default function CommentBox({ post_id }: any) {

    const [user, setUser] = useState<any>(null);
    const [comment, setComment] = useState("");

    useEffect(() => {
        const cookieUser = Cookies.get("user");

        if (cookieUser) {
            setUser(JSON.parse(cookieUser));
        }
    }, []);

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (!comment.trim()) {
            toast.error("কমেন্ট লিখুন");
            return;
        }

        const token = Cookies.get("access_token");

        if (!token) {
            toast.error("লগইন করতে হবে");
            return;
        }

        try {
            const res = await fetch(
                `${SERVER_API_URL}/user/posts/comment?post_id=${post_id}&comment_body=${encodeURIComponent(comment)}`,
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await res.json();

            if (!res.ok) {
                toast.error(data.message || "Comment failed");
                return;
            }

            toast.success("কমেন্ট সফলভাবে পোস্ট হয়েছে");
            setComment("");

        } catch (error) {
            console.error(error);
            toast.error("Something went wrong");
        }
    };

    return (
        <div className="bg-[#E0EBF0] p-4 sm:p-8">
            <div className="flex items-center justify-between gap-3">
                <h5>
                    {user ? "কমেন্ট করুন" : "কমেন্ট করার জন্য লগইন করুন"}
                </h5>

                {!user && (
                    <Link
                        href="/auth/login"
                        className="text-red text-sm sm:text-base leading-6.5 underline"
                    >
                        লগইন করুন
                    </Link>
                )}
            </div>

            <form onSubmit={handleSubmit} className="mt-2">
                <div>
                    <input
                        type="text"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="text-sm leading-6 text-[#171717] font-medium placeholder:text-[#525252] w-full bg-white border border-[#B6C3C8] p-2 sm:p-3 focus:outline-0"
                        placeholder="কমেন্ট করুন"
                    />
                </div>

                <div className="max-w-33.25 mt-4">
                    <button
                        type="submit"
                        className="bg-red text-white w-full flex items-center justify-center gap-2 p-2 sm:p-3 text-sm font-medium leading-6 transition-all border border-[#B6C3C8] cursor-pointer"
                    >
                        পোস্ট করুন
                    </button>
                </div>
            </form>
        </div>
    );

}
