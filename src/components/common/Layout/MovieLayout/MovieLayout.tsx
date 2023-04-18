import Title from './_fragments/Title'
import Content from './_fragments/Content'
import styled from 'styled-components'
import { MoviesProps } from './_fragments/Movie.data'
import { useRouter } from 'next/router'

const Main = styled.div`
  color: red;
  min-height: 600px;
`

function MovieLayout({ datas }: any) {
  const router = useRouter()
  console.log('여기야!!!', datas)
  return (
    <Main>
      <Title title={router.pathname} />
      <Content datas={datas} />
    </Main>
  )
}

export default MovieLayout
