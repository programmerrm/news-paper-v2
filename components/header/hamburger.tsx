import Image from "next/image";
import hamburgerIcon from "../../assets/logo/hambuger-icon.svg";

export default function Hamburger({ toggleMenu }: any) {
    return (
        <button
            className="border-l border-gray-dark last:border-r py-3 lg:py-4 px-3 cursor-pointer"
            onClick={toggleMenu}
        >
            <Image src={hamburgerIcon} alt="hamburger icon" width={24} height={24} />
        </button>
    );
}
