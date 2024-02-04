import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import "./styles.css";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-hero-bg w-full py-6 px-6 sm:px-20">
      <nav>
        <div className="flex justify-between items-center font-roboto font-bold">
          <div className="inline-flex text-2xl md:text-3xl">
            Event <span className="ml-2 text-[#3461FF]">360</span>
          </div>
          <div className="lg:hidden">
            <button onClick={toggleNavbar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
          <ul className="hidden lg:flex  space-x-5 text-base gap-2">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/">Contact</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </ul>
        </div>
        {isOpen && (
          <div className="lg:hidden mt-4">
            <a href="#" className="block  py-2">
              Home
            </a>
            <a href="#" className="block  py-2">
              About
            </a>
            <a href="#" className="block  py-2">
              Services
            </a>
            <a href="#" className="block  py-2">
              Contact
            </a>
          </div>
        )}
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
          <Button className="w-40 md:w-48 md:h-12 text-base">Explore</Button>
        </div>
        <div className="w-[300px] h-[400px] sm:w-[350px] sm:h-[450px] mt-16 md:mt-1 md:w-[350px] md:h-[440px] lg:w-[450px] lg:h-[600px] xl:w-[584px] xl:h-[754px]  py-14 px-12 border border-black rounded-full relative order-1 md:order-2 mx-auto">
          <div className=" absolute -left-2 sm:left-0 md:-left-2 lg:left-2 w-[50px] md:w-[65px] lg:w-[65px] xl:w-[140px]">
            <img src="/assets/home/Star 6.png" />
          </div>
          <div>
            <div className="w-[200px] h-[300px] sm:w-[250px] sm:h-[400px] md:w-[260px] md:h-[360px] lg:w-[360px] lg:h-[560px] xl:w-[490px] xl:h-[632px] ">
              <img src="/assets/home/banner.png" className="rounded-full" />
            </div>
          </div>
          <div className=" absolute right-0 sm:right-3 bottom-10 md:right-2 md:bottom-6 lg:right-10 lg:bottom-6 xl:right-4 xl:bottom-1 w-[50px] md:w-[65px] lg:w-[65px] xl:w-[140px] ">
            <img src="/assets/home/Soft Star.png" />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mt-16 md:mt-4 lg:-mt-3  xl:-mt-20 gap-5 mb-16 ">
        <div className="w-[224px] h-[194] border border-white py-6 px-4 rounded-3xl">
          <div>
            <img src="/assets/home/love3.png" />
          </div>
          <div>
            <p className="text-base mt-8 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="w-[224px] h-[194] border border-white py-6 px-4 rounded-3xl">
          <div>
            <img src="/assets/home/love2.png" />
          </div>
          <div>
            <p className="text-base mt-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="w-[224px] h-[194] border border-white py-6 px-4 rounded-3xl">
          <div>
            <img src="/assets/home/love1.png" />
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
