import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import OthersSkills from "./OthersSkills";


const OptionTabs = () => {
  return (
    <div className="text-white   w-11/12 mx-auto ">
      <Tabs  >
        <TabList className='bg-[#2a2c47] mx-auto   flex '>
          <Tab className='block  hover:bg-[#ffc576] hover:text-black text-center  duration-500 py-4 w-2/12 border-x-2'>About Me </Tab>
          <Tab className='block  hover:bg-[#ffc576] hover:text-black text-center  duration-500 py-4 w-2/12 border-x-2'>Skills</Tab>
          <Tab className='block  hover:bg-[#ffc576] hover:text-black text-center  duration-500 py-4 w-2/12 border-x-2'>Eduction </Tab>
          <Tab className='block  hover:bg-[#ffc576] hover:text-black text-center  duration-500 py-4 w-2/12 border-x-2'>My Blogs </Tab>
          <Tab className='block  hover:bg-[#ffc576] hover:text-black  text-center duration-500 py-4 w-2/12  border-x-2'>Others Skills </Tab>
          <Tab className='block  hover:bg-[#ffc576] hover:text-black text-center  duration-500 py-4 w-2/12 border-x-2'>Certificate </Tab>
        </TabList>

        <TabPanel>
          <About></About>
        </TabPanel>
        <TabPanel>
          <Skills></Skills>
        </TabPanel>
        <TabPanel>
        <Education></Education>
        </TabPanel>
        <TabPanel>
        </TabPanel>
        <TabPanel>
        <OthersSkills></OthersSkills>
        </TabPanel>
        <TabPanel>
          <h2>Any content 5</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OptionTabs;
