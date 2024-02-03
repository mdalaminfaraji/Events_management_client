import Navbar from "@/layout/Navbar";
import OurClient from "./OurClient";
import OurServices from "./OurServices";
import EventItems from "./EventItems";
import PricingPlan from "./PricingPlan";
import Gallery from "./Gallery";
import Testimonial from "./Testimonial";
import RecentEvent from "./RecentEvent";
import Footer from "./Footer";
import { motion, useScroll } from "framer-motion";
import "../../layout/styles.css";
import FAQ from "./FAQ";
import Contact from "./Contact";

const Home = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="max-w-[1440px]  mx-auto  ">
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />

      <Navbar />
      <OurClient />
      <div className="bg-service-bg py-12 px-10">
        <OurServices />
        <EventItems />
        <PricingPlan />
        <Gallery />
        <Testimonial />
        <RecentEvent />
        <FAQ />
        <Contact />
      </div>
      <div className="bg-footer-bg ">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
