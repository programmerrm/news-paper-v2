"use client";

import { useEffect, useState } from "react";

export default function ScrollToTopBottom() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 100) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div
            className={`
        fixed bottom-6 right-6 z-50
        transition-all duration-300 ease-in-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5 pointer-events-none"}
      `}
        >
            <button
                onClick={scrollToTop}
                className="
          w-10 h-10 cursor-pointer sm:w-12 sm:h-12
          rounded-full
          bg-red text-white
          flex items-center justify-center
          shadow-lg
          hover:bg-red-800
          active:scale-95
          transition-all duration-300
        "
                aria-label="Scroll to top"
            >
                ↑
            </button>
        </div>
    );
}
