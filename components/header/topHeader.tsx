import Link from "next/link";
import Image from "next/image";
import { getFetchData } from "@/utils/getFetchData";
import { timeAgoBangla, getBanglaFullDateNow } from "@/utils/formatDateBn";

export default async function TopHeader({ isTimeData }: any) {
  const webinfo = await getFetchData('/webinfo');
  const lastupdated = await getFetchData('/lastupdated');
  const logo = webinfo?.webInfo?.site_logo;
  const site_name = webinfo?.webinfo?.site_name;
  const updatedAt = lastupdated;
  const dateText = getBanglaFullDateNow();
  const updateText = updatedAt ? timeAgoBangla(updatedAt) : "";

  return (
    <div className="flex items-center justify-between gap-4">
      {isTimeData && (
        <>
          {(dateText || updateText) && (
            <div className="hidden lg:flex flex-col gap-1 text-[13px]">
              {dateText && <span>{dateText}</span>}
              {updateText && <span>{updateText}</span>}
            </div>
          )}
        </>
      )}
      {logo && (
        <Link href="/" className="w-16 sm:w-20 md:w-24 lg:w-28 shrink-0">
          <Image src={logo} alt={site_name || "site logo"} width={150} height={64} className="w-full h-auto" priority />
        </Link>
      )}
      <div className="flex gap-2 sm:gap-3">
        <Link href={webinfo?.webinfo?.facebook || ""} className="text-blue group w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-gray-100 hover:bg-red-600 flex items-center justify-center transition">
          <span className="text-[18px] group-hover:text-white transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M7.678 4.146V6.59H6v2.987h1.678v8.876h3.445V9.577h2.313s.216-1.432.322-2.999h-2.62V4.536c0-.305.374-.716.746-.716h1.878V.71H11.21C7.593.71 7.68 3.7 7.68 4.147" />
            </svg>
          </span>
        </Link>
        <Link href={webinfo?.webinfo?.twiter || ""} className="text-blue group w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-gray-100 hover:bg-red-600 flex items-center justify-center transition">
          <span className="text-[18px] group-hover:text-white transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="currentColor">
              <path d="M13.23.787h2.576l-5.628 6.449 6.622 8.777h-5.184L7.553 10.69l-4.644 5.322H.33l6.02-6.9L0 .788h5.316l3.667 4.864zm-.906 13.68h1.428L4.536 2.252H3.005z" />
            </svg>
          </span>
        </Link>
        <Link href={webinfo?.webinfo?.youtube || ""} className="text-blue group w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-gray-100 hover:bg-red-600 flex items-center justify-center transition">
          <span className="text-[18px] group-hover:text-white transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-red-600 group-hover:text-white transition">
              <path d="M21.594 7.203a2.5 2.5 0 0 0-1.762-1.766c-1.566-.43-7.83-.437-7.83-.437s-6.265-.007-7.832.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.52 2.52 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831M9.997 15.005l.005-6 5.207 3.005z" />
            </svg>
          </span>
        </Link>
        <Link href={webinfo?.webinfo?.facebook || ""} className="text-blue group w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-gray-100 hover:bg-red-600 flex items-center justify-center transition">
          <span className="text-[18px] group-hover:text-white transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M17.566 10.976v5.903h-3.423V11.37c0-1.384-.495-2.328-1.733-2.328-.946 0-1.509.637-1.756 1.252-.09.22-.114.526-.114.834v5.75H7.116s.047-9.328 0-10.295h3.424v1.459c.455-.7 1.267-1.701 3.085-1.701 2.252 0 3.94 1.472 3.94 4.634M3.536 1.62c-1.171 0-1.937.768-1.937 1.778 0 .988.744 1.78 1.892 1.78h.022c1.194 0 1.936-.792 1.936-1.78-.02-1.01-.742-1.778-1.914-1.778M1.801 16.88h3.422V6.584H1.802z" />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
}
