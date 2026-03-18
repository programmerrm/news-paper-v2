"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import PlayPauseIcon from "../../../../../assets/icon/play-pause.svg";
import PlayIcon from "../../../../../assets/icon/play.svg";

export default function AudioPlayer({ src }: { src: string }) {

    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [playing, setPlaying] = useState(false);

    const handlePlay = () => {
        setIsPlaying((prev) => !prev);
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
                {isPlaying ? (
                    <Image
                        width={23}
                        height={23}
                        src={PlayIcon}
                        alt="PlayIcon"
                    />
                ) : (
                    <Image
                        width={23}
                        height={23}
                        src={PlayPauseIcon}
                        alt="PlayPauseIcon"
                    />
                )}
            </button>

            <span className="text-sm leading-6 font-medium text-[#171717]">
                খবরটি শুনুন
            </span>

            <audio ref={audioRef} src={src} />
        </div>
    );
}
