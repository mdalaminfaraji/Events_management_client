import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const OurClient = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration
      once: true, // Whether animation should only happen once while scrolling down the page
      easing: "ease-out", // Easing function for the animation
    });
  }, []); // Run once after the component mounts
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      className="bg-neutral-50 pt-16 pb-32"
    >
      <h1 className="text-4xl md:text-6xl mx-auto font-roboto font-extrabold capitalize max-w-96 md:max-w-[556px] pb-16 text-center">
        Our Valuable client
      </h1>
      <div className="grid grid-cols-4 md:grid-cols-6  lg:grid-cols-10 gap-y-20 justify-items-center">
        <div className=" col-span-2 w-28">
          <img src="/assets/our_client/adobe.png" />
        </div>
        <div className=" col-span-2 w-28">
          <img src="/assets/our_client/amazon.png" />
        </div>
        <div className=" col-span-2 w-28">
          <img src="/assets/our_client/asana.png" />
        </div>
        <div className=" col-span-2 w-28">
          <img src="/assets/our_client/evernote.png" />
        </div>
        <div className=" col-span-2 w-28">
          <img src="/assets/our_client/google.png" />
        </div>
        <div className=" col-span-2 w-36">
          <img src="/assets/our_client/microsoft.png" />
        </div>
        <div className=" col-span-2 w-28">
          <img src="/assets/our_client/paypal.png" />
        </div>
        <div className=" col-span-2 w-28">
          <img src="/assets/our_client/shopify.png" />
        </div>
        <div className=" col-span-2 w-28">
          <img src="/assets/our_client/uber.png" />
        </div>
        <div className=" col-span-2 w-28">
          <img src="/assets/our_client/spotify.png" />
        </div>
      </div>
    </div>
  );
};

export default OurClient;
