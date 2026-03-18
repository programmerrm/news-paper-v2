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

const stripHtml = (html: string = "") => html.replace(/<[^>]*>?/gm, "").trim();

export async function generateMetadata({ params }: { params: NewsParams }): Promise<Metadata> {
    const { category_slug, sub_category_slug, news_slug } = params;
    const news = await getFetchData(`/posts/${category_slug}/${sub_category_slug}/${news_slug}`);
    const webinfo = await getFetchData("/webinfo");

    const detailsNews = news?.detailsNews;

    const title = detailsNews?.meta_title || detailsNews?.post_title || "News";
    const rawDescription = detailsNews?.meta_descriptions || detailsNews?.post_descriptions || "";
    const description = stripHtml(rawDescription).slice(0, 200); // short preview
    const image = detailsNews?.post_thumbnail
        ? detailsNews.post_thumbnail.startsWith("http")
            ? detailsNews.post_thumbnail
            : `${FRONTEND_DOMAIN_NAME}${detailsNews.post_thumbnail}`
        : null;

    const author = detailsNews?.author?.author_name || "News Desk";
    const category = detailsNews?.category?.category_name || "";
    const subCategory = detailsNews?.subcategory?.subcategory_name || "";
    const tags = detailsNews?.tags?.map((tag: any) => tag.tag_name) || [];
    const keywords = detailsNews?.meta_keyword || [category, subCategory, ...tags].filter(Boolean);

    const url = `${FRONTEND_DOMAIN_NAME}/${category_slug}/${sub_category_slug}/${news_slug}`;
    const siteName = webinfo?.webInfo?.site_name || "News Flash 71";

    return {
        title,
        description,
        authors: [{ name: author }],
        keywords,
        alternates: {
            canonical: url,
        },
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
        metadataBase: new URL(FRONTEND_DOMAIN_NAME),
        other: {
            "og:title": title,
            "og:description": description,
            "og:url": url,
            "og:site_name": siteName,
            "og:type": "article",
            "og:image": image || "",
            "twitter:card": "summary_large_image",
            "twitter:title": title,
            "twitter:description": description,
            "twitter:image": image || "",
            "article:author": author,
            "article:section": category,
            "article:tag": tags.join(","),
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

export default function SingleNewsLayout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            <Notification />
            <Header />
            {children}
            <Footer />
        </main>
    );
}