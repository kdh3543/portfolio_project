import { Footer } from '@/components/common/Layout/Footer/Footer'
import Header from '@/components/common/Layout/Header/Header'
import useGraphQL from '@/components/hooks/useGraphQL'
import { MY_IMAGE } from '@/generated/path/images'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { BoardType } from '../_fragments/Board.data'
import Main from './_fragments/Main'

function BoardRegister() {
  const [indexNum, setIndexNum] = useState(0)
  const setViewNum = async () => {
    const lists: BoardType[] = await useGraphQL().getBoardList()
    let arr: any = []
    lists?.map((val) => arr.push(val.index))
    setIndexNum(lists?.length === 0 ? 1 : Math.max(...arr) + 1)
  }
  useEffect(() => {
    setViewNum()
  }, [])

  return (
    <>
      <Head>
        <title>{'M.Z | 게시판'}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={MY_IMAGE.LOGO} />
      </Head>
      <Header />
      <Main indexNum={indexNum} />
      <Footer />
    </>
  )
}

export default BoardRegister
