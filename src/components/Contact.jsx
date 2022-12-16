import React from "react";
import styled from "styled-components";

const Contact = ({ open, close }) => {
    if(!open) return null;
    
  return (
    <>
      <StyledContain onClick={close}>
        <StyledContact>Hello</StyledContact>
      </StyledContain>
    </>
  );
};


//Styling

const StyledContain = styled.div`
  z-index: 20;
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
