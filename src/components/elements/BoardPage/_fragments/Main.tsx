import { useRouter } from "next/router";
import styled from "styled-components";
import { BOARD_HEAD_DATA } from "./Board.data";

export interface SubType {
  width: string;
}

const Container = styled.div`
  min-height: 800px;
  width: 80%;
  margin: auto;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const MainTitle = styled.div`
  color: white;
  width: 100%;
  text-align: center;
  margin-top: 60px;
  font-weight: bold;
  font-size: 30px;
  position: relative;
`;

const RegistButton = styled.button`
  width: 80px;
  padding: 3px;
  background-color: white;
  position: absolute;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  right: 0;
  bottom: 0;
  border: none;
  border-radius: 5px;
`;

const BoardBox = styled.div`
  width: 100%;
  margin: 40px auto;
  background-color: white;
  border-radius: 10px;
  min-height: 500px;
  border: 1px solid white;
  @media screen and (max-width: 1024px) {
    border-radius: 0;
  }
`;

const Header = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 20px;
  display: flex;
  text-align: center;
  font-weight: bold;
  border-bottom: 1px solid black;
`;

const SubTitle = styled.div<SubType>`
  width: ${(props) => props.width};
`;

const ContentBox = styled.div`
  display: flex;
  width: 90%;
  margin: 20px auto;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
  & > * {
    width: 20%;
    padding: 8px;
    // border-bottom: 1px dotted gray;
  }
  &>div: first-child {
    width: 10%;
  }
  &>div: nth-child(2) {
    width: 50%;
  }
  &: hover {
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
`;

const Pagination = styled.div`
  width: 100%;
  height: 50px;
  margin: 30px 0px;
  text-align: center;
`;

function Main() {
  const router = useRouter();
  const BoardArr = Array.from({ length: 20 }, (_, x) => x);

  const toBoardInfor = (id: number) => {
    console.log(id);
    router.push(`/board/detail/${id}`);
  };

  const toRegister = () => {
    router.push("/board/register");
  };
  return (
    <Container>
      <MainTitle>
        {"게시판"}
        <RegistButton onClick={toRegister}>{"등록"}</RegistButton>{" "}
      </MainTitle>
      <BoardBox>
        <Header>
          {BOARD_HEAD_DATA.map((item) => (
            <SubTitle width={item.percent} key={item.id}>
              {item.name}
            </SubTitle>
          ))}
        </Header>
        {BoardArr.map((value, index) => (
          <ContentBox onClick={() => toBoardInfor(index)} key={value}>
            <div>{index + 1}</div>
            <div>{"이건 제목이지"}</div>
            <div>{"이건 ID"}</div>
            <div>{"날짜지 이건"}</div>
          </ContentBox>
        ))}
        <Pagination>1 2 3 </Pagination>
      </BoardBox>
    </Container>
  );
}

export default Main;
