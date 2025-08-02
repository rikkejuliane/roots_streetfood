"use client";
import { useLanguage } from "../utils/languageContext";
import { translations } from "../utils/translations";

export default function OpeningHours() {
  const { lang } = useLanguage();

  return (
    <section className="mt-4">
      <h1 className="mb-2">{translations[lang].summerOpeningHours}</h1>
      <div className="flex flex-col justify-center items-center">
        <p className="text-[20px] font-semibold font-montserrat">
          16
          <span className="align-super text-xs tracking-wide px-[2px]">
            PM
          </span>{" "}
          - 00
          <span className="align-super text-xs tracking-wide px-[2px]">AM</span>
        </p>
        <p className="font-montserrat text-[9px] font-bold">
          {translations[lang].monSun}
        </p>
      </div>
    </section>
  );
}
