import styled from "styled-components";

const Background = styled.div<{ type: "open" | "close" }>`
  width: 100%;
  height: 100%;
  background-color: #00000080;
  position: absolute;
  top: 0;
  visibility: ${({ type }) => (type === "open" ? "visiblity" : "hidden")};
  z-index: 3;
  opacity: ${({ type }) => (type === "open" ? "1" : "0")};
  transition: all 1s linear;
`;

const Container = styled.div<{ type: "open" | "close" }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 60%;
  position: absolute;
  top: ${({ type }) => (type === "open" ? "0" : "-100%")};
  left: 0;
  background-color: red;
  transition: all 1s ease-in-out;
`;

const Button = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  padding: 5px;
  position: absolute;
  cursor: pointer;
  top: 20px;
  right: 20px;
`;

function Drawer({ isOpen, changeState }: any) {
  return (
    <Background type={isOpen ? "open" : "close"}>
      <Container type={isOpen ? "open" : "close"}>
        <Button onClick={changeState}>{"X"}</Button>
      </Container>
    </Background>
  );
}

export default Drawer;
