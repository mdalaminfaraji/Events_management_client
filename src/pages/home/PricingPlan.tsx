import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { BsCheck } from "react-icons/bs";

const PricingPlan = () => {
  return (
    <div className="font-roboto mt-[123px]">
      <h1 className="max-w-[872px] mx-auto text-4xl md:text-6xl font-bold text-center">
        Explore our pricing plans
      </h1>
      <p className="text-center max-w-[1086px] mx-auto mt-8 text-lg text-[#566B84]">
        Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
        ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut
        posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare
        viverra. Ultrices faucibus neque velit risus ac id lorem.
      </p>
      <div className="mt-[106px] grid grid-cols-1  lg:grid-cols-3 gap-4 justify-items-center font-[Inter] ">
        <div
          className="w-[412px] h-[748px] py-8 pl-8 pr-5    rounded-[20px] shadow bg-[#FFF]  relative"
          style={{ borderTop: "6px solid #F249C8" }}
        >
          <div className="flex justify-between items-center">
            <div>
              <img src="/assets/price_plan/standard.png" />
            </div>
            <p className="text-5xl text-[#F249C8] font-bold ">$21</p>
          </div>
          <h1 className="mt-8 text-2xl font-semibold ">Standard</h1>
          <p className="mt-2 text-base font-normal text-[#42526B] mb-8">
            Upgrade your social portfolio with a stunning profile & enhanced
            shots.
          </p>
          <Button
            variant="outline"
            className="w-[237px] h-[48px] px-8 text-base text-[#0B63E5] border-2 border-[#0B63E5]"
          >
            <span className="mr-3"> Get this package </span>
            <ArrowRight />
          </Button>
          <hr className="mt-10 mb-8  w-[412px] h-[1px] opacity-70 bg-[#E6E8EC] -ml-8 -mr-5 border" />
          <div className="flex items-center">
            <BsCheck className="w-6 h-6 bg-[#E7F5E8] rounded-full text-[#6FCF97]  text-[10px]" />
            <span className="ml-2 text-base font-normal">User Dashboard</span>
          </div>
          <div className="flex items-center my-5">
            <BsCheck className="w-6 h-6 bg-[#E7F5E8] rounded-full text-[#6FCF97]  text-[10px]" />
            <span className="ml-2 text-base font-normal">
              Post 3 Ads per week
            </span>
          </div>
          <div className="flex items-center my-5">
            <BsCheck className="w-6 h-6 bg-[#E7F5E8] rounded-full text-[#6FCF97]  text-[10px]" />
            <span className="ml-2 text-base font-normal">
              Multiple images & videos
            </span>
          </div>
          <div className="flex items-center my-5">
            <BsCheck className="w-6 h-6 bg-[#E7F5E8] rounded-full text-[#6FCF97]  text-[10px] opacity-25" />
            <span className="ml-2 text-base font-normal line-through text-[#42526B] opacity-20">
              Basic customer support
            </span>
          </div>
          <div className="flex items-center my-5">
            <BsCheck className="w-6 h-6 bg-[#E7F5E8] rounded-full text-[#6FCF97]  text-[10px] opacity-25" />
            <span className="ml-2 text-base font-normal line-through text-[#42526B] opacity-20">
              Featured ads
            </span>
          </div>
          <div className="flex items-center my-5">
            <BsCheck className="w-6 h-6 bg-[#E7F5E8] rounded-full text-[#6FCF97]  text-[10px] opacity-25" />
            <span className="ml-2 text-base font-normal line-through text-[#42526B] opacity-20">
              Special ads badge
            </span>
          </div>
          <div className="flex items-center my-5">
            <BsCheck className="w-6 h-6 bg-[#E7F5E8] rounded-full text-[#6FCF97]  text-[10px] opacity-25" />
            <span className="ml-2 text-base font-normal line-through text-[#42526B] opacity-20">
              Call to Action in Every Ads
            </span>
          </div>
          <div className="flex items-center my-5">
            <BsCheck className="w-6 h-6 bg-[#E7F5E8] rounded-full text-[#6FCF97]  text-[10px] opacity-25" />
            <span className="ml-2 text-base font-normal line-through text-[#42526B] opacity-20">
              Max 12 team members
            </span>
          </div>
        </div>
        <div
          className="w-[412px] h-[748px] py-8 pl-8 pr-5    rounded-[20px] shadow bg-[#FFF]  relative"
          style={{ borderTop: "6px solid #0B63E5" }}
        >
          <div className="flex justify-between items-center">
            <div>
              <img src="/assets/price_plan/premium.png" />
            </div>
            <p className="text-5xl text-[#0B63E5] font-bold ">$49</p>
          </div>
          <h1 className="mt-8 text-2xl font-semibold ">Premium</h1>
          <p className="mt-2 text-base font-normal text-[#42526B] mb-8">
            Quisque auctor erat velit, quis ultrices nisi vestibulum at. Donec
            vitae purus lorem.
          </p>
          <Button className="w-[237px] h-[48px] px-8 text-base text-white border-2 border-[#0B63E5]">
            <span className="mr-3"> Get this package </span>
            <ArrowRight />
          </Button>
          <hr className="mt-10 mb-8  w-[412px] h-[1px] opacity-70 bg-[#E6E8EC] -ml-8 -mr-5 border" />
          <div className="flex items-center">
            <BsCheck className="w-6 h-6 bg-[#E7F5E8] rounded-full text-[#6FCF97]  text-[10px]" />
            <span className="ml-2 text-base font-normal">User Dashboard</span>
          </div>
          <div className="flex items-center my-5">
            <BsCheck className="w-6 h-6 bg-[#E7F5E8] rounded-full text-[#6FCF97]  text-[10px]" />
            <span className="ml-2 text-base font-normal">
              Post 3 Ads per week
            </span>
          </div>
          <div className="flex items-center my-5">
            <BsCheck className="w-6 h-6 bg-[#E7F5E8] rounded-full text-[#6FCF97]  text-[10px]" />
            <span className="ml-2 text-base font-normal">
              Multiple images & videos
            </span>
          </div>
          <div className="flex items-center my-5">
            <BsCheck className="w-6 h-6 bg-[#E7F5E8] rounded-full text-[#6FCF97]  text-[10px]" />
            <span className="ml-2 text-base font-normal ">
              Basic customer support
            </span>
          </div>
          <div className="flex items-center my-5">
            <BsCheck className="w-6 h-6 bg-[#E7F5E8] rounded-full text-[#6FCF97]  text-[10px] opacity-25" />
            <span className="ml-2 text-base font-normal ">Featured ads</span>
          </div>
          <div className="flex items-center my-5">
            <BsCheck className="w-6 h-6 bg-[#E7F5E8] rounded-full text-[#6FCF97]  text-[10px] " />
            <span className="ml-2 text-base font-normal ">
              Special ads badge
            </span>
          </div>
          <div className="flex items-center my-5">
            <BsCheck className="w-6 h-6 bg-[#E7F5E8] rounded-full text-[#6FCF97]  text-[10px] opacity-25" />
            <span className="ml-2 text-base font-normal line-through text-[#42526B] opacity-20">
              Call to Action in Every Ads
            </span>
          </div>
          <div className="flex items-center my-5">
            <BsCheck className="w-6 h-6 bg-[#E7F5E8] rounded-full text-[#6FCF97]  text-[10px] opacity-25" />
            <span className="ml-2 text-base font-normal line-through text-[#42526B] opacity-20">
              Max 12 team members
            </span>
          </div>
        </div>
        <div
          className="w-[412px] h-[748px] py-8 pl-8 pr-5    rounded-[20px] shadow bg-[#FFF]  relative"
          style={{ borderTop: "6px solid #E54545" }}
        >
          <div className="flex justify-between items-center">
            <div>
              <img src="/assets/price_plan/standard.png" />
            </div>
            <p className="text-5xl text-[#E54545] font-bold ">$124</p>
          </div>
          <h1 className="mt-8 text-2xl font-semibold ">Business</h1>
          <p className="mt-2 text-base font-normal text-[#42526B] mb-8">
            In ornare ligula lorem, sit amet faucibus velit vehicula eget.
          </p>
          <Button
            variant="outline"
            className="w-[237px] h-[48px] px-8 text-base text-[#0B63E5] border-2 border-[#0B63E5]"
          >
            <span className="mr-3"> Get this package </span>
            <ArrowRight />
          </Button>
          <hr className="mt-10 mb-8  w-[412px] h-[1px] opacity-70 bg-[#E6E8EC] -ml-8 -mr-5 border" />
          <div className="flex items-center">
            <BsCheck className="w-6 h-6 bg-[#E7F5E8] rounded-full text-[#6FCF97]  text-[10px]" />
            <span className="ml-2 text-base font-normal">User Dashboard</span>
          </div>
          <div className="flex items-center my-5">
            <BsCheck className="w-6 h-6 bg-[#E7F5E8] rounded-full text-[#6FCF97]  text-[10px]" />
            <span className="ml-2 text-base font-normal">
              Post 3 Ads per week
            </span>
          </div>
          <div className="flex items-center my-5">
            <BsCheck className="w-6 h-6 bg-[#E7F5E8] rounded-full text-[#6FCF97]  text-[10px]" />
            <span className="ml-2 text-base font-normal">
              Multiple images & videos
            </span>
          </div>
          <div className="flex items-center my-5">
            <BsCheck className="w-6 h-6 bg-[#E7F5E8] rounded-full text-[#6FCF97]  text-[10px] " />
            <span className="ml-2 text-base font-normal ">
              Basic customer support
            </span>
          </div>
          <div className="flex items-center my-5">
            <BsCheck className="w-6 h-6 bg-[#E7F5E8] rounded-full text-[#6FCF97]  text-[10px] " />
            <span className="ml-2 text-base font-normal ">Featured ads</span>
          </div>
          <div className="flex items-center my-5">
            <BsCheck className="w-6 h-6 bg-[#E7F5E8] rounded-full text-[#6FCF97]  text-[10px] " />
            <span className="ml-2 text-base font-normal ">
              Special ads badge
            </span>
          </div>
          <div className="flex items-center my-5">
            <BsCheck className="w-6 h-6 bg-[#E7F5E8] rounded-full text-[#6FCF97]  text-[10px] " />
            <span className="ml-2 text-base font-normal ">
              Call to Action in Every Ads
            </span>
          </div>
          <div className="flex items-center my-5">
            <BsCheck className="w-6 h-6 bg-[#E7F5E8] rounded-full text-[#6FCF97]  text-[10px] " />
            <span className="ml-2 text-base font-normal ">
              Max 12 team members
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
