import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import About from "./About";


const OptionTabs = () => {
  return (
    <div className="text-white   w-11/12 mx-auto ">
      <Tabs className=' pt-1 ' >
        <TabList className='bg-[#2a2c47] mx-auto   flex '>
          <Tab className='block  hover:bg-[#ffc576] hover:text-black text-center  duration-500 py-4 w-2/12 border-x-2'>About Me </Tab>
          <Tab className='block  hover:bg-[#ffc576] hover:text-black text-center  duration-500 py-4 w-2/12 border-x-2'>Skills</Tab>
          <Tab className='block  hover:bg-[#ffc576] hover:text-black  text-center duration-500 py-4 w-2/12  border-x-2'>Project </Tab>
          <Tab className='block  hover:bg-[#ffc576] hover:text-black text-center  duration-500 py-4 w-2/12 border-x-2'>Eduction </Tab>
          <Tab className='block  hover:bg-[#ffc576] hover:text-black text-center  duration-500 py-4 w-2/12 border-x-2'>My Blogs </Tab>
          <Tab className='block  hover:bg-[#ffc576] hover:text-black text-center  duration-500 py-4 w-2/12 border-x-2'>Certificate </Tab>
        </TabList>

        <TabPanel>
          <About></About>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 4</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 5</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OptionTabs;
