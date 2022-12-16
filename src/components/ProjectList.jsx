import styled from "styled-components";
import { BsGithub } from "react-icons/bs";
import { AiOutlineLink } from "react-icons/ai";

import {
  StyledColorText,
  StyledProjectText,
  StyledText,
} from "./Styles/styles";

const Projects = ({ projects }) => {
  return (
    <>
      {projects.map((project) => {
        return (
          <>
            <StyledProject>
              <a href={project.link} target="_blank" rel="noreferrer">
                <img src={project.image} alt="" />
              </a>
              <div className="flex">
                <StyledProjectText>{project.title}</StyledProjectText>
                <div className="links">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <BsGithub />
                  </a>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <AiOutlineLink />
                  </a>
                </div>
              </div>
              <StyledText margin>{project.text}</StyledText>
              <StyledColorText>{project.tags}</StyledColorText>
            </StyledProject>
          </>
        );
      })}
    </>
  );
};

// Styling

const StyledProject = styled.div`
  margin: 30px 0;
  img {
    width: 100%;
    border-radius: 4px;
    cursor: pointer;
  }
  .flex {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
  .links {
    a {
      margin: 0 10px;
      font-size: 1.4rem;
    }
  }
`;

export default Projects;
