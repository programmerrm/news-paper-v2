"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "./button";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import ChangePasswordForm from "../forms/changePasswordForm";
import { SERVER_API_URL } from "@/utils/api";
import { toast } from "react-toastify";
import UserProfileUpdateForm from "../forms/userProfileUpdateForm";

export default function UserProfile() {
    const [activeTab, setActiveTab] = useState("profile");
    const [activeCommentId, setActiveCommentId] = useState<number | null>(null);
    const [commentsData, setCommentsData] = useState<any>(null);

    const router = useRouter();

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const token = Cookies.get("access_token");
                if (!token) return;

                const response = await fetch(`${SERVER_API_URL}/my-comments`, {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    },
                });
                const data = await response.json();
                if (response.ok) {
                    setCommentsData(data);
                } else {
                    console.error("Error fetching comments", data);
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchComments();
    }, []);

    const comments = commentsData?.comments || [];

    const handleLogout = () => {
        Cookies.remove("access_token");
        Cookies.remove("user");


        router.push("/user/login");
    };

    const handleDeleteComment = async (commentId: number) => {
        const token = Cookies.get("access_token");
        if (!token) return;

        try {
            const response = await fetch(`${SERVER_API_URL}/remove/my-comment?comment_id=${commentId}`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
            });

            if (response.ok) {
                setCommentsData((prevData: any) => ({
                    ...prevData,
                    comments: prevData.comments.filter((c: any) => c.id !== commentId),
                }));
                toast.success("Comment deleted successfully!");
            } else {
                const data = await response.json();
                console.error("Failed to delete comment", data);
                toast.error("Failed to delete comment.");
            }
        } catch (error) {
            console.error("Error deleting comment", error);
            toast.error("Something went wrong.");
        }
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
                        <UserProfileUpdateForm />
                    </>
                )}

                {/* Password Tab */}
                {activeTab === "password" && (
                    <>
                        <ChangePasswordForm />
                    </>
                )}
                {/* Password Tab */}

                {/* Comments Tab */}
                {activeTab === "comments" && (
                    <>
                        <h2 className="text-xl sm:text-2xl sm:leading-6 font-medium mb-5 sm:mb-10 border-b border-[#E5E5E5] pb-2.5 sm:pb-5">
                            My Comments
                        </h2>

                        {comments?.map((comment: any) => (
                            <div
                                key={comment.id}
                                className="flex flex-col gap-2 pb-6"
                            >
                                <div className="flex items-start justify-between gap-1 lg:gap-4 flex-wrap">
                                    <div className="flex gap-3">
                                        <div className="w-16 h-16 relative flex items-center justify-center">
                                            <Image
                                                src={comment.post_thumbnail}
                                                alt={comment.post_title}
                                                width={88}
                                                height={66}
                                                className=" object-cover"
                                            />
                                        </div>
                                        <div className="flex flex-col max-w-51.25 justify-center">
                                            <p className="font-medium text-base leading-6 text-title line-clamp-2">{comment.post_title}</p>
                                        </div>
                                    </div>

                                    <div className="w-full max-w-91.75 flex flex-col items-start gap-2">
                                        {/* Smooth expand/collapse without extra lib */}
                                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeCommentId === comment.id
                                            ? "max-h-96 opacity-100 mt-2"
                                            : "max-h-0 opacity-0 mt-0"
                                            }`}
                                        >
                                            <p className="text-sm leading-5.5">{comment.post_title}</p>
                                        </div>

                                        <p className="text-xs leading-3.75">{comment.created_at}</p>
                                        <div className="flex gap-2">
                                            <button className="border cursor-pointer text-xs leading-4 border-red text-body px-3 py-1.5 hover:bg-red-50" onClick={() => handleDeleteComment(comment.id)} type="button">
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