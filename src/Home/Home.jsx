import React from "react";
import Project from "../Project/Project";
import Footer from "../Footer/Footer";
import Education from './../components/Education';
import Chats from "../components/Chats";
import Banner from "../components/Banner";
import NavBar from "../components/NavBar";
import About from "../components/About";
import Skills from "../components/Skills";
import OthersSkills from "../components/OthersSkills";


const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <OthersSkills></OthersSkills>
      <Project></Project>
      <Education></Education>
      <Chats></Chats>
      <Footer></Footer>
    </div>
  );
};

export default Home;
