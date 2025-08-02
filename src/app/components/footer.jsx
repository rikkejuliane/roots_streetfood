"use client";

import { useLanguage } from "../utils/languageContext";
import { translations } from "../utils/translations";
import FooterOpeningHours from "./footerOpeningHours";

export default function Footer() {
  const { lang } = useLanguage();

  return (
    <footer className="w-full h-[355px] flex-shrink-0 bg-darkbrown mt-10 flex flex-col items-center">
      <h2 className="text-sand text-[25px] font-semibold leading-normal uppercase font-cormorant pt-4">
        {translations[lang].roots}
      </h2>
      <FooterOpeningHours />
      <div className="flex flex-col items-center">
        <h3 className="pt-8 text-[18px] font-cormorant font-semibold text-background mb-1">
          {translations[lang].followUsOnInstagram}
        </h3>
        <a
          href="https://www.instagram.com/roots_streetfood/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* SVG icon stays the same */}
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.3333 5.8335H20M7.49998 0.833496H17.5C19.2681 0.833496 20.9638 1.53588 22.214 2.78612C23.4643 4.03636 24.1666 5.73205 24.1666 7.50016V17.5002C24.1666 19.2683 23.4643 20.964 22.214 22.2142C20.9638 23.4645 19.2681 24.1668 17.5 24.1668H7.49998C5.73187 24.1668 4.03618 23.4645 2.78593 22.2142C1.53569 20.964 0.833313 19.2683 0.833313 17.5002V7.50016C0.833313 5.73205 1.53569 4.03636 2.78593 2.78612C4.03618 1.53588 5.73187 0.833496 7.49998 0.833496ZM12.5 17.5002C11.1739 17.5002 9.90213 16.9734 8.96445 16.0357C8.02676 15.098 7.49998 13.8262 7.49998 12.5002C7.49998 11.1741 8.02676 9.90231 8.96445 8.96463C9.90213 8.02695 11.1739 7.50016 12.5 7.50016C13.8261 7.50016 15.0978 8.02695 16.0355 8.96463C16.9732 9.90231 17.5 11.1741 17.5 12.5002C17.5 13.8262 16.9732 15.098 16.0355 16.0357C15.0978 16.9734 13.8261 17.5002 12.5 17.5002Z"
              stroke="#D5BB9B"
              strokeWidth="1.6"
            />
          </svg>
        </a>
      </div>
      <div className="w-[278px] h-[1px] bg-sand mx-auto mt-8"></div>
      <p className="text-background text-center font-montserrat text-[15px] font-semibold leading-normal mt-[7px]">
        Roots Street Food © {new Date().getFullYear()}
      </p>
      <p className="text-background text-center font-montserrat text-[12px] font-semibold leading-normal mt-[4px]">
        {translations[lang].websiteBy}{" "}
        <a href="https://rikkejuliane.netlify.app/">Rikke Juliane</a>
      </p>
    </footer>
  );
}
