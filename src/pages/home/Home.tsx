import Navbar from "@/layout/Navbar";
import OurClient from "./OurClient";
import OurServices from "./OurServices";
import EventItems from "./EventItems";
import PricingPlan from "./PricingPlan";
import Gallery from "./Gallery";
import Testimonial from "./Testimonial";
import RecentEvent from "./RecentEvent";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="max-w-[1440px]  mx-auto  ">
      <Navbar />
      <OurClient />
      <div className="bg-service-bg py-12 px-10">
        <OurServices />
        <EventItems />
        <PricingPlan />
        <Gallery />
        <Testimonial />
        <RecentEvent />
      </div>
      <div className="bg-footer-bg  ">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
