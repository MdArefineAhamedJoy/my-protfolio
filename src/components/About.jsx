import React from "react";

const About = () => {
  return (
    <div
      className="w-11/12 mx-auto h-full bg-[#313552]"
      data-aos="flip-right"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
    >
      <div className="hero  h-full">
        <div className="hero-content flex-col lg:flex-row">
          <div className="md:w-1/2">
            <img
              src="https://i.ibb.co/2gSr8n8/about-pic.png"
              className="w-full md:h-[500px] h-full "
            />
          </div>
          <div className="md:w-1/2 ">
            <h3 className="pb-2 text-[#ffc576]">About Me </h3>
            <h1 className="text-3xl font-bold ">
              I am an full stuck web developer.
            </h1>
            <div className="py-6">
              <p className="py-4">Why hire me for your Company?</p>
              <p>
                I have very good knowledge about front end techniques. I am well
                versed in HTML, CSS, Tailwind, Bootstrap etc. And also
                comfortable in Express.js, MongoDB.I can master modern
                technology very easily.Apart form that, I am very attentive in
                working with team.
              </p>
              <br />
              <p>
                I am eager to join a tech company that builds out-of-the
                solutions for regional clients. I am skilled in developing
                plans, managing projects and user documentation.
              </p>
            </div>
            <a href="https://www.linkedin.com/in/md-arefine-ahame05d-joy-15b96726b/">
              <button className="px-6 mt-5 py-3 hover:bg-[#ffc576] hover:text-black  outline   duration-300 outline-[#ffc576] ">
                Hire Me
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
