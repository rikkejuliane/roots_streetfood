import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import Hero from "./components/hero";
import Footer from "./components/footer";
import { LanguageProvider } from "./utils/languageContext";

export const metadata: Metadata = {
  title: "Roots Fast Food | Fast Food u Posedarju, Zadru",
  description:
    "Ukusna ulična hrana svježe pripremljena u Posedarju, Zadru. Uživajte u autentičnim okusima i ugodnoj atmosferi.",
  keywords: [
    "Roots Fast Food",
    "hrana u Posedarju",
    "hrana u Zadru",
    "hrvatska ulična hrana",
    "brza hrana",
    "lokalna hrana",
    "restoran",
    "za van",
    "Roots fast Food",
    "Posedarje food",
    "Zadar food",
    "Croatian street food",
    "fast food",
    "local food",
    "restaurant",
    "takeaway",
  ],
  authors: [
    { name: "Roots Street Food" },
    { name: "Rikke Juliane (Website by)" },
  ],
  openGraph: {
    title: "Roots Street Food - Posedarje, Zadar",
    description:
      "Ukusna ulična hrana svježe pripremljena u Posedarju, Zadru, Hrvatska. Uživajte u autentičnim okusima i ugodnoj atmosferi.",
    url: "https://rootsstreetfood.example.com", // Replace with your actual URL
    siteName: "Roots Street Food",
    locale: "hr_HR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hr">
      <body className="antialiased">
        <LanguageProvider>
          <Header />
          <Hero />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
