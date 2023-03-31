import { userEmailValue } from "@/feature/state";
import { MY_IMAGE } from "@/generated/path/images";
import userPool from "@/components/hooks/usePool";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import Drawer from "./_fragments/Drawer";
import { NAV_DATA } from "./_fragments/header.data";
import Image from "next/image";
import {
  getLocalStorage,
  removeLocalStorage,
} from "@/utils/localstorage/localstorage";

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
  z-index: 3;
`;

const MenuBox = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-left: 10px;
  cursor: pointer;
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

const DrawerDiv = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-left: 10px;
  width: 60px;
  > img {
    width: 60%;
    cursor: pointer;
  }
  >img: active {
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
`;

export default function Header() {
  const [drawerState, setDrawerState] = useState(false);
  const [minSize, setMinSize] = useState(false);
  const [email, setEmail] = useState<any>(null);
  const router = useRouter();

  const openDrawer = () => {
    setDrawerState(true);
  };

  const changeState = () => {
    setDrawerState(false);
  };

  const logout = () => {
    const currentUser = userPool.getCurrentUser();
    removeLocalStorage();
    currentUser?.signOut();
    router.push("/");
  };

  useEffect(() => {
    if (window.innerWidth < 768) {
      setMinSize(true);
    } else {
      setMinSize(false);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        setMinSize(true);
      } else {
        setMinSize(false);
      }
    });
  }, []);
  useEffect(() => {
    setEmail(getLocalStorage());
  }, [getLocalStorage()]);
  return (
    <>
      <>
        <Drawer isOpen={drawerState} changeState={changeState} />
        <Navbar>
          {minSize ? (
            <DrawerDiv>
              <img onClick={openDrawer} src={MY_IMAGE.DRAWER} alt="" />
            </DrawerDiv>
          ) : (
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
            </MenuBox>
          )}

          <MemberBox>
            {email}
            <LogoutButton onClick={logout}>LOGOUT</LogoutButton>
          </MemberBox>
        </Navbar>
      </>
    </>
  );
}
