import React from "react";

const Footer = () => {
  return (
    <div className="pt-20">
      <footer className=" py-10 bg-neutral  flex pt-20 ">
        <div className=" md:w-3/12 text-center">
          <span className="footer-title text-xl">Services</span>
        </div>
        <div className="md:w-6/12 text-center  ">
          <span className=" footer-title text-3xl ">Let’s Talk ?</span>
          <div className="pt-20 pb-3 md:flex gap-5 justify-center ">
            <a className="link link-hover ">About us</a>
            <a className="link link-hover ">Contact</a>
            <a className="link link-hover ">Jobs</a>
            <a className="link link-hover ">Press kit</a>
          </div>
          <small>Copyright By@Example - 2019 </small>
        </div>
        <div className=" md:w-3/12 text-right pe-5">
          <button className="btn btn-outline btn-warning block">Warning</button>
          <button className="btn btn-circle btn-outline btn-warning mt-16">
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
    </div>
  );
};

export default Footer;
