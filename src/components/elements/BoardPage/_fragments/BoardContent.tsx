import styled from "styled-components";
import { BOARD_HEAD_DATA, BOARD_MAIN_DATA } from "./Board.data";

export interface SubType {
  width: string;
}

const Container = styled.div`
  min-height: 800px;
  width: 100%;
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

const BoardBox = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 20px;
  min-height: 500px;
  border: 1px solid white;
`;

const Header = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 20px;
  display: flex;
  text-align: center;
  font-weight: bold;
`;

const SubTitle = styled.div<SubType>`
  width: ${(props) => props.width};
  color: white;
`;

const ContentBox = styled.div`
  display: flex;
`;

const Content = styled.div<SubType>`
  width: ${(props) => props.width};
  color: white;
  background-color: green;
  margin-top: 10px;
`;

function BoardContent() {
  return (
    <Container>
      <MainTitle>{"게시판"}</MainTitle>
      <BoardBox>
        <Header>
          {BOARD_HEAD_DATA.map((item) => (
            <SubTitle width={item.percent} key={item.id}>
              {item.name}
            </SubTitle>
          ))}
        </Header>
        {BOARD_MAIN_DATA.map((item) => (
          <ContentBox key={item.id}>
            <Content width={item.percent}>{item.name}</Content>
          </ContentBox>
        ))}
      </BoardBox>
    </Container>
  );
}

export default BoardContent;
