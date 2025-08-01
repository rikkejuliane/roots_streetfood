"use client";

import { useEffect } from "react";

export default function Reviews() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://app.reviewconnect.me/embed/ogTBtCiY7GemskwJLNVir9rlJQot4sw9/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // cleanup
    };
  }, []);

  return (
    <section className="mt-10">
      <h1>OUR GOOGLE REVIEWS</h1>
      <div id="reviews-widget-135"></div>
    </section>
  );
}
