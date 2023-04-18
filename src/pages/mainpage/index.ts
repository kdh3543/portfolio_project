import axios from 'axios'
import { CONFIG } from '../../../config'
import {
  Movie,
  SearchType,
} from '@/components/common/Layout/MovieLayout/_fragments/Movie.data'
export { default } from '../../components/elements/MainPage'

export async function getServerSideProps(context: SearchType) {
  const { keyword }: any = context.query
  console.log('들어옴??')
  console.log(keyword)
  const date = new Date()
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const monthAgo = new Date(date.setDate(date.getMonth() - 1))
  const agoYear = monthAgo.getFullYear()
  const agoMonth = String(monthAgo.getMonth() + 1).padStart(2, '0') // 20일 전 월 가져오기 (0부터 시작하므로 +1 필요), 자리수 맞추기 위해 padStart() 메서드 사용
  const agoDay = String(monthAgo.getDate()).padStart(2, '0')
  const today = `${year}-${month}-${day}`
  const lastDay = `${agoYear}-${agoMonth}-${agoDay}`
  const result = await axios.get(
    `${CONFIG.API_URL}/movie/popular?api_key=${
      CONFIG.API_KEY
    }&language=ko-KR&sort_by=popularity.desc&release_date.gte=${lastDay}&page=${1}&release_date.lte=${today}&include_adult=false`
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
