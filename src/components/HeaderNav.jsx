import styled from "styled-components";
import { StyledLogo } from "./Styles/styles";
import { FiMenu } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import Contact from "./Contact";

const HeaderNav = () => {
  const [menu, setMenu] = useState(false);
  const [contact, setContact] = useState(false);

  const handleContact = () => {
    setContact(!contact);
  };
  const handleMenu = () => {
    setMenu(true);
  };

  
  return (
    <>
      <StyledFlex>
       <Link to='/'> <StyledLogo>SW.</StyledLogo></Link>
        <StyledMobile>
          <FiMenu onClick={handleMenu} />
        </StyledMobile>
        <StyledDesktop>
          <ul>
            <li>
              <HashLink to="/#project">Projects</HashLink>
            </li>
            <li>
              <HashLink to="/#experience">Resume</HashLink>
            </li>
            <li onClick={handleContact} className='contact'>Contact</li>
            <li>
              <a
                href="https://github.com/solomonwole"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub className="git" />
              </a>
            </li>
          </ul>
        </StyledDesktop>
      </StyledFlex>
      {menu}
      <Contact open={contact} close={() => setContact(false)} />
    </>
  );
};

//Styling

const StyledFlex = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 20px 0;
  background: #111111;
`;
const StyledMobile = styled.div`
  font-size: 1.7rem;
  cursor: pointer;

  @media screen and (min-width: 641px) {
    display: none;
  }
`;
const StyledDesktop = styled.div`
  display: none;
  .contact{
    cursor: pointer;
  }

  @media screen and (min-width: 641px){
    display: block;
    ul{
        display: flex;
        align-items: center;
        li{
            list-style: none;
            margin: 0 15px;
            font-weight: 300;
        }
        a{
            text-decoration: none;
        }
        .git{
            font-size: 1.5rem;
        }
  }
`;

export default HeaderNav;
