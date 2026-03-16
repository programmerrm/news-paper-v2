"use client";

import { getFetchData } from "@/utils/getFetchData";
import { useState, useEffect } from "react";
import Image from "next/image";

type AdData = {
    ad_id: number;
    ad_position: string;
    ad_type: string;
    ad_name: string;
    ad_status: number;
    ad_start_date: string;
    ad_end_date: string;
    ad_section: {
        ad_section_id: number;
        ad_section_name: string;
    };
    ad_thumbnail: string;
    ad_google_script: string | null;
    ad_published_at: string;
};

export default function FirstLoad() {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [data, setData] = useState<AdData | null>(null);

    useEffect(() => {
        setIsOpen(true);
        setTimeout(() => setIsVisible(true), 10);
    }, []);

    const closePopup = () => {
        setIsVisible(false);
        setTimeout(() => setIsOpen(false), 300);
    };

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await getFetchData("/welcomead");
                setData(res?.welcomeAd || null);
            } catch (error) {
                console.error("Error fetching welcome ad:", error);
            }
        }
        fetchData();
    }, []);

    if (!isOpen) return null;

    return (
        <div
            className={`fixed inset-0 flex items-center justify-center z-99999
        transition-opacity duration-800 
        ${isVisible ? "opacity-100 bg-black/70" : "opacity-0 bg-black/0"}`}
        >
            <div
                className={`bg-[#FBF7EF] p-8 rounded-lg relative flex flex-col items-center justify-center
          transition-all duration-500
          ${isVisible ? "scale-100 opacity-100" : "scale-80 opacity-0"}`}
            >
                {/* Close button */}
                <button
                    onClick={closePopup}
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl font-bold cursor-pointer"
                >
                    &times;
                </button>

                {/* Ad content */}
                {data ? (
                    <div className="flex flex-col items-center">
                        <Image
                            src={data.ad_thumbnail}
                            alt={data.ad_name}
                            width={250}
                            height={250}
                            className="rounded-md object-contain"
                        />
                    </div>
                ) : (
                    <div className="text-gray-500">Loading Ads...</div>
                )}
            </div>
        </div>
    );
}
