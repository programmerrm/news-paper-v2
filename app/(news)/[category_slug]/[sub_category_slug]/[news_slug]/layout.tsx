import type { Metadata } from "next";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Notification from "@/components/notification/notification";
import { getFetchData } from "@/utils/getFetchData";
import { FRONTEND_DOMAIN_NAME } from "@/utils/api";

type NewsParams = {
    category_slug: string;
    sub_category_slug: string;
    news_slug: string;
};

const stripHtml = (html: string = "") => {
    return html.replace(/<[^>]*>?/gm, "").trim();
};

export async function generateMetadata({
    params,
}: {
    params: NewsParams;
}): Promise<Metadata> {
    const { category_slug, sub_category_slug, news_slug } = await params;
    const news = await getFetchData(`/posts/${category_slug}/${sub_category_slug}/${news_slug}`);
    const webinfo = await getFetchData("/webinfo");
    const detailsNews = news?.detailsNews;
    const title = detailsNews?.meta_title || detailsNews?.post_title || "News";
    const rawDescription = detailsNews?.meta_descriptions || detailsNews?.post_descriptions || "";
    const description = stripHtml(rawDescription).slice(0, 11000);
    const image = detailsNews?.post_thumbnail;
    const author = detailsNews?.author?.author_name || "News Desk";
    const category = detailsNews?.category?.category_name;
    const subCategory = detailsNews?.subcategory?.subcategory_name;
    const tags = detailsNews?.tags?.map((tag: any) => tag.tag_name) || [];
    const keywords = detailsNews?.meta_keyword || [category, subCategory, ...tags].filter(Boolean);
    const url = `${FRONTEND_DOMAIN_NAME}/${category_slug}/${sub_category_slug}/${news_slug}`;
    const siteName = webinfo?.webInfo?.site_name || "News Flash 71";
    return {
        title,
        description,
        authors: [
            {
                name: author,
            },
        ],
        keywords,
        openGraph: {
            title,
            description,
            url,
            siteName,
            type: "article",

            images: image
                ? [
                    {
                        url: image,
                        width: 1200,
                        height: 630,
                        alt: title,
                    },
                ]
                : [],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: image ? [image] : [],
        },
        category,
        alternates: {
            canonical: url,
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-image-preview": "large",
            },
        },
    };
}

export default function SingleNewsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main>
            <Notification />
            <Header />
            {children}
            <Footer />
        </main>
    );
}
