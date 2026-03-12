import Link from "next/link";

type hashTagData = {
    href: string;
    label: string;
    color?: string;
};

const HasTagButton = ({ 
    href,
    label,
    color = "#A71E22",
     
}: hashTagData) => {
    return (
         <Link
            href={href}
            className={`border px-2 sm:px-3 text-red py-1 sm:py-2 text-xs sm:text-sm font-medium leading-4 sm:leading-6 transition-all hover:bg-red hover:text-white`}
            style={{
                borderColor: color,
            }}
            >
            {label}
        </Link>
    );
};

export default HasTagButton;