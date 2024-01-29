import React from "react";

const EventItems = () => {
  return (
    <div className="font-roboto mt-32">
      <h1 className="w-96 mx-auto text-6xl font-bold ">Event Items</h1>
      <p className="text-center max-w-[700px] mx-auto mt-3 mb-14 text-lg text-[#566B84]">
        Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
        ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
      </p>

      <div className="grid grid-cols-12 grid-rows-2 gap-5 justify-items-center">
        <div className=" col-span-4 row-span-1 bg-red-300 w-[412px] h-[273px]">
          1
        </div>
        <div className=" col-span-4 row-span-1 bg-red-300 w-[412px] h-[273px]">
          2
        </div>
        <div className="col-span-4 row-span-2 bg-red-300 w-[412px] h-[566px]">
          3
        </div>
        <div className="row-span-1 col-span-2 bg-red-300 w-[196px] h-[273px]">
          4
        </div>
        <div className="row-span-1 col-span-2 bg-red-300 w-[196px] h-[273px]">
          5
        </div>
        <div className="row-span-1 col-span-4 bg-red-300 w-[412px] h-[273px]">
          6
        </div>
      </div>
    </div>
  );
};

export default EventItems;
