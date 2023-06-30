import React, { useEffect, useState } from "react";
import { FaFacebookSquare } from "react-icons/fa";
const Socialmedia = () => {
  const [social, setSocial] = useState([]);

  useEffect(() => {
    fetch("Social.json")
      .then((res) => res.json())
      .then((data) => setSocial(data.social_media));
  }, []);

  console.log(social);

  return (
    <>
      <div className="mt-24 px-4">
        <p>SOCIAL MEDIA</p>
        <h2 className="text-3xl font-bold uppercase pb-10">Let’s Be Friends</h2>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-2 px-4 w-full gap-5">
        {social.map((data, index) => (
          <div
            key={index}
            className="flex p-7 items-center justify-between hover:bg-[#ffc576] duration-500  outline outline-2 outline-[#ffc576] rounded-sm hover:text-black"
          >
            <div>
              <h2 className="card-title uppercase">{data.title}</h2>
              <p className="hidden md:block">{data.subtitle}</p>
            </div>
            <div>
              <FaFacebookSquare></FaFacebookSquare>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Socialmedia;
