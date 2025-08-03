"use client";
import { useLanguage } from "../utils/languageContext";
import { translations } from "../utils/translations";

export default function OpeningHours() {
  const { lang } = useLanguage();

  return (
    <section className="mt-4">
      <h1>{translations[lang].openingHours}</h1>
      <div className="flex flex-col justify-center items-center">
        <p className="text-[25px] font-semibold font-montserrat">
          16
          <span className="align-super text-xs tracking-wide px-[2px]">
            00
          </span>{" "}
          - 23
          <span className="align-super text-xs tracking-wide px-[2px]">00</span>
        </p>
        <p className="font-montserrat text-[12px] font-bold">
          {translations[lang].monSun}
        </p>
      </div>
    </section>
  );
}
