"use client";

import { useLanguage } from "../utils/languageContext";
import { translations } from "../utils/translations";

export default function FooterOpeningHours() {
  const { lang } = useLanguage();

  return (
    <div className="mt-1 text-background py-2.5">
      <h3 className="mb-1 text-[18px] font-cormorant font-semibold">
        {translations[lang].openingHours}
      </h3>
      <div className="flex flex-col justify-center items-center">
        <p className="text-[18px] font-semibold font-montserrat">
          16
          <span className="align-super text-[10px] tracking-wide px-[2px]">
            00
          </span>{" "}
          - 23
          <span className="align-super text-[10px] tracking-wide px-[2px]">
            00
          </span>
        </p>
        <p className="font-montserrat font-bold text-[8px]">
          {translations[lang].monSun}
        </p>
      </div>
    </div>
  );
}
