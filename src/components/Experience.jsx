import styled from "styled-components";
import { StyledColorText, StyledH3 } from "./Styles/styles";

const Experience = () => {
  return (
    <div id="experience">
      <StyledExp>
        <StyledH3 margin>Experience</StyledH3>
        <StyledFlex>
          <StyledH3>Frontend Engineer (Remote)</StyledH3>
          <p>Oct 2022 - Dec 2022</p>
        </StyledFlex>
        <StyledColorText>HNG9 Internship</StyledColorText>
        <StyledList>
          <li>
            - Amet minim mollit non deserunt ullamco est sit aliqua dolor do
            amet sint.
          </li>
          <li>
            - Amet minim mollit non deserunt ullamco est sit aliqua dolor do
            amet sint.
          </li>
        </StyledList>
      </StyledExp>
    </div>
  );
};

//Styling

const StyledExp = styled.div`
  margin-top: 40px;
`;

const StyledFlex = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 14px;
    color: #c4c4c4;
  }
`;
const StyledList = styled.ul`
  margin-top: 20px;
  li {
    list-style: none;
    color: #c4c4c4;
    font-weight: 300;
    line-height: 24px;
    margin-bottom: 15px;
  }
`;
export default Experience;
