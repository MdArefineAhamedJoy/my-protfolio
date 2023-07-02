import React from "react";
import { Typewriter } from "react-simple-typewriter";

import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

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
      style:{
        position: "absolute",
        width:"100%",
        hight:`100%`
      }
    },
  };
  
  

  return (
    <div
      name="home"
      className="md:pt-0  md:h-screen h-full relative  w-full  "
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
      />
      <div className=" mx-auto flex  flex-col items-center justify-center h-full md:px-4 md:flex-row text-white ">
        <div className="md:w-1/2 w-full   ps-4 ">
          <p className="text-lg capitalize md:pb-2 my-5 md:my-0">
            Assalamu Alaikum,
          </p>
          <h2 className="md:text-2xl capitalize my-5 md:my-0 text-xl text-white font-medium">
            this is , Md Arefine Ahamed Joy
          </h2>

          <h1 className="md:py-6 text-[#ffc576]  py-2 md:text-3xl text-2xl tracking-widest capitalize font-bold ">
            <Typewriter
              words={[
                "i am web application developer",
                "i am MERN Stack developer",
                "i love web  development",
                "I love coding ",
              ]}
              loop={15}
              cursor
              cursorStyle="_"
              typeSpeed={200}
              deleteSpeed={100}
              delaySpeed={1000}
            />
          </h1>

          <div className="pt-5">
            <button className="px-6 py-3 hover:bg-[#ffc576] hover:text-black  outline   duration-300 outline-[#ffc576] ">
              Download Resume
            </button>
          </div>
        </div>
        <div className="md:w-1/2 w-full  flex items-center mt-10   md:mt-0 mx-auto h-full ">
          <img
            src="https://i.ibb.co/6D1mH0H/294276808-613874180350562-1223793273893716160-n.jpg"
            className="shadow-2xl w-96 rounded-full h-96 block mx-auto"
          />
        </div>
      </div>

    </div>
  );
};

export default Banner;
