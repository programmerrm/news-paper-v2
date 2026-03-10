import Image from "next/image";
import hamburgerIcon from "../../assets/logo/hambuger-icon.svg";

export default function Hamburger({ toggleMenu }: any) {
    return (
        <button
            className="border-l border-gray-dark last:border-r py-2 sm:py-3 lg:py-4 px-2 sm:px-3 cursor-pointer"
            onClick={toggleMenu}
        >
            <div className="max-w-5 sm:max-w-6 max-h-5 sm:max-h-6">
                <Image src={hamburgerIcon} alt="hamburger icon" width={24} height={24} />
            </div>
        </button>
    );
}
