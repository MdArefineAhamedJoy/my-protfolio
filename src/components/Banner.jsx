import React from "react";

const Banner = () => {
  return (
    <div
      name="home"
      className=" md:h-screen h-full pt-10 md:pt-0 w-full bg-gradient-to-b from-[#1f2336] via-black to-blue-950"
    >
      <div className=" mx-auto flex  flex-col items-center justify-center h-full md:px-4 md:flex-row text-white">
        <div className="md:w-1/2 w-full ps-4 ">
  
            <p className="text-lg capitalize pb-2 ">
              Assalamu Alaikum, this is
            </p>
            <h2 className="md:text-2xl text-xl text-white font-medium">
              Md Arefine Ahamed Joy
            </h2>
            <h1 className="py-6 md:text-5xl text-2xl tracking-widest capitalize font-bold text-white">i am web application developer</h1>
            <div className="pt-10">
              <button className="px-6 py-3 hover:bg-[#ffc576] hover:text-black  outline outline-2  duration-300 outline-[#ffc576] ">
                Get Started
              </button>
              <button className="px-6 duration-300 hover:bg-[#ffc576] hover:text-black  ms-10 py-3 outline outline-2   outline-[#ffc576] ">
                Get Started
              </button>
            </div>

        </div>
        <div className="md:w-1/2 w-full flex items-center mt-10  md:mt-0 mx-auto h-full ">
          <img
            src="https://i.ibb.co/6D1mH0H/294276808-613874180350562-1223793273893716160-n.jpg"
            className="rounded-lg shadow-2xl w-full md:h-[400px] h-full block  mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
