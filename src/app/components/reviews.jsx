"use client";

import { useEffect } from "react";

import { useLanguage } from "../utils/languageContext";
import { translations } from "../utils/translations";

export default function Reviews() {
  const { lang } = useLanguage();

  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://widgets.sociablekit.com/google-reviews/widget.js";
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="mt-10">
      <h1>{translations[lang].ourGoogleReviews}</h1>

      <div
        className="sk-ww-google-reviews"
        data-embed-id="25718631"
      ></div>
    </section>
  );
}
