import React, { useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "project",
    },
    {
      id: 4,
      link: "education",
    },
    {
      id: 5,
      link: "let's chat",
    },
  ];

  return (
    <nav className="bg-gray-200" data-aos="fade-left"
    data-aos-easing="linear"
    data-aos-duration="1500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-[#d2a668] shadow-md uppercase">Arefine29</span>
            </div>
          </div>

          <div className="hidden md:block">
            <ul className="ml-auto flex items-baseline space-x-4" >
              {links.map((link) => (
                <li key={link.id} >
                  <ScrollLink
                    activeClass="active"
                    to={link.link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-gray-600 capitalize text-xl hover:text-blue-500 cursor-pointer"
                    activeStyle={{ fontWeight: "bold", color: "blue" }}
                  >
                    {link.link}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-blue-500 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-200 focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {links.map((link) => (
            <li key={link.id}>
              <ScrollLink
                onClick={toggleMenu}
                activeClass="active"
                to={link.link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-gray-600 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
                activeStyle={{ fontWeight: "bold", color: "blue" }}
              >
                {link.link}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
