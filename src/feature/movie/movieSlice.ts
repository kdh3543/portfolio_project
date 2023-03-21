import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface MovieDetail {
  data: {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
  };
}

const initialState: MovieDetail = {
  data: {
    id: 0,
    title: "",
    overview: "",
    poster_path: "",
  },
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setDetailData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
  },
});

export const { actions: movieSliceAction, reducer: movieSliceReducer } =
  movieSlice;

export default movieSlice;
