import React from "react";
import HeroPage from "../components/HeroPage";
import OptionTabs from "../components/OptionTabs";

const Home = () => {
  return (
    <div>
      <div className="">
        <HeroPage></HeroPage>
      </div>
      <div>
        <OptionTabs></OptionTabs>
      </div>
    </div>
  );
};

export default Home;
