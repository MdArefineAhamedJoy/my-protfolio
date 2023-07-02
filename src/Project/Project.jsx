import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Project = () => {
  const [futures, setFutures] = useState([]);
  useEffect(() => {
    fetch("Project.json")
      .then((res) => res.json())
      .then((data) => setFutures(data));
  }, []);

  return (
    <div  name="project" className="pt-10 px-4 h-full w-full">
      <h2 className="text-[#ffc576] text-3xl font-medium">Project</h2>
      <div className="pt-10 md:grid grid-cols-3 gap-5">
        {futures?.map(({id, image ,title , objective , technology, animation}) => (
          <div
            key={id}
            className="card group rounded-none  hover:border-b-2 border-[#ffc576] duration-500 overflow-hidden shadow-xl"  data-aos={animation?.dataAos}
            data-aos-easing={animation?.dataAosEasing}
            data-aos-duration={animation?.dataAosDuration}>
            <figure>
              <img
                src={image}
                alt="title"
                className="transform group-hover:scale-105 duration-300"
              />
            </figure>
            <div className="p-2">
              <h2 className="card-title text-[#ffc576] ">{title}</h2>
              <p>{objective}</p>
              <span className=" font-bold text-[#ffc576] pb-3 ">
                Technology{" "}
              </span>
              <ul className="grid grid-cols-3 ga-5 ">
                {technology?.map((tec) => (
                  <li
                    className="btn m-1 btn-xs bg-black text-white group-hover:bg-[#e5af63] group-hover:text-black duration-300"
                    key={Math.random()}
                  >
                    {tec}
                  </li>
                ))}
              </ul>
              <div className="flex  justify-between gap-2 mt-4 p-2">
                <button className="btn btn-sm group-hover:bg-[#e5af63]  duration-300 capitalize">
                  Live Site{" "}
                </button>
                <button className="btn btn-sm group-hover:bg-[#ffc576]  duration-300 capitalize">
                  Clint Side{" "}
                </button>
                <button className="btn btn-sm group-hover:bg-[#ffc576]  duration-300 capitalize">
                  Server Side{" "}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
