import styled from 'styled-components'

export interface ButtonType {
  disabled: boolean
}

const Flex = styled.div`
  display: flex;
  margin: 10px 0px;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const Button = styled.button`
  font-weight: bold;
  margin: 0px 10px;
  border: none;
  background: none;
  cursor: pointer;
  &: hover {
    transform: scale(1.1);
  }
  &: disabled {
    pointer-events: none;
  }
`

function Pagination({ totalDatas, totalPages, page, setPage }: any) {
  const arr = Array.from({ length: 5 }, (_, i) => i)
  console.log(arr)
  return (
    <Flex>
      <Button disabled>&lt;</Button>
      {arr.map((val, index) => (
        <Button key={index}>{val}</Button>
      ))}
      <Button>&gt;</Button>
    </Flex>
  )
}

export default Pagination
