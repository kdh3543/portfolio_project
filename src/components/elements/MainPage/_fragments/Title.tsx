import styled from "styled-components";

const Header = styled.div`
  color: white;
  width: 100%;
  text-align: center;
  margin-top: 60px;
  font-weight: bold;
  font-size: 30px;
  position: relative;
`;

const SearchBox = styled.div`
  position: absolute;
  color: white;
  right: 20px;
  bottom: 0;
  font-size: 15px;
  line-height: 30px;
`;

const SearchButton = styled.button`
  border: 1px solid white;
  border-radius: 5px;
  background: none;
  color: white;
  cursor: pointer;
  padding: 5px;
  &:active {
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
`;

const Search = styled.input`
  margin-right: 5px;
  height: 25px;
`;
export default function Title() {
  return (
    <Header>
      <p>{"현재 상영작"}</p>
      <SearchBox>
        <Search />
        <SearchButton> {"검색 "}</SearchButton>
      </SearchBox>
    </Header>
  );
}
