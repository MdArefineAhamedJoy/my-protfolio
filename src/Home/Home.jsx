import React from "react";
import HeroPage from "../components/HeroPage";
import OptionTabs from "../components/OptionTabs";
import Project from "../Project/Project";
import Socialmedia from "../SocialMedia/Socialmedia";
import Footer from "../Footer/Footer";


const Home = () => {
  return (
    <div>
      <HeroPage></HeroPage>
      <OptionTabs></OptionTabs>
      <Project></Project>
      <Socialmedia></Socialmedia>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Home;
