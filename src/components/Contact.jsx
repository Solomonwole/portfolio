import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { StyledH2 } from "./Styles/styles";
import { AiOutlineCloseCircle, AiOutlineMail } from "react-icons/ai";
import "./Styles/loading.css";

const Contact = ({ open, close }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  };

  //   ---------------------

  if (!open) return null;
  return (
    <>
      <StyledContain>
        <StyledContact>
          <div className="closebtn" onClick={close}>
            <AiOutlineCloseCircle />
          </div>
          <StyledH2>Send A Message</StyledH2>
          <StyledForm action="submit" onClick={handleSubmit}>
            <input type="text" placeholder="Full name" required />
            <input type="email" placeholder="Email address" required />
            <textarea placeholder="Enter message" />
            {!loading ? <StyledFButton typeof="submit">
              Send message &nbsp; <AiOutlineMail className="icon" />
            </StyledFButton> : <StyledFButton><div className="loader"></div></StyledFButton> }
          </StyledForm>
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
  width: 90%;

  .closebtn {
    font-size: 24px;
    text-align: end;
    width: 80%;
    margin-bottom: 10px;
    cursor: pointer;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-top: 30px;
  margin-bottom: 20px;

  input {
    margin-bottom: 15px;
    padding: 15px 10px;
    border: 1px solid #54a2f7;
    border-radius: 4px;
    background: rgb(217, 217, 217, 0.1);

    &:focus {
      outline: none;
    }
  }
  textarea {
    margin-bottom: 15px;
    height: 132px;
    padding: 10px;
    border: 1px solid #54a2f7;
    border-radius: 4px;
    background: rgb(217, 217, 217, 0.1);

    &:focus {
      outline: none;
    }
  }
`;

const StyledFButton = styled.div`
  cursor: pointer;
  border: 1px solid #54a2f7;
  background: linear-gradient(90deg, #54a2f7 15%, #8f50e9);
  border-radius: 4px;
  width: 100%;
  height: 49px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  &:hover {
    background: linear-gradient(90deg, #54a2f7 15%, #8f50e9);
  }

  .icon {
    background: transparent;
    color: #fff;
  }

  .loader{
    font-size: 4px;
  }
`;
export default Contact;
