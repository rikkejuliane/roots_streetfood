export default function GoogleMap() {
  return (
    <div className="w-full h-[300px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.7024031644947!2d15.4751!3d44.2304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4761fe8f63bb2b4b%3A0xf5f0ebd1fbc32b44!2sObala%20Ante%20Damira%20Klanca%204%2C%2023242%20Posedarje%2C%20Croatia!5e0!3m2!1sen!2shr!4v1690900900000!5m2!1sen!2shr"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
