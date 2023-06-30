import React from "react";

const Education = () => {
  return (
    <div className=" pt-5">
      <div className="card card-side   rounded-none">
        <figure>
          <img
            src="https://i.ibb.co/7NpWmbZ/download.jpg"
            alt="Movie"
            className="h-40 w-[400px]"
          />
        </figure>
        <div className="card-body grid grid-cols-2 gap-4">
          <h2 className="">Intutison Name : National University </h2>
          <p>status : 2021-Present </p>
          <h2 className="card-title">Class : (BBA) Honours 1st Year </h2>
          <h2 className="card-title">Group : Department Of Management </h2>
        </div>
      </div>
      <div className="card card-side   rounded-none">
        <figure>
          <img
            src="https://i.ibb.co/sj1vTWK/images.jpg"
            alt="Movie"
            className="md:h-40 md:w-[400px]"
          />
        </figure>
        <div className="card-body grid grid-cols-2 gap-4">
          <p>Intrution Name : Tongi Pilot School </p>
          <p>Graduation : SSC </p>
          <p>GPA : 4.11</p>
          <p>Duration : 2 years</p>
          <p>Batch : 98 Batch</p>
        </div>
      </div>
      <div className="card card-side   rounded-none">
        <figure>
          <img
            src="https://i.ibb.co/pjr94X2/download-1.jpg"
            alt="Movie"
            className="h-40 w-[400px]"
          />
        </figure>
        <div className="card-body grid grid-cols-2 gap-4">
          <p>Intrution Name : Tongi Pilot School </p>
          <p>Graduation : SSC </p>
          <p>GPA : 4.11</p>
          <p>Duration : 2 years</p>
          <p>Batch : 98 Batch</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
