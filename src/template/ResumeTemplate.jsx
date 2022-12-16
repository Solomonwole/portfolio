import styled from "styled-components";
import { StyledColorText, StyledH3 } from "../components/Styles/styles";

const ResumeTemplate = ({ resumes }) => {
  return (
    <>
      {resumes.map((resume, key) => {
        return (
          <StyledMargin>
            <StyledFlex>
              <StyledH3>{resume.title}</StyledH3>
              <p>{resume.date}</p>
            </StyledFlex>
            <StyledColorText>{resume.company}</StyledColorText>
            <StyledList>
              <li>{resume.desc}</li>
              <li>
                - Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.
              </li>
            </StyledList>
          </StyledMargin>
        );
      })}
    </>
  );
};

// Styling

const StyledMargin = styled.div`
  margin-bottom: 30px;
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
export default ResumeTemplate;
