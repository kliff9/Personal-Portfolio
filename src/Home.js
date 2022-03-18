import React , {useEffect } from "react";
import Layout from "./compoents/Layout";

import AOS from 'aos';
import Contact from "./compoents/ContactForm";
import Services from "./compoents/Services";
import MyProjects from "./compoents/MyProjects";
import Technologies from "./compoents/Technologies";
import AboutMe from "./compoents/AboutMe";
import Intro from "./compoents/Intro";
AOS.init({
  duration:1000
});
function Home() {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <Layout>
      <Intro/>
      <MyProjects/>
      <AboutMe/>
      <Services/>         
      <Technologies/>        
      <Contact/>
    </Layout>
  );
}

export default Home;
