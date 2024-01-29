import { CheckCircle2 } from "lucide-react";
import React, { useState } from "react";

const OurServices = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="font-roboto ">
      <h1 className="w-96 mx-auto text-6xl font-bold ">Our Services</h1>
      <p className="text-center max-w-[700px] mx-auto mt-3 text-lg text-[#566B84]">
        Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
        ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
      </p>
      <div className="mt-14 font-roboto grid grid-cols-1 lg:grid-cols-3 gap-x-5 justify-items-center">
        <div className="w-[412px] h-[569px] p-6 rounded-md bg-gradient-to-tr from-[#EDDDF1] to-[#efebef]">
          <img
            src="/src/assets/service/service1.png"
            className="w-[362px] h-[253px]"
          />

          <h3 className="mt-6 text-3xl font-bold">Corporate event</h3>
          <div className="mt-3">
            <p className="flex items-center">
              <CheckCircle2 className="w-4 h-4 bg-white rounded-full text-[#6FCF97]" />
              <span className="ml-2">One day pas access all lecture</span>
            </p>
            <p className="flex items-center">
              <CheckCircle2 className="w-4 h-4 bg-white rounded-full text-[#6FCF97] my-4" />
              <span className="ml-2">One day pas access all lecture</span>
            </p>
            <p className="flex items-center">
              <CheckCircle2 className="w-4 h-4 bg-white rounded-full text-[#6FCF97] my-4" />
              <span className="ml-2">One day pas access all lecture</span>
            </p>
            <p className="flex items-center">
              <CheckCircle2 className="w-4  h-4 bg-white rounded-full text-[#6FCF97] my-4" />
              <span className="ml-2">One day pas access all lecture</span>
            </p>
            <p className="flex items-center">
              <CheckCircle2 className="w-4  h-4 bg-white rounded-full text-[#6FCF97] my-4" />
              <span className="ml-2">One day pas access all lecture</span>
            </p>
          </div>
        </div>
        <div className="w-[412px] h-[569px] p-6 rounded-md bg-gradient-to-tr from-[#EDDDF1] to-[#efebef] ">
          <img
            src="/src/assets/service/service2.png"
            className="w-[362px] h-[253px]"
          />

          <h3 className="mt-6 text-3xl font-bold">Corporate event</h3>
          <div className="mt-3">
            <p className="flex items-center">
              <CheckCircle2 className="w-4 h-4 bg-white rounded-full text-[#6FCF97]" />
              <span className="ml-2">One day pas access all lecture</span>
            </p>
            <p className="flex items-center">
              <CheckCircle2 className="w-4 h-4 bg-white rounded-full text-[#6FCF97] my-4" />
              <span className="ml-2">One day pas access all lecture</span>
            </p>
            <p className="flex items-center">
              <CheckCircle2 className="w-4 h-4 bg-white rounded-full text-[#6FCF97] my-4" />
              <span className="ml-2">One day pas access all lecture</span>
            </p>
            <p className="flex items-center">
              <CheckCircle2 className="w-4  h-4 bg-white rounded-full text-[#6FCF97] my-4" />
              <span className="ml-2">One day pas access all lecture</span>
            </p>
            <p className="flex items-center">
              <CheckCircle2 className="w-4  h-4 bg-white rounded-full text-[#6FCF97] my-4" />
              <span className="ml-2">One day pas access all lecture</span>
            </p>
          </div>
        </div>
        <div className="w-[412px] h-[569px] p-6 rounded-md bg-gradient-to-tr from-[#EDDDF1] to-[#efebef] ">
          <img
            src="/src/assets/service/service1.png"
            className="w-[362px] h-[253px]"
          />

          <h3 className="mt-6 text-3xl font-bold">Corporate event</h3>
          <div className="mt-3">
            <p className="flex items-center">
              <CheckCircle2 className="w-4 h-4 bg-white rounded-full text-[#6FCF97]" />
              <span className="ml-2">One day pas access all lecture</span>
            </p>
            <p className="flex items-center">
              <CheckCircle2 className="w-4 h-4 bg-white rounded-full text-[#6FCF97] my-4" />
              <span className="ml-2">One day pas access all lecture</span>
            </p>
            <p className="flex items-center">
              <CheckCircle2 className="w-4 h-4 bg-white rounded-full text-[#6FCF97] my-4" />
              <span className="ml-2">One day pas access all lecture</span>
            </p>
            <p className="flex items-center">
              <CheckCircle2 className="w-4  h-4 bg-white rounded-full text-[#6FCF97] my-4" />
              <span className="ml-2">One day pas access all lecture</span>
            </p>
            <p className="flex items-center">
              <CheckCircle2 className="w-4  h-4 bg-white rounded-full text-[#6FCF97] my-4" />
              <span className="ml-2">One day pas access all lecture</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
