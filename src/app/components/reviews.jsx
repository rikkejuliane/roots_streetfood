"use client";

import { useEffect } from "react";
import { useLanguage } from "../utils/languageContext";
import { translations } from "../utils/translations";

export default function Reviews() {
  const { lang } = useLanguage();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://app.reviewconnect.me/embed/ogTBtCiY7GemskwJLNVir9rlJQot4sw9/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="mt-10">
      <h1>{translations[lang].ourGoogleReviews}</h1>
      <div id="reviews-widget-135"></div>
    </section>
  );
}
