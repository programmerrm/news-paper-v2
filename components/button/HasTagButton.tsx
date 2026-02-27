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
            className={`border px-2 sm:px-3 py-1 sm:py-2 text-sm font-medium leading-6`}
            style={{
                borderColor: color,
                color: color,
            }}
            >
            {label}
        </Link>
    );
};

export default HasTagButton;