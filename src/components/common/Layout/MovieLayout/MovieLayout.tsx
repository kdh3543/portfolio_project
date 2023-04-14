import Title from './_fragments/Title'
import Content from './_fragments/Content'
import styled from 'styled-components'
import { MoviesProps } from './_fragments/Movie.data'
import { useRouter } from 'next/router'

const Main = styled.div`
  color: red;
  min-height: 600px;
`

function MovieLayout({ movies }: MoviesProps) {
  const router = useRouter()
  return (
    <Main>
      <Title title={router.pathname} />
      <Content movies={movies} />
    </Main>
  )
}

export default MovieLayout
