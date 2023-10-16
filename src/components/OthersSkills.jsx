import React from "react";
// import img1 from "../assets/istockphoto-1413514596-170667a.webp"
// import img2 from '../assets/istockphoto-1413514709-170667a.webp'
// import img3 from '../assets/istockphoto-1413514774-170667a.webp'

const OthersSkills = () => {
  // Todo: ADD Images
  const experiences = [
    {
      id: 1,
      title: "Team Work",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      title: "Heard Working Person",
      style: "shadow-pink-500",
    },
    {
      id: 3,
      title: "Good Communication",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      title: "Quick Learner",
      style: "shadow-purple-600",
    },
    {
      id: 5,
      title: "Flexibility,",
      style: "shadow-blue-400",
    },
    {
      id: 6,
      title: "Project Managing",
      style: "shadow-green-600",
    },
  ];
  return (
    <div name="experience" className=" w-11/12 mx-auto py-20">
      <div className="flex flex-col justify-center h-full text-white">
        <div>
          <p className="text-[#ffc576] text-3xl font-medium">Others Skills</p>
        </div>
        <div className="w-full grid sm:grid-cols-3 gap-8 text-center py-8">
          {experiences.map(({ id, title, src, style }) => (
            <div
              key={id}
              className={`shadow-md flex items-center justify-center hover:scale-105 duration-200 py-2 rounded-lg ${style}`}
            >
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OthersSkills ;
