import React from "react";
import HeroPage from "../components/HeroPage";
import OptionTabs from "../components/OptionTabs";
import Project from "../Project/Project";
import Socialmedia from "../SocialMedia/Socialmedia";
import Footer from "../Footer/Footer";
import Education from './../components/Education';
import Chats from "../components/Chats";


const Home = () => {
  return (
    <div>
      <HeroPage></HeroPage>
      <OptionTabs></OptionTabs>
      <Project></Project>
      <Education></Education>
      {/* <Socialmedia></Socialmedia> */}
      <Chats></Chats>
      <Footer></Footer>
    </div>
  );
};

export default Home;
