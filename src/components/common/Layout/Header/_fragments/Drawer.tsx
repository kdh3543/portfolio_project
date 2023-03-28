import { MY_IMAGE } from "@/generated/path/images";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { NAV_DATA } from "./header.data";

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
  height: 100%;
  position: absolute;
  top: ${({ type }) => (type === "open" ? "0" : "-100%")};
  left: 0;
  transition: all 1s ease-in-out;
  background-color: #00000080;
  & > * {
    width: 100%;
    text-align: center;
  }
`;

const Button = styled.img`
  background: none;
  border: none;
  width: 40px;
  padding: 5px;
  position: absolute;
  cursor: pointer;
  top: 20px;
  right: 20px;
`;

const Logo = styled.div`
  margin-top: 20px;
`;

const MenuBox = styled.div`
  margin-top: 100px;
  color: white;
`;

const Menus = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-top: 80px;
  cursor: pointer;
  &:hover {
    transform: scale(0.95);
  }
`;

function Drawer({ isOpen, changeState }: any) {
  const [minImg, setMinImg] = useState(false);
  const router = useRouter();
  const isWindow = typeof window === "object";
  useEffect(() => {
    if (!isWindow) return;
    if (window.innerWidth < 400) {
      setMinImg(true);
    } else {
      setMinImg(false);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 400) {
        setMinImg(true);
      } else {
        setMinImg(false);
      }
    });
  }, []);
  return (
    <Background type={isOpen ? "open" : "close"}>
      <Container type={isOpen ? "open" : "close"}>
        <Button src={MY_IMAGE.CLOSE_WHITE} onClick={changeState} />
        <Logo>
          <img src={minImg ? MY_IMAGE.LOGO : MY_IMAGE.LOGO_FULL_NAME} alt="" />
        </Logo>
        <MenuBox>
          {NAV_DATA.map((item) => (
            <Menus onClick={() => router.push(item.path)} key={item.id}>
              {item.name}
            </Menus>
          ))}
        </MenuBox>
      </Container>
    </Background>
  );
}

export default Drawer;
