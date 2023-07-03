import React from "react";

const skill = [
  { name: "JavaScript", percent: "90%" },
  { name: "React.js", percent: "90%" },
  { name: "HTML", percent: "90%" },
  { name: "CSS", percent: "90%" },
  { name: "Tailwind CSS", percent: "90%" },
  { name: "DaisyUl", percent: "95%" },
  { name: "Bootstrap", percent: "90%" },
  { name: "React Bootstrap", percent: "80%" },
  { name: "Node.js", percent: "50%" },
  { name: "Express.js", percent: "70%" },
  { name: "MongoDB", percent: "60%" },
  { name: "Firebase Authentication", percent: "70%" },
];

function Skills() {
  return (
    <div className="grid h-full md:grid-cols-2 gap-10 py-10" data-aos="zoom-out"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="1000">
      {skill.map((data, index) => (
        <div key={index}>
          <div className="flex justify-between items-center p-2">
            <p className="font-semibold mb-2">{data.name}</p>
            <small>{data.percent}</small>
          </div>
          <div className="w-full bg-gray-200 rounded">
            <div
              className="h-4 bg-[#ffc576] "
              style={{ width: data.percent }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
