import axios from 'axios'
import { CONFIG } from '../../../config'
import {
  Movie,
  SearchType,
} from '@/components/common/Layout/MovieLayout/_fragments/Movie.data'
export { default } from '../../components/elements/MainPage'

export async function getServerSideProps(context: SearchType) {
  const { keyword }: any = context.query
  const result = await axios.get(
    `${CONFIG.API_URL}/movie/popular?api_key=${CONFIG.API_KEY}&language=ko-KR&sort_by=popularity.desc&release_date.gte=2019-01-01&release_date.lte=2019-03-20&page=1&include_adult=false`
  )
  let data = result.data
  if (keyword) {
    data = data.results.filter((val: Movie) => val.title.includes(keyword))
    return {
      props: {
        movies: data,
      },
    }
  }

  return {
    props: {
      movies: data.results,
    },
  }
}
