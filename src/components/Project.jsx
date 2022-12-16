import Projects from "./ProjectList";
import { StyledH3 } from "./Styles/styles";
import styled from "styled-components";
import data from "../data/data";
import { useState } from "react";

const Project = () => {
  const [projects] = useState(data);
  return (
    <>
      <StyledH3>Recent Projects</StyledH3>
      <StyledGrid>
        <Projects projects={projects} />
      </StyledGrid>
    </>
  );
};

// STyling

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: 765px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
  }
`;

export default Project;
