import styled from "styled-components";
import { StyledH3 } from "./Styles/styles";
import { AiOutlineDownload } from "react-icons/ai";
import ResumeTemplate from "../template/ResumeTemplate";
import resume from "../data/ResumeData";
import { useState } from "react";
import { StyledFooterButton } from "./Footer";

const Experience = () => {
  const [resumes] = useState(resume);
  return (
    <div id="resume">
      <StyledExp>
        <StyledH3 margin>Experience</StyledH3>
        <div className="scroll">
          <ResumeTemplate resumes={resumes} />
        </div>
        
       <a href="/public/Solomon_Portfolio.pdf" download="Solomon_Portfolio.pdf"> <StyledFooterButton>
            Donwload Resume &nbsp; <AiOutlineDownload className="icon"/>
        </StyledFooterButton></a>
      </StyledExp>
    </div>
  );
};

//Styling
const StyledExp = styled.div`
  margin-top: 40px;

  
`;

export default Experience;
