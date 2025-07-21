import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import Hero from "./components/hero";

export const metadata: Metadata = {
  title: "Roots Street Food",
  description: "Delicious street food served fresh in [Your Location]",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
          <Hero />
        {children}
      </body>
    </html>
  );
}
