import Menu from "./menu";
import TopNews from "./topNews";
import TopHeader from "./topHeader";
import { getFetchData } from "@/utils/getFetchData";

export default async function Header() {
    const categories = await getFetchData('/categories');
    return (
        <header className="relative">
            <div className=" border-b border-[#D4D4D4] py-5">
                <div className="container">
                    <TopHeader isTimeData={true} />
                </div>
            </div>
            <TopNews />
            <Menu categories={categories} />
        </header>
    );
}
