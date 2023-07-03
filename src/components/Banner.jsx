import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import resumes from '../assets/Md Arefine Ahamed Joy Resume.pdf'

const Banner = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  const options = {
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: false,
        opacity: 0.3,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 100,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 1 },
      },
      style: {
        position: "absolute",
        width: "100%",
        hight: `100%`,
      },
    },
  };

  return (
    <div name="home" className="md:pt-20  md:h-screen  h-full relative  w-full  ">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
      />
      <div className=" mx-auto flex md:pt-0 pt-20  flex-col items-center justify-center h-full md:px-4 md:flex-row text-white ">
        <div className="md:w-1/2 w-full   ps-4 ">
          <p
            className="text-lg capitalize  mt-10 md:my-0  "
            data-aos="fade-button"
            data-aos-duration="1000"
          >
            Assalamu Alaikum,
          </p>
          <h2
            className="md:text-2xl capitalize pt-5 md:my-0 text-xl text-[#ffc576] font-medium font-signature"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            this is , Md Arefine Ahamed Joy
          </h2>
          <div className="py-10">
           
           <p className="text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-[#ffc576]">  
           I
              <Typewriter
              words={[
                " am a junior frontend developer",
                " am a junior frontend developer ",
                " am a junior frontend developer",
                " am web application developer",
                " am MERN Stack developer",
                " love coding ",
              ]}
              loop={15}
              cursor
              cursorStyle="_"
              typeSpeed={50}
              deleteSpeed={10}
              delaySpeed={3000}
            /></p>
            with full stack knowledge Web development.
            With a passion for learning and a collaborative
            mindset, I bring a strong skill set to projects.
          </div>
          <div>
            <a href={resumes} download="Md Arefine Ahamed Joy Resume">
            <button
              className="px-6 py-3 hover:bg-[#ffc576] hover:text-black  outline   duration-300 outline-[#ffc576] "
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              Download Resume
            </button>
            </a>
          </div>
        </div>
        <div
          className="md:w-1/2 w-full  flex items-center mt-10   md:mt-0 mx-auto h-full "
          data-aos="fade-up"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="1000"
        >
          <img
            src="https://i.ibb.co/hmm7mvG/Whats-App-Image-2023-07-03-at-04-10-48-removebg-preview.png"
            className=" md:w-96 md:h-96 h-fit px-4 md:px-0 w-fit rounded-md block mx-auto "
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
