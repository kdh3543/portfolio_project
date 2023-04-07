import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  margin: 10px 0px;
  width: 100%;
`;

const Button = styled.button`
  font-weight: bold;
  margin: 0px 10px;
`;

function Pagination({ data }: any) {
  return (
    <Flex>
      <Button>{"1 2 3"}</Button>
    </Flex>
  );
}

export default Pagination;
