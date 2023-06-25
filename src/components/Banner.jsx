import React from "react";

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row ">
        <div className="w-1/2   ">
          <h1 className="text-5xl text-white font-bold">Box Office News!</h1>
          <p className="py-6 text-white">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
        <div className="w-1/2   h-full">
        <img
          src="https://i.ibb.co/6D1mH0H/294276808-613874180350562-1223793273893716160-n.jpg"
          className="max-w-sm rounded-lg shadow-2xl w-full h-[500px] block  mx-auto"
        />
        </div>
      </div>
    </div>
  );
};

export default Banner;
