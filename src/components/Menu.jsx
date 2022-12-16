import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { StyledLogo } from "./Styles/styles";
import { AiOutlineClose } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { HashLink } from "react-router-hash-link";


const MobileMenu = ({ menu, closeMenu }) => {
    const [contact, setContact] = useState(false);

  const handleContact = () => {
    setContact(!contact);
  };
  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = menu ? "hidden" : "auto";
  }, [menu]);

  if (!menu) return null;

  return (
    <>
      <StyledOverlay>
        <StyledMenuDrawer>
          <StyledHeading>
            <Link to="/">
              {" "}
              <StyledLogo>SW.</StyledLogo>
            </Link>
            <AiOutlineClose className="icon" onClick={closeMenu} />
          </StyledHeading>
          <StyledMenuList>
          <ul>
            <li>
              <HashLink to="/#project">Projects</HashLink>
            </li>
            <li>
              <HashLink to="/#resume">Resume</HashLink>
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
          </StyledMenuList>
        </StyledMenuDrawer>
      </StyledOverlay>
    </>
  );
};

// Styling

const StyledOverlay = styled.div`
  z-index: 10;
  position: fixed;
  width: 100%;
  height: 100vh;
  background: rgba(49, 49, 49, 0.8);
  top: 0;
  left: 0;
  overflow: hidden;
`;
const StyledMenuDrawer = styled.div`
  background: #111111;
  width: 75%;
  height: 100vh;
  padding: 20px;
  z-index: 50;
`;
const StyledHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .icon {
    font-size: 24px;
  }
`;
const StyledMenuList = styled.div`
width: 100%;
margin: 30px auto;
text-align: center;


}
ul {
    list-style: none;

    li{
        margin: 20px 0;
        padding: 10px;
        &:hover{
            background: #fff;
            color: #000;
        }
        a{
            background: transparent;
            color: #fff;
            &:hover{
                color: #000;
            }
    }

}
`
export default MobileMenu;
