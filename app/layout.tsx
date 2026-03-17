import "./globals.css";
import type { Metadata } from "next";
export const dynamic = 'force-dynamic';
import { getFetchData } from "@/utils/getFetchData";
import { Noto_Serif_Bengali, Roboto } from "next/font/google";
import ScrollToTopBottom from "@/components/scrollToTopBottom/scrollToTopBottom";

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "700", "900"],
});

const notoSerifBengali = Noto_Serif_Bengali({
    variable: "--font-noto-serif-bengali",
    subsets: ["bengali"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export async function generateMetadata(): Promise<Metadata> {
    const webinfo = await getFetchData('/webinfo');
    const faviconUrl = webinfo?.webInfo?.favicon || "/favicon.ico";
    return {
        title: webinfo?.webInfo?.site_name || "News Paper",
        description: webinfo?.webInfo?.meta_description,
        keywords: webinfo?.webInfo?.meta_keywords,
        icons: {
            icon: faviconUrl,
            shortcut: faviconUrl,
            apple: faviconUrl,
        },
    };
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${notoSerifBengali.variable} ${roboto.variable} antialiased font-bengali`}
            >
                <ScrollToTopBottom />
                {children}
            </body>
        </html>
    );
}
