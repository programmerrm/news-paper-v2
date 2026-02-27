export function formatBanglaTimeAgo(dateString: string) {
    const now = new Date();
    const past = new Date(dateString);

    const diffMs = now.getTime() - past.getTime();

    const minutes = Math.floor(diffMs / (1000 * 60));
    const hours = Math.floor(diffMs / (1000 * 60 * 60));
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    const toBanglaNumber = (num: number) =>
        num.toString().replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[Number(d)]);

    if (minutes < 1) return "এইমাত্র";
    if (minutes < 60) return `${toBanglaNumber(minutes)} মিনিট আগে`;
    if (hours < 24) return `${toBanglaNumber(hours)} ঘণ্টা আগে`;
    return `${toBanglaNumber(days)} দিন আগে`;
}

export function formatBanglaPublishedDate(dateString: string) {
    const date = new Date(dateString);

    const months = [
        "জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল",
        "মে", "জুন", "জুলাই", "আগস্ট",
        "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"
    ];

    const toBanglaNumber = (num: number | string) =>
        num.toString().replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[Number(d)]);

    const day = toBanglaNumber(date.getDate());
    const month = months[date.getMonth()];
    const year = toBanglaNumber(date.getFullYear());

    const hours = toBanglaNumber(
        date.getHours().toString().padStart(2, "0")
    );
    const minutes = toBanglaNumber(
        date.getMinutes().toString().padStart(2, "0")
    );

    return `প্রকাশের তারিখ: ${day} ${month} ${year}, ${hours}:${minutes} মিনিট`;
}
