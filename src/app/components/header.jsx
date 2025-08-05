"use client";
import { useLanguage } from "../utils/languageContext";
import { translations } from "../utils/translations";
import { CircleFlag } from "react-circle-flags";

export default function Header() {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <header className="h-[82px] w-full bg-background flex items-end justify-center px-2.5">
      <div className="flex justify-between items-center w-full">
        <img src="/ROOTS.png" width="86px" height="30px" alt="Roots logo" />
        <nav>
          <ul className="flex gap-4 items-center justify-center font-(family-name:--font-montserrat) font-semibold text-lg text-darkbrown">
            <li>
              <a href="#menu" className="hover:underline">
                {translations[lang].menu}
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                {translations[lang].contact}
              </a>
            </li>
            <li className="flex items-center">
              <button
                onClick={toggleLanguage}
                className="hover:scale-110 transition">
                {lang === "hr" ? (
                  <img
                    src="/gb.svg"
                    alt="English flag"
                    className="w-6 h-6 rounded-full"
                  />
                ) : (
                  <img
                    src="/hr.svg"
                    alt="Croatian flag"
                    className="w-6 h-6 rounded-full"
                  />
                )}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
