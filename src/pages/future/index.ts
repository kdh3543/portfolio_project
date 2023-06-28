import axios from 'axios'
import { CONFIG } from '../../../config'
import {
  Movie,
  PropsType,
} from '@/components/common/Layout/MovieLayout/_fragments/Movie.data'
export { default } from '../../components/elements/FuturePage'

export async function getServerSideProps(context: PropsType) {
  const { keyword, currPage }: any = context.query
  const result = await axios.get(
    // `${CONFIG.API_URL}/movie/popular?api_key=${CONFIG.API_KEY}&language=ko-KR&sort_by=popularity.desc&release_date.gte=2019-01-01&release_date.lte=2019-03-20&page=${currPage}&include_adult=false`
    `${CONFIG.API_URL}/movie/upcoming?api_key=${CONFIG.API_KEY}&language=ko-KR&page=${currPage}&include_adult=false`
  )
  let data = result.data
  let datas = {
    movies: data.results,
    currPage,
  }
  if (keyword) {
    data = data.results.filter((val: Movie) => val.title.includes(keyword))
    datas.movies = data
    return {
      props: {
        datas,
      },
    }
  }

  return {
    props: {
      datas,
    },
  }
}
