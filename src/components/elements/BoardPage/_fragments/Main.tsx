import Pagination from '@/components/common/Pagination/Pagination'
import useGraphQL from '@/components/hooks/useGraphQL'
import {
  removeBoardLocalStorage,
  setBoardLocalStorage,
} from '@/utils/localstorage/localstorage'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { BoardType, BOARD_HEAD_DATA, SubType } from './Board.data'

const Container = styled.div`
  min-height: 800px;
  width: 80%;
  margin: auto;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`

const MainTitle = styled.div`
  color: white;
  width: 100%;
  text-align: center;
  margin-top: 60px;
  font-weight: bold;
  font-size: 30px;
  position: relative;
`

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
`

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
`

const Header = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 20px;
  display: flex;
  text-align: center;
  font-weight: bold;
  border-bottom: 1px solid black;
`

const SubTitle = styled.div<SubType>`
  width: ${(props) => props.width};
`

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
    overflow-x: hidden;
    white-space: nowrap;
  }
  &>div: first-child,&>div: last-child  {
    width: 10%;
    
  }
  &>div: nth-child(2),&>div: nth-child(3) {
    width: 30%;
    
  }
  &: hover {
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
`

function Main({ lists }: any) {
  const [boards, setBoards] = useState<BoardType[]>([])
  const [totalPages, setTotalPages] = useState(0)
  const [totalDatas, setTotalDatas] = useState(0)
  const [page, setPage] = useState(1)
  const limit = 10
  const offSet = (page - 1) * limit
  const router = useRouter()
  const toBoardInfor = (id: string, index: number, views: number) => {
    addViews(id, views + 1)
    removeBoardLocalStorage()
    setBoardLocalStorage(id)
    router.push({
      pathname: `/board/detail/${index}`,
    })
  }

  const toRegister = () => {
    router.push('/board/register')
  }

  useEffect(() => {
    setTotalDatas(lists.length)
    setTotalPages(Math.ceil(lists.length / 10))
    setBoards(lists)
  }, [])

  const addViews = (id: string, views: number) => {
    useGraphQL().updateBoardViews(id, views)
  }

  const changePage = (num: number) => {
    setPage(num)
    router.push(`/board?page=${num}`)
  }

  return (
    <Container>
      <MainTitle>
        {'게시판'}
        <RegistButton onClick={toRegister}>{'등록'}</RegistButton>{' '}
      </MainTitle>
      <BoardBox>
        <Header>
          {BOARD_HEAD_DATA.map((item) => (
            <SubTitle width={item.percent} key={item.id}>
              {item.name}
            </SubTitle>
          ))}
        </Header>
        {boards
          .sort((a, b) => b.index - a.index)
          .slice(offSet, offSet + limit)
          .map((item) => (
            <ContentBox
              onClick={() => toBoardInfor(item.id, item.index, item.views)}
              key={item.id}
            >
              <div>{item.index}</div>
              <div>{item.title}</div>
              <div>{item.userEmail}</div>
              <div>{item.createdAt}</div>
              <div>{item.views}</div>
            </ContentBox>
          ))}
        <Pagination
          changePage={(num: number) => changePage(num)}
          page={page}
          totalDatas={totalDatas}
          totalPages={totalPages}
          width={'100%'}
          display={'flex'}
        />
      </BoardBox>
    </Container>
  )
}

export default Main
