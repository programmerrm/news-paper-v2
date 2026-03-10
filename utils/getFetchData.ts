import { SERVER_API_URL } from "./api";

type NextFetchOptions = {
    cache?: "force-cache" | "no-store" | "default";
    tags?: string[];
};

export const getFetchData = async (
    url: string,
    options: RequestInit & { next?: NextFetchOptions } = {}
) => {
    try {
        const fetchOptions: RequestInit & { next?: NextFetchOptions } = {
            ...options,
            headers: {
                ...(options.headers || {}),
            },
            next: {
                cache: "no-store"
            },
        };
        const response = await fetch(`${SERVER_API_URL}${url}`, fetchOptions);
        if (!response.ok) {
            return null;
        }
        return await response.json();
    } catch (error) {
        console.error("Fetch error:", error);
        return null;
    }
};
