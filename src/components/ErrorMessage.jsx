import { BiErrorCircle } from "react-icons/bi";
import styled from "styled-components";

const ErrorMessage = ({ error }) => {
  return (
    <>
      <StyledError>
        <BiErrorCircle className="icon"/>
        <span>{error}</span>
      </StyledError>
    </>
  );
};

const StyledError = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
// background: #FFEEEE;
padding: 8px;
margin-top: -15px;
margin-bottom: 10px;

.icon{
    margin-right: 8px;
    color: #F7F7F7;
}

span{
    color: #F7F7F7;
    font-weight: 200;
    font-size: 14px;
    margin-top: -1px;
}
`

export default ErrorMessage;
