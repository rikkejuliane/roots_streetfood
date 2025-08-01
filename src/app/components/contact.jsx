import ContactInfo from "./contactInfo";
import GoogleMap from "./googlemaps";

export default function ContactSection() {
  return (
    <section className="mt-10 flex flex-col items-center relative">
      <h1>VISIT US TODAY!</h1>
      <img src="hambuger1.jpg" alt="Cheesy hamburger with frenchfries" />
      <div className="-mt-10">
        <ContactInfo />
      </div>
      <GoogleMap />
    </section>
  );
}
