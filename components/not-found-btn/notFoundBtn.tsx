"use client";

import { useRouter } from 'next/navigation';

export default function NotFoundButton() {
    const router = useRouter();

    const handleGoBack = () => {
        router.back();
    }
    
    return (
        <button className='bg-red py-2.5 md:py-3 px-5 md:px-10 border-2 border-[#B6C3C8] cursor-pointer rounded-full uppercase text-white bg-linear-to-r from-primary to-secondary transition-all duration-500 hover:bg-none hover:border-primary' type="button" onClick={handleGoBack}>
            Return Page
        </button>
    );
}
