import { type } from 'os'

const BOARD_HEAD_DATA = [
  {
    id: 1,
    name: 'No.',
    percent: '10%',
  },
  {
    id: 2,
    name: '제목',
    percent: '30%',
  },
  {
    id: 3,
    name: '이메일',
    percent: '30%',
  },
  {
    id: 4,
    name: '날짜',
    percent: '20%',
  },
  {
    id: 5,
    name: '조회수',
    percent: '10%',
  },
]

type BoardType = {
  id: string
  index: number
  title: string
  content: string
  userEmail: string
  views: number
  createdAt: string
  updatedAt: string
}

type BoardArrType = {
  lists: BoardType[]
}

type BoardDetailType = {
  index?: string
  title?: string
  content?: string
  email?: string
  id?: string
}

type BoardUpdateType = {
  id?: string
  title: string
  content: string
}

type SubType = {
  width: string
}

type Visible = {
  visible: string
}

type IndexType = {
  indexNum: number
}

export type {
  BoardType,
  BoardArrType,
  BoardDetailType,
  BoardUpdateType,
  SubType,
  Visible,
  IndexType,
}
export { BOARD_HEAD_DATA }
