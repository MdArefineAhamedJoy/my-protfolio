import React from "react";

const Footer = () => {
  return (
    <div className="pt-10">
      <footer className=" py-10 bg-neutral px-4 md:px-0   md:flex md:pt-20 ">
        <div className=" md:w-3/12 md:text-center">
          <span className="footer-title text-2xl text-[#d2a668] font-signature font-bold shadow-md shadow-white" >Arefine29</span>
        </div>
        <div className="md:w-6/12 md:text-center my-10 md:my-0  ">
          <span className=" footer-title text-3xl ">Let’s Talk ?</span>
          <div className="md:pt-20 pt-5 pb-3 md:flex gap-5 justify-center ">
            <a className="link link-hover block py-3 ">About us</a>
            <a className="link link-hover block py-3 ">Contact</a>
            <a className="link link-hover block py-3 ">Jobs</a>
            <a className="link link-hover block py-3 ">Press kit</a>
          </div>
        </div>
        <div className=" md:w-3/12 text-right pe-5">
          <button className=" block px-8 py-2 hover:bg-[#ffc576] hover:text-black font-medium outline   duration-700 outline-[#ffc576] d" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">Hire Me</button>
          <button className="btn btn-circle btn-outline btn-warning md:mt-16 mt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </footer>
      <div className="text-center w-full">
      <small >Copyright By@Arefine - 2023 </small>
      </div>
    </div>
  );
};

export default Footer;
