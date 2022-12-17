import React, { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { StyledH2 } from "./Styles/styles";
import { AiOutlineCloseCircle, AiOutlineMail } from "react-icons/ai";
import "./Styles/loading.css";
import ErrorMessage from "./ErrorMessage";
import EmailSent from "./EmailSent";

const EMAIL_REGEX =
  /^(?![_.-])((?![_.-][_.-])[a-zA-Z\d_.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}$/;

const Contact = ({ open, close }) => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [triedToSubmit, setTriedToSubmit] = useState(false);
  const [valid, setValid] = useState(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = open ? "hidden" : "auto";

    EMAIL_REGEX.test(email) ? setValid(true) : setValid(false);
  }, [open, email]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTriedToSubmit(true);
    if (name && email && message !== "") {
      if (valid === true) {
        setLoading(true);

        //emailJs
        try {
          emailjs
            .sendForm(
              "service_61mavmc",
              "template_mi26fy2",
              form.current,
              "L3ClxdQH3xzlQCcMg"
            )
            .then(
              (result) => {
                setLoading(false);
                setSent(true);
                setEmail("");
                setName("");
                setMessage("");
                console.log(result.text);
              },
              (error) => {
                setLoading(false);
                console.log(error.text);
              }
            );
        } catch (error) {
          
        }
        // End emailJs
      } else {
        setLoading(false);
      }
    }
  };

  //   ---------------------

  if (!open) return null;
  return (
    <>
      <StyledContain>
        <StyledContact>
          {!sent ? (
            <>
              <div className="closebtn" onClick={close}>
                <AiOutlineCloseCircle />
              </div>
              <StyledH2>Send A Message</StyledH2>
              <StyledForm ref={form} onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Full name"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  checked
                  required
                />
                {!name && triedToSubmit ? (
                  <ErrorMessage error="Name field required" />
                ) : (
                  ""
                )}
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={email}
                  onChange={handleEmail}
                  required
                />
                {triedToSubmit && !valid ? (
                  <ErrorMessage
                    error={!email ? "Email field required" : "Invalid email"}
                  />
                ) : (
                  ""
                )}
                <textarea
                  placeholder="Enter message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
                {!message && triedToSubmit ? (
                  <ErrorMessage error="Message field required" />
                ) : (
                  ""
                )}
                {!loading ? (
                  <StyledFButton type="submit" onClick={handleSubmit}>
                    Send message &nbsp; <AiOutlineMail className="icon" />
                  </StyledFButton>
                ) : (
                  <StyledFButton>
                    <div className="loader"></div>
                  </StyledFButton>
                )}
              </StyledForm>
            </>
          ) : (
            <EmailSent close={close}/>
          )}
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

export const StyledFButton = styled.div`
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

  .loader {
    font-size: 4px;
  }
`;
export default Contact;
