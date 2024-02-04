import { MailMinus, Map, PhoneOutgoing } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";
const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration
      once: true, // Whether animation should only happen once while scrolling down the page
      easing: "ease-out", // Easing function for the animation
    });
  }, []); // Run once after the component mounts
  return (
    <div id="contact" className="my-12 container font-roboto">
      <h1 className="text-center text-5xl font-bold">Contact Us</h1>
      <p className="text-center text-base text-gray-600 my-4">
        Contact us if you need our services. We will be happy <br />
        to make your events memorable!
      </p>
      <div className="grid grid-cols-1  lg:grid-cols-3 justify-items-center gap-4">
        <div
          data-aos="fade-up"
          className="w-96 h-44 p-12 bg-[#01CB93] text-white rounded-tl-xl rounded-br-xl"
        >
          <div className="text-end ">
            <Map className="inline font-bold" />
          </div>
          <div>
            <p className="text-lg font-semibold">Address</p>
            <p className="text-lg font-semibold">
              38-2 Hilton Street, California
            </p>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          className="w-96 h-44 p-12 bg-[#0170CB] text-white rounded-tl-xl rounded-br-xl bg-opacity-70"
        >
          <div className="text-end ">
            <PhoneOutgoing className="inline font-bold" />
          </div>
          <div>
            <p className="text-lg font-semibold">Phone</p>
            <p className="text-lg font-semibold">(+01) 123 456 7890</p>
          </div>
        </div>
        <div
          data-aos="flip-right"
          className="w-96 h-44 p-12 bg-[#555555] text-white rounded-tl-xl rounded-br-xl bg-opacity-80"
        >
          <div className="text-end ">
            <MailMinus className="inline font-bold" />
          </div>
          <div>
            <p className="text-lg font-semibold">Email</p>
            <p className="text-lg font-semibold">inform@dvents.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
