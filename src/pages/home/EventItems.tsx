/* eslint-disable no-unsafe-optional-chaining */
import useEventsItem from "@/hooks/useEventsItem";
import React from "react";

const EventItems = () => {
  const { data, isLoading, isError } = useEventsItem();
  if (isLoading) {
    return <p>Loading.......</p>;
  }

  if (isError) {
    return <p>Something went wrong</p>;
  }
  const { title: title1, image: image1 } = data?.data[0];
  const { title: title2, image: image2 } = data?.data[1];
  const { title: title3, image: image3 } = data?.data[2];
  const { title: title4, image: image4 } = data?.data[3];
  const { title: title5, image: image5 } = data?.data[4];
  const { title: title6, image: image6 } = data?.data[5];

  return (
    <div className="font-roboto mt-32 max-w-[1250px] mx-auto">
      <h1 className="w-96 mx-auto text-6xl font-bold ">Event Items</h1>
      <p className="text-center max-w-[700px] mx-auto mt-3 mb-14 text-lg text-[#566B84]">
        Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
        ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
      </p>

      <div className="grid grid-cols-3 md:grid-cols-12 xl:grid-cols-12 gap-4 ">
        {/* First column */}
        <div className="col-span-3 md:col-span-12 xl:col-span-4 justify-self-center">
          <div className="mb-4 bg-gray-200 p-4">
            <img
              src={`https://events-management-nsnv.onrender.com/${image1.image}`}
              alt={title1}
            />
            <p className="font-semibold text-xl pt-2">{title1}</p>
          </div>
          <div className="grid grid-cols-12 gap-x-6">
            <div className="bg-gray-300 p-4 col-span-6 justify-self-center">
              {" "}
              <img
                src={`https://events-management-nsnv.onrender.com/${image3.image}`}
                alt={title3}
              />
              <p className="font-semibold text-xl pt-2">{title3}</p>
            </div>
            <div className="bg-gray-300 p-4 col-span-6 justify-self-center">
              {" "}
              <img
                src={`https://events-management-nsnv.onrender.com/${image4.image}`}
                alt={title4}
              />
              <p className="font-semibold text-xl pt-2">{title4}</p>
            </div>
          </div>
        </div>

        {/* Second column */}
        <div className="col-span-3 md:col-span-12 xl:col-span-4 justify-self-center ">
          <div className="bg-gray-200 p-4">
            {/* First row, second column */}
            <div>
              {" "}
              <img
                src={`https://events-management-nsnv.onrender.com/${image2.image}`}
                alt={title2}
              />
              <p className="font-semibold text-xl pt-2">{title2}</p>
            </div>
            {/* Second row, second column */}
          </div>
          <div className="bg-gray-200 mt-4 p-4">
            <div>
              {" "}
              <img
                src={`https://events-management-nsnv.onrender.com/${image5.image}`}
                alt={title5}
              />
              <p className="font-semibold text-xl pt-2">{title5}</p>
            </div>
          </div>
        </div>

        {/* Third column */}
        <div className="col-span-3 md:col-span-12 xl:col-span-4 justify-self-center ">
          <div className="bg-gray-200 p-4">
            <img
              src={`https://events-management-nsnv.onrender.com/${image6.image}`}
              alt={title6}
              className="w-[364px] h-[460px]"
            />
            <p className="font-semibold text-xl pt-2">{title6}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventItems;
