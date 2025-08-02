import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import Hero from "./components/hero";
import Footer from "./components/footer";
import { LanguageProvider } from "./utils/languageContext";

export const metadata: Metadata = {
  title: "Roots Street Food",
  description: "Delicious street food served fresh in [Your Location]",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
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
