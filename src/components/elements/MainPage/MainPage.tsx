import { Footer } from '@/components/common/Layout/Footer/Footer'
import Header from '@/components/common/Layout/Header/Header'
import Head from 'next/head'
import MovieLayout from '@/components/common/Layout/MovieLayout/MovieLayout'
import DetailModal from '@/components/common/Modal/DetailModal'
import { MoviesProps } from '@/components/common/Layout/MovieLayout/_fragments/Movie.data'
import { MY_IMAGE } from '@/generated/path/images'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import useCognitoUser from '@/components/hooks/useCognitoUser'

function MainPage({ datas }: MoviesProps) {
  const router = useRouter()
  useEffect(() => {
    const currentUser = useCognitoUser().getCurrentUser()
    if (!currentUser) router.push('/')
  }, [])
  return (
    <>
      {}
      <Head>
        <title>{'M.Z | 현재 상영작'}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={MY_IMAGE.LOGO} />
      </Head>
      <Header />
      <MovieLayout datas={datas} />
      <Footer />
      <DetailModal />
    </>
  )
}

export default MainPage
