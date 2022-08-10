import React from "react";
import AboutPage from "../Components/About";
import Header from "../Universal-Components/Header";

const About = () => {
  return (
    <div>
      <Header title={"Grid About page"} />
      <AboutPage />
    </div>
  );
};

export default About;
