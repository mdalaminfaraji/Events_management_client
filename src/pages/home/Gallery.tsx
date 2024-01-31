import { BsCheck } from "react-icons/bs";

const Gallery = () => {
  return (
    <div className="font-roboto mt-48  h-[651px] flex flex-wrap-reverse justify-between items-center  px-4">
      <div className="">
        {" "}
        <h1 className="text-6xl font-extrabold">Gallery</h1>
        <p className="text-[#566B84] text-lg font-normal w-[512px] my-8">
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut
          posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
        </p>
        <div className="flex items-center ">
          <BsCheck className="w-5 h-5 bg-[#f3eded] rounded-full text-[#6FCF97]  text-[10px]" />
          <span className="ml-2 text-base font-normal">
            One day pas access all lecture
          </span>
        </div>
        <div className="flex items-center">
          <BsCheck className="w-5 h-5 bg-[#f3eded] my-4 rounded-full text-[#6FCF97]  text-[10px]" />
          <span className="ml-2 text-base font-normal">Lunch and Snack</span>
        </div>
        <div className="flex items-center">
          <BsCheck className="w-5 h-5 bg-[#f3eded] rounded-full text-[#6FCF97]  text-[10px]" />
          <span className="ml-2 text-base font-normal">Meet Event Speaker</span>
        </div>
        <div className="flex items-center">
          <BsCheck className="w-5 h-5 bg-[#f3eded] my-4 rounded-full text-[#6FCF97]  text-[10px]" />
          <span className="ml-2 text-base font-normal">Front Seat</span>
        </div>
        <div className="flex items-center">
          <BsCheck className="w-5 h-5 bg-[#f3eded] rounded-full text-[#6FCF97]  text-[10px]" />
          <span className="ml-2 text-base font-normal">
            One day pas access all lecture
          </span>
        </div>
      </div>
      <div className="  h-[651px]">
        <div className="max-w-[636px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 justify-items-center">
            {/* First Column */}
            <div className="md:flex md:flex-col justify-center items-center">
              <img
                src="/src/assets/gallery/g1.png"
                alt="Image 1"
                className="max-w-[191px] max-h-[242px] -mr-16 -mt-16"
              />
              <img
                src="/src/assets/gallery/g5.png"
                alt="Image 2"
                className="max-w-[128px] max-h-[192px] -mt-20 -mr-10"
              />
              <img
                src="/src/assets/gallery/g9.png"
                alt="Image 3"
                className="max-w-[172px] max-h-[258px] mt-4"
              />
            </div>
            {/* Second Column */}
            <div className="md:flex md:flex-col justify-center items-center max-w-[128px]">
              <img
                src="/src/assets/gallery/g2.png"
                alt="Image 4"
                className="max-w-[128px] max-h-[212px]"
              />
              <img
                src="/src/assets/gallery/g6.png"
                alt="Image 5"
                className="max-w-[128px] max-h-[215px] mt-4"
              />
              <img
                src="/src/assets/gallery/g10.png"
                alt="Image 6"
                className="max-w-[128px] max-h-[160px] mt-4"
              />
            </div>
            {/* Third Column */}
            <div className="md:flex md:flex-col justify-center items-center max-w-[128px] -ml-10">
              <img
                src="/src/assets/gallery/g3.png"
                alt="Image 7"
                className="max-w-[128px] max-h-[171px]"
              />
              <img
                src="/src/assets/gallery/g7.png"
                alt="Image 8"
                className="max-w-[128px] max-h-[172px] mt-4"
              />
              <img
                src="/src/assets/gallery/g11.png"
                alt="Image 9"
                className="max-w-[128px] max-h-[192px] mt-4"
              />
            </div>
            {/* Fourth Column */}
            <div className="md:flex md:flex-col justify-center items-center -ml-12">
              <img
                src="/src/assets/gallery/g4.png"
                alt="Image 10"
                className="max-w-[160px] max-h-[255px]"
              />
              <img
                src="/src/assets/gallery/g8.png"
                alt="Image 11"
                className="max-w-[128px] max-h-[165px] mt-4 -ml-8"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
