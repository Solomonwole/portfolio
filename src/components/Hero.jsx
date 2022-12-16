import styled from "styled-components";
import { StyledH1 } from "./Styles/styles";
import { CgArrowLongRight } from "react-icons/cg";
import { useState } from "react";
import Contact from "./Contact";


const Hero = () => {
    const [contact, setContact] = useState(false);

    const handleContact = () => {
      setContact(!contact);
    };
  return (<>
    <StyledHero>
      <p>Hey, I'm</p>
      <StyledH1>Solomon Adewole</StyledH1>
      <StyledHeroText>
        I am a Software Engineer with proficiency in frontend web development. I
        have extensive knowledge of HTML, CSS, Javascript, and React. As a
        software engineer, my goal is to support the realization of imaginative
        ideas and prove my dedication to creating top-notch software solutions
        for businesses.
      </StyledHeroText>
      <StyledTextButton onClick={handleContact}>
        Say hi &nbsp; <CgArrowLongRight className="arrowone"/>
      </StyledTextButton>
    </StyledHero>
    <Contact open={contact} close={() => setContact(false)} /></>
  );
};

// Styling

const StyledHero = styled.div`
  padding: 18% 0;
  
  @media screen and (min-width: 701px){
    padding: 10% 0;
  }
`;
const StyledHeroText = styled.p`
  font-size: 14px;
  font-weight: 300;
  line-height: 24px;
  text-align: justify;
  font-style: normal;
 @media screen and (min-width: 760px){
    max-width: 80%;
 }
`;

const StyledTextButton = styled.button`
  font-size: 1.2rem;
  margin-top: 30px;
  cursor: pointer;

  border: 1px solid #54a2f7;
  border-radius: 4px;
  width: 200px;
  height: 49px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover{
    background: linear-gradient(90deg, #54a2f7 15%, #8f50e9); 
  }
  .arrowone{
    background: transparent;
  }
   
`;

export default Hero;
