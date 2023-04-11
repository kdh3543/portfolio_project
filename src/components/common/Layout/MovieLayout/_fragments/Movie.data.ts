interface Movie {
  id: number
  title: string
  overview: string
  poster_path: string
  vote_average: number
  adult?: boolean
  backdrop_path?: string
  genre_ids?: Array<number>
  original_language?: string
  original_title?: string
  release_date?: string
  vote_count?: number
}

interface MovieDetail {
  data: {
    id: number
    title: string
    overview: string
    poster_path: string
  }
}

type MoviesProps = {
  movies: Movie[]
}

export type { MoviesProps, MovieDetail }
