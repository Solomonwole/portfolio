import React, { useEffect } from "react";
import styled from "styled-components";
import { StyledH2 } from "./Styles/styles";

const Contact = ({ open, close }) => {
  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  if (!open) return null;

  return (
    <>
      <StyledContain onClick={close}>
        <StyledContact>
          <StyledH2>Send A Message</StyledH2>
        </StyledContact>
      </StyledContain>
    </>
  );
};

//Styling

const StyledContain = styled.div`
  z-index: 10;
  position: fixed;
  width: 100%;
  height: 100vh;
  background: rgba(49, 49, 49, 0.8);
  top: 0;
  left: 0;
  overflow: hidden;
`;
const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 0;

  z-index: 50;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #111111;
  border-radius: 8px;
  max-width: 600px;
  min-width: 300px;
  width: 80%;

  img {
    width: 30%;
    margin-bottom: 15px;
  }
  p {
    margin-top: 15px;
    margin-bottom: -3px;
  }
`;
export default Contact;
