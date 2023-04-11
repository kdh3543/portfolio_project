import { MovieDetail } from '@/components/common/Layout/MovieLayout/_fragments/Movie.data'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: MovieDetail = {
  data: {
    id: 0,
    title: '',
    overview: '',
    poster_path: '',
  },
}

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setDetailData: (state, action: PayloadAction<any>) => {
      state.data = action.payload
    },
  },
})

export const { actions: movieSliceAction, reducer: movieSliceReducer } =
  movieSlice

export default movieSlice
