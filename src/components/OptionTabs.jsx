import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import About from "./About";
import Skills from "./Skills";
import OthersSkills from "./OthersSkills";
import Blog from "./Blog";
import Chats from "./Chats";


const OptionTabs = () => {
  return (
    <div className="text-white w-full h-full  md:w-11/12 mx-auto  ">
      <Tabs  >
        <TabList className='bg-[#2a2c47]   grid md:grid-cols-5 grid-clos-3 '>
          <Tab className='block  hover:bg-[#ffc576] hover:text-black text-center cursor-pointer  duration-500 py-4  border-x-2 border-[#ffc576] outline-none'>About Me </Tab>
          <Tab className='block  hover:bg-[#ffc576] hover:text-black text-center cursor-pointer  duration-500 py-4  border-x-2 border-[#ffc576]  outline-none'>Skills</Tab>
          <Tab className='block  hover:bg-[#ffc576] hover:text-black text-center cursor-pointer  duration-500 py-4  border-x-2 border-[#ffc576]  outline-none'>My Blogs </Tab>
          <Tab className='block  hover:bg-[#ffc576] hover:text-black  text-center cursor-pointer duration-500 py-4   border-x-2 border-[#ffc576]  outline-none'>Others Skills </Tab>
          <Tab className='block  hover:bg-[#ffc576] hover:text-black text-center cursor-pointer  duration-500 py-4  border-x-2 border-[#ffc576]  outline-none'>Social Media </Tab>
        </TabList>

        <TabPanel>
          <About></About>
        </TabPanel>
        <TabPanel>
          <Skills></Skills>
        </TabPanel>
        <TabPanel>
          <Blog></Blog>
        </TabPanel>
        <TabPanel>
        <OthersSkills></OthersSkills>
        </TabPanel>
        <TabPanel>
          <h1>Resume </h1>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OptionTabs;
