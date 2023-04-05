import useGraphQL from "@/components/hooks/useGraphQL";
import {
  getBoardLocalStorage,
  getLocalStorage,
} from "@/utils/localstorage/localstorage";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";
import { BoardUpdateType } from "../../_fragments/Board.data";

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
const IdBox = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  color: white;

  & > * {
    width: 50%;
  }
  & > div:nth-child(2) {
    font-size: 20px;
    text-align: center;
  }
`;
const TitleBox = styled.div`
  width: 80%;
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
  & > button:disabled {
    cursor: not-allowed;
  }
  & > button:disabled:active {
    transform: scale(1);
  }
`;

function Main({ detail }: any) {
  console.log(detail);
  const [detailData, setDetailData] = useState<BoardUpdateType>({
    id: getBoardLocalStorage() || "",
    title: detail.title,
    content: detail.content,
  });
  const router = useRouter();
  const goBoard = () => {
    router.back();
  };

  const changeData = (e: any) => {
    const { value, name } = e.target;
    setDetailData((prev) => ({ ...prev, [name]: value }));
  };

  const updateBoard = () => {
    useGraphQL()
      .updateBoardDetail(detailData)
      .then((res) => {
        console.log(res);
      });
    router.back();
  };

  console.log(detailData);
  return (
    <>
      <Container>
        <Header>{"게시판 상세 내용"}</Header>
        <Box>
          <Title>
            <IdBox>
              <div>{"게시판 ID"}</div>
              <div>{detail.detailId}</div>
            </IdBox>
            <TitleBox>
              <div>{"제목"}</div>
              <input
                disabled={getLocalStorage() === detail.email ? false : true}
                type={"text"}
                name="title"
                onChange={(e) => changeData(e)}
                placeholder={"제목을 입력하세요"}
                defaultValue={detail.title}
              />
            </TitleBox>
          </Title>
          <Content>
            <textarea
              disabled={getLocalStorage() === detail.email ? false : true}
              placeholder={"내용을 입력하세요"}
              onChange={(e) => changeData(e)}
              defaultValue={detail.content}
              name="content"
            />
          </Content>
          <ButtonBox>
            <button
              disabled={getLocalStorage() === detail.email ? false : true}
              onClick={updateBoard}
            >
              {"수정"}
            </button>
            <button onClick={goBoard}>{"이전"}</button>
          </ButtonBox>
        </Box>
      </Container>
    </>
  );
}

export default Main;
