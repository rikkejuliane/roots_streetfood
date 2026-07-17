"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useLanguage } from "../utils/languageContext";
import { translations } from "../utils/translations";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ImageCarousel() {
    const { lang } = useLanguage();

  return (
    <section className="mt-10 w-full max-w-7xl mx-auto px-4">
        <h1>{translations[lang].gallery}</h1>
      <Swiper
        modules={[Navigation, Pagination]}
        speed={1500}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        className="h-[500px] [--swiper-navigation-color:#d5bb9b] [--swiper-pagination-color:#d5bb9b] [--swiper-navigation-size:25px]"
      >
        <SwiperSlide>
          <img
            src="/galery1.jpg"
            alt="4 hamburgers outside from Roots"
            className="w-full h-full object-cover object-right sm:object-center rounded-lg"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="/galery2.jpg"
            alt="A freshly made burger from Roots"
            className="w-full h-full object-cover rounded-lg"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="/galery3.jpg"
            alt="Fresh delicious loaded fries from Roots"
            className="w-full h-full object-cover rounded-lg"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="/galery4.jpg"
            alt="Fresh delicious loaded fries from Roots"
            className="w-full h-full object-cover rounded-lg"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="/galery5.jpg"
            alt="Delicious hamburger from Roots"
            className="w-full h-full object-cover object-left sm:object-center rounded-lg"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
