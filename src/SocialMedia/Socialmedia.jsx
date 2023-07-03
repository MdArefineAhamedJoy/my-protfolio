import React, { useEffect, useState } from "react";
import {  FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from 'react-icons/fa';
const Socialmedia = () => {
  const [social, setSocial] = useState([]);

  useEffect(() => {
    fetch("Social.json")
      .then((res) => res.json())
      .then((data) => setSocial(data.social_media));
  }, []);

  console.log(social);

  return (
    <section className="h-screen pt-10">
      <div className=" grid grid-cols-2 px-4 text-xl">
        <div className="flex items-center justify-center ">
        <FaPhoneAlt size={30} /> 
        <span className="ms-10">
        <p className="py-2">O1736226388</p>
        <p>O1736226388</p>
        </span>
        </div>
        <div className="flex items-center justify-center">
        <FaMapMarkerAlt size={30} /> 
        <span className="ms-10">
        <p className="py-2">Kishorganj</p>
        <p> Dhaka, Bangladesh</p>
        </span>
        </div>
      </div>
      <div
        name="social media"
        className="mt-14 "
      >
        <p className="text-[#ffc576]">SOCIAL MEDIA</p>
        <h2 className="text-3xl font-medium uppercase pb-10">Let’s Be Friends</h2>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-2 px-4 w-full gap-5">
        {social.map((data, index) => (
          <div
            key={index}
            className="flex p-7 items-center justify-between hover:bg-[#ffc576] duration-500  outline outline-2 outline-[#ffc576] rounded-sm hover:text-black"
          >
            <div>
              <h2 className="card-title uppercase">{data.title}</h2>
              <small className="hidden md:block">{data.subtitle}</small>
            </div>
            <div>
              <img src={data.icon} className="w-20 h-20 rounded-full" alt="" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Socialmedia;
