"use client";

import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    active?: boolean;
    onClick?: () => void;
}

export default function Button({ children, active = false, onClick }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`w-full py-2 mb-3 text-sm leading-6 font-medium transition cursor-pointer ${active ? "bg-red-700 text-white" : "border border-[#B6C3C8] hover:bg-gray-100"
                }`}
        >
            {children}
        </button>
    );
}
