"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import PlayBtn from "@/assets/icon/playbtn.svg";

export default function AudioPlayer({ src }: { src: string }) {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [playing, setPlaying] = useState(false);

    const handlePlay = () => {
        if (!audioRef.current) return;

        if (playing) {
            audioRef.current.pause();
            setPlaying(false);
        } else {
            audioRef.current.play();
            setPlaying(true);
        }
    };

    return (
        <div className="flex items-center gap-2.5">
            <button onClick={handlePlay} className="cursor-pointer">
                <Image width={23} height={23} src={PlayBtn} alt="PlayBtn" />
            </button>

            <span className="text-sm leading-6 font-medium text-[#171717]">
                খবরটি শুনুন
            </span>

            <audio ref={audioRef} src={src} />
        </div>
    );
}
