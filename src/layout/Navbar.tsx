import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import "./styles.css";
const Navbar = () => {
  return (
    <div className="bg-hero-bg w-full py-6 px-6 sm:px-20">
      <nav className="flex justify-between items-center font-roboto font-bold">
        <div className="inline-flex text-2xl md:text-3xl">
          Event <span className="ml-2 text-[#3461FF]">360</span>
        </div>
        <ul className="space-x-5 text-base gap-2">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/">Contact</NavLink>
        </ul>
      </nav>
      {/* hero section */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-4 justify-center items-center ">
        <div className="order-2 md:order-1">
          <h1 className="text-3xl mt-12 md:mt-0 md:text-4xl lg:text-5xl xl:text-6xl uppercase font-roboto">
            Brand New
            <br /> event Packages
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gradient mt-2">
            For Winter
          </h2>
          <p className="my-8  lg:text-lg xl:text-xl font-normal font-roboto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
            imperdiet sed id elementum. Quam vel aliquam sit vulputate. Faucibus
            nec gravida ipsum pulvinar vel non.
          </p>
          <Button className="w-48 h-12 text-base">Explore</Button>
        </div>
        <div className="w-[400px] h-[500px] mt-16 md:mt-1 md:w-[350px] md:h-[440px] lg:w-[450px] lg:h-[600px] xl:w-[584px] xl:h-[754px]  py-14 px-12 border border-black rounded-full relative order-1 md:order-2 mx-auto">
          <div className=" absolute left-2 md:-left-2 lg:left-2 w-[50px] md:w-[65px] lg:w-[65px] xl:w-[140px]">
            <img src="/src/assets/home/Star 6.png" />
          </div>
          <div>
            <div className="w-[300px] h-[400px] md:w-[260px] md:h-[360px] lg:w-[360px] lg:h-[560px] xl:w-[490px] xl:h-[632px] ">
              <img src="/src/assets/home/banner.png" className="rounded-full" />
            </div>
          </div>
          <div className=" absolute right-6 bottom-10 md:right-2 md:bottom-6 lg:right-10 lg:bottom-6 xl:right-4 xl:bottom-1 w-[50px] md:w-[65px] lg:w-[65px] xl:w-[140px] ">
            <img src="/src/assets/home/Soft Star.png" />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mt-16 md:mt-4 lg:-mt-3  xl:-mt-20 gap-5 mb-16 ">
        <div className="w-[224px] h-[194] border border-white py-6 px-4 rounded-3xl">
          <div>
            <img src="/src/assets/home/love3.png" />
          </div>
          <div>
            <p className="text-base mt-8 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="w-[224px] h-[194] border border-white py-6 px-4 rounded-3xl">
          <div>
            <img src="/src/assets/home/love2.png" />
          </div>
          <div>
            <p className="text-base mt-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="w-[224px] h-[194] border border-white py-6 px-4 rounded-3xl">
          <div>
            <img src="/src/assets/home/love1.png" />
          </div>
          <div>
            <p className="text-base mt-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
