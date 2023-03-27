import { MY_IMAGE } from "@/generated/path/images";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import Drawer from "./_fragments/Drawer";
import { NAV_DATA } from "./_fragments/header.data";

const Navbar = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > * {
    font-weight: bold;
    color: white;
  }
  position: fixed;
  top: 0;
  background-color: black;
  opacity: 85%;
`;

const MenuBox = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-left: 10px;
  pointer: cursor;
`;

const MemberBox = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
  font-size: 13px;
`;

const Logo = styled.p`
  cursor: pointer;
`;

const Menus = styled.button`
  border: none;
  background: none;
  color: white;
  font-weight: bold;
  font-size: 16px;
  font-family: Inter;
  cursor: pointer;
  margin-left: 20px;
`;

const LogoutButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  margin: 0px 20px;
  color: white;
  font-weight: bold;
`;

export default function Header() {
  const [drawerState, setDrawerState] = useState(false);
  const router = useRouter();

  const openDrawer = () => {
    setDrawerState(true);
  };

  const changeState = () => {
    setDrawerState(false);
  };
  return (
    <>
      <>
        <Drawer isOpen={drawerState} changeState={changeState} />
        <Navbar>
          <MenuBox>
            <Logo onClick={() => router.push("/mainpage")}>
              <img src={MY_IMAGE.LOGO} alt="" />
            </Logo>
            {NAV_DATA.map((item) => {
              return (
                <Menus key={item.id} onClick={() => router.push(item.path)}>
                  {item.name}{" "}
                </Menus>
              );
            })}
            <button onClick={openDrawer}>Drawer button</button>
          </MenuBox>
          <MemberBox>
            {"ID님 환영합니다"}
            <LogoutButton onClick={() => router.push("/")}>LOGOUT</LogoutButton>
          </MemberBox>
        </Navbar>
      </>
    </>
  );
}
