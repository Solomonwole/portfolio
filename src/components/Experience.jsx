import styled from "styled-components";
import { StyledH3 } from "./Styles/styles";
import { AiOutlineDownload } from "react-icons/ai";
import ResumeTemplate from "../template/ResumeTemplate";
import resume from "../data/ResumeData";
import { useState } from "react";
import { StyledFooterButton } from "./Footer";
import Resume from '../assets/Solomon_Portfolio.pdf'

const Experience = () => {
  const [resumes] = useState(resume);
  return (
    <div id="resume">
      <StyledExp>
        <StyledH3 margin>Experience</StyledH3>
        <div className="scroll">
          <ResumeTemplate resumes={resumes} />
        </div>
        
       <a href={Resume} download="Resume"> <StyledFooterButton>
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
