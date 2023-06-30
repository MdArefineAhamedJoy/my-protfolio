import React from "react";

const Banner = () => {
  return (
    <div
      name="home"
      className=" md:h-screen h-full md:pt-20 pt-32 w-full bg-gradient-to-b from-[#1f2336] via-black to-blue-950"
    >
      <div className=" mx-auto flex  flex-col items-center justify-center h-full px-4 md:flex-row text-white">
        <div className="md:w-1/2 w-full">
  
            <p className="text-lg font-medium pb-2">
              Assalamu Alaikum, this is
            </p>
            <h1 className="text-4xl text-white font-bold">
              Md Arefine Ahamed Joy
            </h1>
            <p className="py-6 text-white">i am web application developer</p>
            <div className="pt-5">
              <button className="px-6 py-3 outline outline-2  outline-offset-2 outline-red-400 ">
                Get Started
              </button>
              <button className="px-6 ms-10 py-3 outline outline-2  outline-offset-2 outline-red-400 ">
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
