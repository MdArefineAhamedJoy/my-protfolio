import React, { useEffect, useState } from "react";

const Project = () => {
  const [futures, setFutures] = useState([]);
  useEffect(() => {
    fetch("Project.json")
      .then((res) => res.json())
      .then((data) => setFutures(data));
  }, []);

  return (
    <div className="pt-10 px-4  w-full">
      <h2 className="text-xl font-bold uppercase">Project</h2>
      <div className="pt-10 md:grid grid-cols-3 gap-5">
        {futures?.map((future) => (
          <div
            key={future?.id}
            className="card  rounded-none border-4 shadow-xl overflow-hidden relative"
          >
            {/* <figure>
              <img
                src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure> */}
            <div className="card-body">
              <h2 className="card-title">{future?.title}</h2>
              {future?.features?.map((data, index) => (
                <ul key={Math.random()}>
                  <li>
                    {index + 1} {data} 
                  </li>
                </ul>
              ))}
              <div>
                <p>Technology</p>
                <div className="grid grid-cols-3">
                {future?.technology?.map((data) => (
                  <span key={Math.random()}>{data}</span>
                ))}
                </div>
              </div>

              <div className="card-actions absolute bottom-1 justify-center">
                <div className="badge badge-outline">show details</div>
                <div className="badge badge-outline">show details</div>
                <div className="badge badge-outline">show details</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
