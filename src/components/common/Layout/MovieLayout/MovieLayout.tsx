import Title from './_fragments/Title'
import Content from './_fragments/Content'
import styled from 'styled-components'
import { MoviesProps } from './_fragments/Movie.data'
import { useRouter } from 'next/router'

const Main = styled.div`
  color: red;
  min-height: 600px;
`

function MovieLayout(props: MoviesProps) {
  const router = useRouter()
  console.log(props)
  return (
    <Main>
      <Title title={router.pathname} />
      <Content movies={props.movies} searchKeyword={props.searchKeyword} />
    </Main>
  )
}

export default MovieLayout
