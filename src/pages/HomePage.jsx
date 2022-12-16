import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Project from "../components/Project";
import { Styledhr } from "../components/Styles/styles";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero />
      <Experience />
      <Styledhr id="project" />
      <Project />
      <Styledhr />
    </>
  );
};

export default HomePage;
