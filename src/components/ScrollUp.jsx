import { BsArrowUp } from "react-icons/bs";
import styled from "styled-components";
const ScrollUp = () => {

  const HandleScroll = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <StyledScroll>
        <BsArrowUp className="icon" onClick={HandleScroll} />
      </StyledScroll>
    </>
  );
};

// Styling

const StyledScroll = styled.div`
  background: #6091F4;
  border-radius: 20%;
  padding: 10px;

  position: fixed;
  top: 88%;
  left: 86%;

  .icon {
    background: transparent;
    color: #fff;
    margin: 0;
    padding: 0;
    border-radius: 50%;
    font-size: 25px;
    cursor: pointer;
  }
`;

export default ScrollUp;
