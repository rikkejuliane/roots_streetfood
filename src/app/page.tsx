import OpeningHours from "./components/openingHours";
import Menu from "./components/menu";
import ContactSection from "./components/contact";

export default function Home() {
  return (
    <main>
      <OpeningHours />
      <Menu />
      <ContactSection />
    </main>
  );
}
