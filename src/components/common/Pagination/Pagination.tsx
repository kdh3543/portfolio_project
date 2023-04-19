import { useRouter } from 'next/router'
import styled from 'styled-components'

export interface ButtonType {
  active: boolean
  disabled: boolean
  pathname: string
}

const Flex = styled.div`
  display: flex;
  margin: 10px 0px;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const Button = styled.button<ButtonType>`
  font-weight: bold;
  margin: 0px 10px;
  border: none;
  background: none;
  cursor: pointer;
  transform: scale(${(props) => (props.active ? 1.2 : 1.0)});
  color: ${(props) =>
    (props.pathname === '/board' && props.active) ||
    (props.pathname !== '/board' && props.active)
      ? 'blue'
      : props.pathname === '/board' && !props.active
      ? 'black'
      : 'white'};

  &: hover {
    transform: scale(1.1);
  }
  &: disabled {
    pointer-events: none;
    color: gray;
  }
`

function Pagination({ totalDatas, totalPages, page, changePage }: any) {
  const router = useRouter()
  return (
    <Flex>
      <Button
        pathname={router.pathname}
        active={false}
        onClick={() => changePage(page - 1)}
        disabled={page === 1 ? true : false}
      >
        &lt;
      </Button>
      {Array.from({ length: totalPages }, (_, i) => (
        <Button
          pathname={router.pathname}
          disabled={false}
          onClick={() => changePage(i + 1)}
          active={page === i + 1 ? true : false}
          key={i + 1}
        >
          {i + 1}
        </Button>
      ))}
      <Button
        pathname={router.pathname}
        active={false}
        onClick={() => changePage(page + 1)}
        disabled={
          page === totalPages || totalDatas === 0 || !totalDatas ? true : false
        }
      >
        &gt;
      </Button>
    </Flex>
  )
}

export default Pagination
