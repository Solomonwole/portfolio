import styled from "styled-components";
import { StyledH3 } from "./Styles/styles";
import { FiMail } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import Contact from "./Contact";
import { useState } from "react";

const Footer = () => {
  const [contact, setContact] = useState(false);
  const handleContact = () => {
    setContact(!contact);
  };
  return (
    <>
      <StyledFooter>
        <StyledH3 className="sectiontext">Contact</StyledH3>
        <div className="flex">
          <StyledFooterButton onClick={handleContact}>
            <FiMail className="icon" /> &nbsp; Send a mail
          </StyledFooterButton>

          <a
            href="https://github.com/solomonwole"
            target="_blank"
            rel="noreferrer"
          >
            <StyledFooterButton>
              <BsGithub className="icon" />
              &nbsp; Github
            </StyledFooterButton>
          </a>
         
         
          <a
            href="https://www.linkedin.com/in/solomon-adewole-b63a27246/"
            target="_blank"
            rel="noreferrer"
          >
            <StyledFooterButton>
              <BsLinkedin className="icon" />
              &nbsp; LinkedIn
            </StyledFooterButton>
          </a>
          <a
            href="tel:+2349017356820"
            target="_blank"
            rel="noreferrer"
          >
            <StyledFooterButton>
              <BsTelephone className="icon" />
              &nbsp; Phone
            </StyledFooterButton>
          </a>


        </div>
      </StyledFooter>
      <Contact open={contact} close={()=>setContact(false)}/>
    </>
  );
};
// Styling

const StyledFooter = styled.div`
  margin-top: 30px;
  margin-bottom: 45px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .sectiontext {
    margin-bottom: 20px;
    color: #54a2f7;
    font-weight: 400;
  }
  a {
    text-decoration: none;
  }
  .flex {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
  }

  @media screen and (min-width: 601px) {
    .flex{
        grid-template-columns: 1fr 1fr;
        column-gap: 10px;
    }
  }
  @media screen and (min-width: 903px) {
    .flex{
        grid-template-columns: 1fr 1fr 1fr 1fr;
        column-gap: 10px;
    }
  }
`;

const StyledFooterButton = styled.div`
  cursor: pointer;
  border: 1px solid #54a2f7;
  border-radius: 4px;
  width: 200px;
  height: 49px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #54a2f7;

  &:hover {
    background: linear-gradient(90deg, #54a2f7 15%, #8f50e9);    
  }

  .icon {
    background: transparent;
    color: #54a2f7;
  }
`;

export default Footer;
