import axios from 'axios'
import { CONFIG } from '../../../config'
import {
  Movie,
  PropsType,
} from '@/components/common/Layout/MovieLayout/_fragments/Movie.data'
export { default } from '../../components/elements/MainPage'

export async function getServerSideProps(context: PropsType) {
  const { keyword, currPage }: any = context.query

  // const date = new Date()

  // const today = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
  //   2,
  //   '0'
  // )}-${String(date.getDate()).padStart(2, '0')}`
  // const monthAgo = new Date(date.setMonth(date.getMonth() - 1))
  // // 20일 전 월 가져오기 (0부터 시작하므로 +1 필요), 자리수 맞추기 위해 padStart() 메서드 사용
  // const lastDay = `${monthAgo.getFullYear()}-${String(
  //   monthAgo.getMonth() + 1
  // ).padStart(2, '0')}-${String(monthAgo.getDate()).padStart(2, '0')}`
  const result = await axios.get(
    // `${CONFIG.API_URL}/movie/popular?api_key=${CONFIG.API_KEY}&language=ko-KR&sort_by=release_date.lte&release_date.gte=${lastDay}&page=${currPage}&release_date.lte=${today}&include_adult=false`
    `${CONFIG.API_URL}/movie/now_playing?api_key=${CONFIG.API_KEY}&language=ko-KR&include_adult=false&page=${currPage}`
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
