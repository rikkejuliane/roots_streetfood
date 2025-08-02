"use client";
import { useLanguage } from "../utils/languageContext";
import { translations } from "../utils/translations";

export default function Menu() {
  const { lang } = useLanguage();

  return (
    <section className="mt-10 flex flex-col items-center" id="menu">
      <h1>{translations[lang].takeALookAtOurMenu}</h1>
      <img src="menu-part1.jpg" alt="Menu for roots" />
      <img src="menu-part2.jpg" alt="Menu for roots" />
      <a
        href="tel:0958515151"
        className="px-4 h-[27px] min-w-[143px] rounded-[5px] bg-darkbrown text-background font-montserrat text-[12px] flex items-center justify-center font-bold cursor-pointer mt-3">
        {translations[lang].orderByPhone}
      </a>
    </section>
  );
}
