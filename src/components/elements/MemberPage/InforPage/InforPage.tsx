import { Footer } from '@/components/common/Layout/Footer/Footer'
import Header from '@/components/common/Layout/Header/Header'
import { MY_IMAGE } from '@/generated/path/images'
import Head from 'next/head'
import styled from 'styled-components'

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

const MainBox = styled.div`
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

export default function InforPage() {
  return (
    <>
      <Head>
        <title>{'M.Z | 회원정보'}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={MY_IMAGE.LOGO} />
      </Head>
      <Header />
      <Container>
        <MainTitle>{'회원정보'}</MainTitle>
        <MainBox></MainBox>
      </Container>
      <Footer />
    </>
  )
}
