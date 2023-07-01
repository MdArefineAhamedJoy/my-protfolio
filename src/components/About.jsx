import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full bg-[#313552]">
      <div className="hero  h-full">
        <div className="hero-content flex-col lg:flex-row">
          <div className="md:w-1/2">
            <img
              src="https://i.ibb.co/2gSr8n8/about-pic.png"
              className="w-full md:h-[500px] h-full "
            />
          </div>
          <div className="md:w-1/2 ">
            <h3 className="pb-5">About Me </h3>
            <h1 className="text-3xl font-bold ">
              Why hire me for your next project?
            </h1>
            <div className="py-6">
              <p className="py-4">
                Why hire me for your next project? Meet my startup design agency
                Shape Rex Currently I am working at CodeNext as Product
                Designer.
              </p>
              <p>
                Before that I’ve worked at SpurBee, Dhaka as a UX, UI Designer.
                I love to work in User Experience & User Interface designing.
                Because I love to solve the design problem and find easy and
                better solutions to solve it. I always try my best to make good
                user interface with the best user experience. I have been
                working as a Visual designer from.
              </p>
            </div>
            <button className="btn btn-outline btn-warning">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
