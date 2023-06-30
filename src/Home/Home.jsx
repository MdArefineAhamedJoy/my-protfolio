import React from "react";
import HeroPage from "../components/HeroPage";
import OptionTabs from "../components/OptionTabs";
import Project from "../Project/Project";
import Socialmedia from "../SocialMedia/Socialmedia";


const Home = () => {
  return (
    <div>
      <HeroPage></HeroPage>
      <OptionTabs></OptionTabs>
      <Project></Project>
      <Socialmedia></Socialmedia>
    </div>
  );
};

export default Home;
