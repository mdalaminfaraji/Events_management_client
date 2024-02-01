import { ArrowLeft, ArrowRight } from "lucide-react";

const Testimonial = () => {
  return (
    <div>
      <div className="flex justify-between flex-col md:flex-row mt-24">
        <h1 className="text-start text-4xl md:text-5xl lg:text-6xl font-bold">
          What Our Client Said About Us
        </h1>
        <div className="flex mt-5 gap-3">
          <div className="bg-[#F8F9FF]  rounded-full w-20 h-20 inline-flex items-center justify-center">
            <ArrowLeft className="mr-2 text-gray-400" />
          </div>
          <div className="bg-[#3461FF]  rounded-full w-20 h-20 inline-flex items-center justify-center">
            <ArrowRight className="mr-2 text-white" />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-4  relative mt-20">
        <div className="max-w-[513px] h-[312px] border-2 rounded-2xl p-10 bg-[#3461FF] font-roboto">
          <div className="flex ">
            <div className="w-[85px] h-[85px] rounded-full mr-4">
              <img src="/src/assets/testimonial/t1.png" />
            </div>
            <div>
              <h1 className="text-white text-2xl font-[500]">Amelia Joseph</h1>
              <p className="text-white">Chief Manager</p>
            </div>
          </div>
          <div className="text-white text-base mt-5">
            My vision came alive effortlessly. Their blend of casual and
            professional approach made the process a breeze. Creativity flowed,
            and the results were beyond my expectations.
          </div>
        </div>
        <div className="max-w-[513px] h-[312px] border-2 rounded-2xl p-10 bg-[#F8F9FF] font-roboto">
          <div className="flex">
            <div className="w-[85px] h-[85px] rounded-full mr-4">
              <img src="/src/assets/testimonial/t2.png" />
            </div>
            <div>
              <h1 className=" text-2xl font-[500]">Amelia Joseph</h1>
              <p className="">Chief Manager</p>
            </div>
          </div>
          <div className=" text-base mt-5">
            My vision came alive effortlessly. Their blend of casual and
            professional approach made the process a breeze. Creativity flowed,
            and the results were beyond my expectations.
          </div>
        </div>
        <div className="max-w-[513px] h-[280px] border-2 rounded-2xl p-10 bg-[#F8F9FF] font-roboto ">
          <div className="flex">
            <div className="w-[85px] h-[85px] rounded-full mr-4">
              <img src="/src/assets/testimonial/t3.png" />
            </div>
            <div>
              <h1 className=" text-2xl font-[500]">Amelia Joseph</h1>
              <p className="">Chief Manager</p>
            </div>
          </div>
          <div className=" text-base mt-5">
            My vision came alive effortlessly. Their blend of casual and
            professional approach made the process a breeze. Creativity flowed,
            and the results were beyond my expectations.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
