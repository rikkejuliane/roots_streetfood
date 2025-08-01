import OpeningHours from "./components/openingHours";
import Menu from "./components/menu";
import ContactSection from "./components/contact";
import Reviews from "./components/reviews";

export default function Home() {
  return (
    <main>
      <OpeningHours />
      <Menu />
      <ContactSection />
      <Reviews />
    </main>
  );
}
