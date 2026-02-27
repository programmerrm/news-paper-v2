function toBanglaNumber(num: number | string) {
    return num.toString().replace(/\d/g, (digit) =>
        "০১২৩৪৫৬৭৮৯"[parseInt(digit)]
    );
}

export function getBanglaFullDateNow(): string {
    const date = new Date();

    const engPart = date.toLocaleDateString("bn-BD", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    const banglaMonths = [
        "বৈশাখ",
        "জ্যৈষ্ঠ",
        "আষাঢ়",
        "শ্রাবণ",
        "ভাদ্র",
        "আশ্বিন",
        "কার্তিক",
        "অগ্রহায়ণ",
        "পৌষ",
        "মাঘ",
        "ফাল্গুন",
        "চৈত্র",
    ];

    const gregorianYear = date.getFullYear();
    const gregorianMonth = date.getMonth();
    const gregorianDate = date.getDate();

    let banglaYear = gregorianYear - 593;
    let banglaMonthIndex = gregorianMonth - 3;

    if (banglaMonthIndex < 0) {
        banglaMonthIndex += 12;
    }

    const banglaDate = toBanglaNumber(gregorianDate);
    const formattedBanglaYear = toBanglaNumber(banglaYear);

    const banglaPart = `${banglaDate} ${banglaMonths[banglaMonthIndex]} ${formattedBanglaYear}`;

    return `${engPart}, ${banglaPart}`;
}

export function timeAgoBangla(dateString: string) {
    const now = new Date().getTime();
    const past = new Date(dateString).getTime();

    const diffMs = now - past;

    const diffMinutes = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMinutes < 60) {
        return `আপডেট ${toBanglaNumber(diffMinutes)} মিনিট আগে`;
    } else if (diffHours < 24) {
        return `আপডেট ${toBanglaNumber(diffHours)} ঘন্টা আগে`;
    } else {
        return `আপডেট ${toBanglaNumber(diffDays)} দিন আগে`;
    }
}
