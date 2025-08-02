"use client";
import { useLanguage } from "../utils/languageContext";
import { translations } from "../utils/translations";
import ContactInfo from "./contactInfo";
import GoogleMap from "./googlemaps";

export default function ContactSection() {
  const { lang } = useLanguage();

  return (
    <section className="mt-10 flex flex-col items-center relative" id="contact">
      <h1>{translations[lang].visitUsToday}</h1>
      <img src="hambuger1.jpg" alt="Cheesy hamburger with frenchfries" />
      <div className="-mt-10">
        <ContactInfo />
      </div>
      <GoogleMap />
    </section>
  );
}
