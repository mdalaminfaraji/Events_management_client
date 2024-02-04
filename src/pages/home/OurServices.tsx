import { Button } from "@/components/ui/button";
import useOurServices from "@/hooks/useOurServices";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

type serviceType = {
  title: string;
  servicesImage: string;
  description: string;
  features: string[];
};
type obj = {
  title: string;
  description: string;
};
const OurServices = () => {
  const [hoveredItem, setHoveredItem] = useState<obj | null>(null);
  const { data: Services, isLoading, isError } = useOurServices();
  if (isLoading) {
    return <p>Loading.......</p>;
  }

  if (isError) {
    return <p>Something went wrong..................</p>;
  }

  return (
    <div className="font-roboto ">
      <h1 className="w-80 text-5xl text-center sm:w-96 mx-auto sm:text-6xl font-bold ">
        Our Services
      </h1>
      <p className="text-center max-w-[700px] mx-auto mt-3 text-lg text-[#566B84]">
        Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
        ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
      </p>
      <div className="mt-14 font-roboto grid grid-cols-1  xl:grid-cols-3 gap-5 justify-items-center">
        {Services?.data
          .slice(0, 3)
          .map(
            (
              { title, servicesImage, description, features }: serviceType,
              index: number
            ) => (
              <div
                key={uuidv4()}
                className={`w-[340px] sm:w-[412px] h-[569px] p-6 rounded-md bg-gradient-to-tr ${
                  index == 0
                    ? `from-[#EDDDF1] to-[#efebef]`
                    : index == 1
                    ? "from-[#F0ECF1] to-[#DEF0EE]"
                    : "from-[#C3EDEA] to-[#E8F1F0]"
                } `}
                onMouseEnter={() => setHoveredItem({ title, description })}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {hoveredItem && hoveredItem.title === title ? (
                  <>
                    <h3 className="mb-3 text-3xl font-bold">{title}</h3>
                    <p className="text-base text-[#566B84] mb-8">
                      {hoveredItem.description}
                    </p>
                  </>
                ) : (
                  <img
                    src={servicesImage}
                    className="w-[300px] sm:w-[362px] h-[253px]"
                  />
                )}
                {hoveredItem && hoveredItem.title === title ? (
                  ""
                ) : (
                  <h3 className="mt-6 text-3xl font-bold">{title}</h3>
                )}

                <div className="mt-3">
                  {features.map((item) => (
                    <p key={uuidv4()} className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 bg-white rounded-full mb-4 text-[#6FCF97]" />
                      <span className="ml-2 mb-4">{item}</span>
                    </p>
                  ))}
                </div>

                {hoveredItem && hoveredItem.title === title ? (
                  <Button className="w-full mt-12">Check it out</Button>
                ) : (
                  ""
                )}
              </div>
            )
          )}
      </div>
    </div>
  );
};

export default OurServices;
