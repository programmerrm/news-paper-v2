"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getFetchData } from "@/utils/getFetchData";

export default function NewsSlider() {
  const [sliders, setSliders] = useState([]);
  useEffect(() => {
    async function fetchSliderData() {
      const data = await getFetchData("/web/sliders");
      const slidersData = data?.sliders || [];
      setSliders(slidersData);
    }
    fetchSliderData();
  }, []);
  if (!sliders.length) return null;
  return (
    <section className="bg-[#FBF7EF] py-8 lg:py-16 home-slider">
      <div className="container mx-auto px-4">

        <Swiper
          className="pb-6! lg:pb-9!"
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
          loop={false}
          speed={100}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {sliders.map((item:any) => (
            <SwiperSlide key={item.post_id}>
              <Link href={`/${item?.category?.category_slug}/${item?.subcategory?.subcategory_slug}/${item?.post_slug}`} className="block">
                <div className="relative h-60 overflow-hidden group flex flex-col justify-end">
                  <Image
                    src={item?.post_thumbnail}
                    alt={item?.post_title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="relative z-10 w-full p-3 bg-white/85">
                    <p className="text-xs leading-3.75 text-red mb-1">
                      {item?.category?.category_name}
                    </p>

                    <h6 className="text-sm leading-5.5 font-semibold text-title line-clamp-2">
                      {item?.post_title}
                    </h6>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
