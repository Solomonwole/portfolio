import styled from "styled-components";
import { StyledH1 } from "./Styles/styles";
import { CgArrowLongRight } from "react-icons/cg";
const Hero = () => {
  const handleContact = () => {};
  return (
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
        Say hi <CgArrowLongRight className="arrowone"/>
      </StyledTextButton>
    </StyledHero>
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
  border: none;
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80px;
  margin-top: 30px;
  cursor: pointer;

  &:hover{
    background: linear-gradient(
        89.81deg,
        #9845e8 -1.72%,
        #33d2ff 50.08%,
        #dd5789 99.78%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
  }
  
   
`;

export default Hero;
