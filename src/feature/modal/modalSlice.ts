import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ModalStateType {
  isOpenDetailModal: boolean;
}

const initialState: ModalStateType = {
  isOpenDetailModal: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setIsOpenDetailModal: (state, action: PayloadAction<boolean>) => {
      state.isOpenDetailModal = action.payload;
    },
  },
});

export const { actions: modalSliceAction, reducer: modalSliceReducer } =
  modalSlice;
export default modalSlice;
