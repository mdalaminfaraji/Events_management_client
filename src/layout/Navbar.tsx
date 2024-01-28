import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import "./styles.css";
const Navbar = () => {
  return (
    <div className="max-w-[1440px]  mx-auto  ">
      <div className="bg-hero-bg w-full h-[1024px] py-6 px-20">
        <nav className="flex justify-between items-center font-roboto font-bold">
          <div className="inline-flex text-3xl">
            Event <span className="ml-2 text-[#3461FF]">360</span>
          </div>
          <ul className="space-x-5 text-base gap-2">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/">Contact</NavLink>
          </ul>
        </nav>
        {/* hero section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 justify-center items-center ">
          <div className="order-2 md:order-1">
            <h1 className="text-6xl uppercase font-roboto">
              Brand New
              <br /> event Packages
            </h1>
            <h2 className="text-5xl text-gradient mt-2">For Winter</h2>
            <p className="my-8  text-xl font-normal font-roboto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              imperdiet sed id elementum. Quam vel aliquam sit vulputate.
              Faucibus nec gravida ipsum pulvinar vel non.
            </p>
            <Button className="w-48 h-12 text-base">Explore</Button>
          </div>
          <div className="w-[584px] h-[754px] py-14 px-12 border border-black rounded-full relative order-1 md:order-2">
            <div className=" absolute left-2">
              <img src="/src/assets/home/Star 6.png" />
            </div>
            <div>
              <div className="w-[490px] h-[632px] ">
                <img
                  src="/src/assets/home/banner.png"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className=" absolute right-4 bottom-1">
              <img src="/src/assets/home/Soft Star.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
