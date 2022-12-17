import styled from "styled-components";

// Text Styling

export const StyledLogo = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  cursor: pointer;
  background: linear-gradient(180deg, #924dea 0%, #34d1ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export const StyledH1 = styled.h1`
  font-family: "Lato", sans-serif;
  font-size: 4rem;
  line-height: 80px;
  margin: 20px 0;

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

  -webkit-animation: tracking-in-expand-fwd 0.8s ease-out both;
  animation: tracking-in-expand-fwd 0.8s ease-out both;

  @-webkit-keyframes tracking-in-expand-fwd {
    0% {
      letter-spacing: -0.5em;
      -webkit-transform: translateZ(-700px);
      transform: translateZ(-700px);
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      opacity: 1;
    }
  }
  @keyframes tracking-in-expand-fwd {
    0% {
      letter-spacing: -0.5em;
      -webkit-transform: translateZ(-700px);
      transform: translateZ(-700px);
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      opacity: 1;
    }
  }
`;

export const StyledH2 = styled.h2``;

export const StyledH3 = styled.h3`
  font-weight: 300;
  font-size: 18px;
  line-height: 22px;
  text-transform: ${(props) => (props.upper ? "uppercase" : "")};
  text-align: start;
  margin: ${(props) => (props.margin ? "30px 0" : "")};

  @media screen and (min-width: 768px) {
    text-align: start;
  }
`;

export const StyledProjectText = styled.p`
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
`;

export const StyledColorText = styled.p`
  font-size: 14px;
  font-weight: 300;
  line-height: 24px;
  color: #6cace4;
`;

export const StyledText = styled.p`
  font-size: 14px;
  font-weight: 300;
  margin: ${(props)=> props.margin ? '10px 0' : ''}
`;

export const StyledTextSmall = styled.p``;

// Button Styling

export const StyledButton = styled.button`
border: 1px solid #54a2f7;
border-radius: 4px;
padding: 10px 30px;
&:hover{
    background: linear-gradient(90deg, #54a2f7 15%, #8f50e9);
}
`;


// Hr Styling
export const Styledhr = styled.hr`
  border: 0.6px solid rgba(198, 198, 198, 1);
  margin: 80px 0;
`;
