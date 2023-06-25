import React from "react";
import HeroPage from "../components/HeroPage";
import OptionTabs from "../components/OptionTabs";
import Project from "../components/Project";

const Home = () => {
  return (
    <div>
      <HeroPage></HeroPage>
      <OptionTabs></OptionTabs>
      <Project></Project>
    </div>
  );
};

export default Home;
