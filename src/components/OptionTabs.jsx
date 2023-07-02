import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import About from "./About";
import Skills from "./Skills";
import OthersSkills from "./OthersSkills";
import Blog from "./Blog";
import Socialmedia from "../SocialMedia/Socialmedia";

const OptionTabs = () => {
  return (
    <div name="about" className="text-white w-full md:h-screen mt-10 md:mt-0 md:w-11/12 mx-auto">
      <Tabs>
        <TabList className="bg-[#2a2c47] grid md:grid-cols-5 grid-cols-3 gap-y-2">
          <Tab
            className="block hover:bg-[#ffc576] hover:text-black text-center cursor-pointer duration-500 py-4 border-x-2 border-[#ffc576] outline-none"
            selectedClassName="bg-[#ffc576] text-black"
          >
            About Me
          </Tab>
          <Tab
            className="block hover:bg-[#ffc576] hover:text-black text-center cursor-pointer duration-500 py-4 border-x-2 border-[#ffc576] outline-none"
            selectedClassName="bg-[#ffc576] text-black"
          >
            Skills
          </Tab>
          <Tab
            className="block hover:bg-[#ffc576] hover:text-black text-center cursor-pointer duration-500 py-4 border-x-2 border-[#ffc576] outline-none"
            selectedClassName="bg-[#ffc576] text-black"
          >
            My Blogs
          </Tab>
          <Tab
            className="block hover:bg-[#ffc576] hover:text-black text-center cursor-pointer duration-500 py-4 border-x-2 border-[#ffc576] outline-none"
            selectedClassName="bg-[#ffc576] text-black"
          >
            Others Skills
          </Tab>
          <Tab
            className="block hover:bg-[#ffc576] hover:text-black text-center cursor-pointer duration-500 py-4 border-x-2 border-[#ffc576] outline-none"
            selectedClassName="bg-[#ffc576] text-black"
          >
            Contact Me
          </Tab>
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
          <Socialmedia></Socialmedia>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OptionTabs;
