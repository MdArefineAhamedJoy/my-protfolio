import React from "react";
import OptionTabs from "../components/OptionTabs";
import Project from "../Project/Project";
import Socialmedia from "../SocialMedia/Socialmedia";
import Footer from "../Footer/Footer";
import Education from './../components/Education';
import Chats from "../components/Chats";
import Banner from "../components/Banner";
import NavBar from "../components/NavBar";


const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
     <Banner></Banner>
      <OptionTabs></OptionTabs>
      <Project></Project>
      <Education></Education>
      <Chats></Chats>
      <Footer></Footer>
    </div>
  );
};

export default Home;
