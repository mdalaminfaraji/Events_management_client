import { BsCheck } from "react-icons/bs";

const Gallery = () => {
  return (
    <div className="font-roboto mt-48  xl:h-[651px] grid grid-cols-1 lg:grid-cols-2 justify-items-center md:justify-between items-center  px-2 md:px-4">
      <div className="order-2 lg:order-1">
        {" "}
        <h1 className="text-4xl mt-4 md:text-6xl font-extrabold">Gallery</h1>
        <p className="text-[#566B84] text-base md:text-lg font-normal max-w-[512px] my-4 md:my-8 ">
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

      <div className="max-w-[550px] mx-auto order-1 lg:order-2">
        <div className="grid  grid-cols-4 gap-4 justify-items-center items-center">
          {/* First Column */}
          <div className="flex flex-col justify-center items-center ">
            <img
              src="/src/assets/gallery/g1.png"
              alt="Image 1"
              className="max-w-[50px] sm:max-w-[90px] md:max-w-[191px] md:max-h-[242px] md:-mr-16 md:-mt-16 "
            />
            <img
              src="/src/assets/gallery/g5.png"
              alt="Image 2"
              className="max-w-[50px] sm:max-w-[70px] md:max-w-[128px] md:max-h-[192px] md:-mt-20 md:-mr-10 "
            />
            <img
              src="/src/assets/gallery/g9.png"
              alt="Image 3"
              className="max-w-[50px] sm:max-w-[95px] md:max-w-[172px] md:max-h-[258px] md:mt-4 "
            />
          </div>
          {/* Second Column */}
          <div className="flex flex-col justify-center items-center  ">
            <img
              src="/src/assets/gallery/g2.png"
              alt="Image 4"
              className="max-w-[50px] sm:max-w-[70px] sm:h-[140px] md:max-w-[128px] md:max-h-[212px] "
            />
            <img
              src="/src/assets/gallery/g6.png"
              alt="Image 5"
              className="max-w-[50px] sm:max-w-[70px] sm:h-[140px] md:max-w-[128px] md:max-h-[215px] md:mt-4"
            />
            <img
              src="/src/assets/gallery/g10.png"
              alt="Image 6"
              className="max-w-[50px] sm:max-w-[70px] sm:h-[140px] md:max-w-[128px] md:max-h-[160px] md:mt-4"
            />
          </div>
          {/* Third Column */}
          <div className="flex flex-col justify-center items-center  -ml-10 ">
            <img
              src="/src/assets/gallery/g3.png"
              alt="Image 7"
              className="max-w-[50px] sm:max-w-[70px] sm:h-[140px] md:max-w-[128px] md:max-h-[171px]"
            />
            <img
              src="/src/assets/gallery/g7.png"
              alt="Image 8"
              className="max-w-[50px] sm:max-w-[70px] sm:h-[140px] md:max-w-[128px] md:max-h-[172px] md:mt-4 "
            />
            <img
              src="/src/assets/gallery/g11.png"
              alt="Image 9"
              className="max-w-[50px] sm:max-w-[70px] sm:h-[140px] md:max-w-[128px] md:max-h-[192px] md:mt-4 "
            />
          </div>
          {/* Fourth Column */}
          <div className="flex flex-col justify-center items-center -ml-20 ">
            <img
              src="/src/assets/gallery/g4.png"
              alt="Image 10"
              className="max-w-[60px] sm:max-w-[80px] sm:h-[150px] md:max-w-[160px] md:max-h-[255px] "
            />
            <img
              src="/src/assets/gallery/g8.png"
              alt="Image 11"
              className=" max-w-[50px] sm:max-w-[70px] sm:h-[120px] md:max-w-[128px] md:max-h-[165px] md:mt-4 md:-ml-8 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
