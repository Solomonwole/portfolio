import styled from "styled-components";
import { StyledButton, StyledH2 } from "./Styles/styles";
import mail from '../assets/mail.gif'


const EmailSent = ({ close }) => {
    return ( <>
    <StyledSent>
        <img src={mail} alt="mail" />
        <StyledH2>Message successfully sent</StyledH2>
        <p>I will get in touch with you soon.</p>
        <StyledButton onClick={close}>Ok</StyledButton>
    </StyledSent>
    </> );
}

const StyledSent = styled.div`
display: flex;
flex-direction: column;
align-items: center;
img{
    width: 200px;
}
p{
    margin-bottom:20px;
}
`
 
export default EmailSent;