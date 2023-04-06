import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { API } from "aws-amplify";
import useGraphQL from "@/components/hooks/useGraphQL/useGraphQL";
import useCognitoUser from "@/components/hooks/useCognitoUser";
import { useRecoilState } from "recoil";
import { getLocalStorage } from "@/utils/localstorage/localstorage";

export interface TextType {
  disable: boolean;
}

const Container = styled.div`
  min-height: 800px;
  width: 100%;
`;

const Box = styled.div`
  width: 60%;
  height: 600px;
  margin: auto;
  margin-top: 40px;
  & > * {
    color: white;
  }
  @media screen and (max-width: 1024px) {
    width: 90%;
  }
`;

const Header = styled.div`
  margin-top: 60px;
  color: white;
  width: 100%;
  font-weight: bold;
  text-align: center;
  font-size: 30px;
`;

const Title = styled.div`
  display: flex;
  font-weight: bold;
  align-items: center;
`;
const TitleBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  & > div:first-child {
    width: 20%;
    text-align: center;
    margin-right: 20px;
    font-size: 20px;
  }
  & > input {
    width: 80%;
    border-radius: 10px;
    height: 30px;
    padding-left: 10px;
    background-color: white;
    color: gray;
  }
`;

const Content = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  & > textarea {
    width: 100%;
    height: 400px;
    border-radius: 10px;
    padding: 10px;
    resize: none;
    background-color: white;
    color: gray;
  }
`;

const ButtonBox = styled.div`
  margin-top: 20px;
  justify-content: center;
  display: flex;
  width: 100%;
  & > button {
    margin: 10px;
    padding: 5px 50px;
    font-weight: bold;
    cursor: pointer;
    font-size: 15px;
    color: white;
    background-color: red;
    border: none;
    border-radius: 5px;
  }
`;

const Error = styled.div`
  width: 100%;
  color: red;
  font-size: 15px;
`;

export interface IndexType {
  indexNum: number;
}

function Main({ indexNum }: IndexType) {
  const [registerData, setRegisterData] = useState({
    title: "",
    content: "",
    views: 0,
    index: 0,
    userEmail: "",
  });
  const [errorState, setErrorState] = useState(false);
  const [email, setEmail] = useState<any>(null);
  const router = useRouter();
  const goBoard = () => {
    router.back();
  };

  const inputData = (e: any) => {
    const { value, name } = e.target;

    setRegisterData((prev) => ({
      ...prev,
      [name]: value,
      index: indexNum,
      userEmail: email,
    }));
  };

  const register = () => {
    if (!registerData.title || !registerData.content) {
      setErrorState(true);
      return;
    }
    setErrorState(false);
    useGraphQL().postBoard(registerData);
    router.push("/board");
  };

  useEffect(() => {
    setEmail(getLocalStorage());
  }, [getLocalStorage()]);
  return (
    <>
      <Container>
        <Header>{"게시판 작성"}</Header>
        <Box>
          <Title>
            <TitleBox>
              <div>{"제목"}</div>
              <input
                onChange={(e) => inputData(e)}
                type={"text"}
                name="title"
                placeholder={"제목을 입력해주세요"}
              />
            </TitleBox>
          </Title>
          <Content>
            <textarea
              onChange={(e) => inputData(e)}
              placeholder={"내용을 입력해주세요"}
              name="content"
            />
          </Content>
          {errorState && <Error>{"제목과 내용 둘 다 입력해주세요."}</Error>}
          <ButtonBox>
            <button onClick={register}>{"등록"}</button>
            <button onClick={goBoard}>{"이전"}</button>
          </ButtonBox>
        </Box>
      </Container>
    </>
  );
}

export default Main;
