import Navbar from "@/layout/Navbar";
import OurClient from "./OurClient";
import OurServices from "./OurServices";
import EventItems from "./EventItems";

const Home = () => {
  return (
    <div className="max-w-[1440px]  mx-auto  ">
      <Navbar />
      <OurClient />
      <div className="bg-service-bg py-12 h-[5786px] px-10">
        <OurServices />
        <EventItems />
      </div>
    </div>
  );
};

export default Home;
