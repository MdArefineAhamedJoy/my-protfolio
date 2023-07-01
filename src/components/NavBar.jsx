import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
const Navbar = () => {


    const [nav , setNav] = useState(false)

    const links = [
        {
            id: 1,
            link: "home"
        },
        {
            id: 2,
            link: "about"
        },
        {
            id: 3,
            link: "project"
        },
        {
            id: 4,
            link: "education"
        },
        {
            id: 5,
            link: "let's chats"
        },
    ]
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black ">
        <div>
            <h1 className="text-4xl ml-2 uppercase">Arefine29 </h1>
        </div>
        <ul className="hidden md:flex">
           {
            links.map(({id , link})=>  <li key={id} className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-300 ">
                  <Link to={link} smooth={true} duration={500}>{link}</Link>
            </li>)
           }
        </ul>
        <div onClick={()=> setNav(!nav)} className= " cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
           {
            nav? <FaTimes size={30}></FaTimes> : <FaBars  size={30}></FaBars>
           }
        </div>
        {
            nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-600 text-gray-500 "> 
                {
                    links.map(({id , link})=>  <li key={id} className="px-4 py-6 text-3xl cursor-pointer capitalize font-medium ">
                        <Link to={link} smooth={true} duration={500}>{link}</Link>
                    </li>)
                   }
                </ul>
            )
        }

    </div>
  );
};

export default Navbar;
