import NotFoundButton from "@/components/not-found-btn/notFoundBtn";
import "./globals.css";
import { Noto_Serif_Bengali, Inter } from "next/font/google";

const notoSerifBengali = Noto_Serif_Bengali({
    variable: "--font-noto-serif-bengali",
    subsets: ["bengali"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
    variable: "--font-inter",
    subsets: ['latin'],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display: 'swap',
});

export default function GlobalNotFound() {
    return (
        <html lang="en">
             <body className={`${notoSerifBengali.variable} ${inter.variable} antialiased`}>
                <main className='relative top-0 left-0 right-0 w-full h-auto'>
                    <section className='relative top-0 left-0 right-0 w-full h-screen'>
                        <div className='max-w-screen-2xl container mx-auto px-2.5 lg:px-5 w-full h-full'>
                            <div className='flex flex-col flex-wrap justify-center items-center w-full h-full animate-fade-in'>
                                <h1 className='text-6xl sm:text-7xl md:text-8xl font-extrabold text-purple-700 mb-4 animate-bounce'>404</h1>
                                <h2 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-4 md:mb-6 animate-slide-up delay-150'>Page Not Found</h2>
                                <p className='font-inter text-center text-gray-600 mb-5 md:mb-8 text-base sm:text-lg md:text-xl animate-slide-up delay-300'>
                                    Oops! The page you are looking for doesnt exist. It might have been moved or deleted.
                                </p>
                                <NotFoundButton />
                            </div>
                        </div>
                    </section>
                </main>
            </body>
        </html>
    );
}
