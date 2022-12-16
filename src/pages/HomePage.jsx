import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Project from "../components/Project";
import { Styledhr } from "../components/Styles/styles";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Experience />
      <Styledhr id="project"/>
      <Project />
      <Styledhr />
      
    </>
  );
};

export default HomePage;
