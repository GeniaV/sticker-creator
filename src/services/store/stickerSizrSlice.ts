import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISticker } from "../../utils/types";

const initialState: ISticker = {
  lenght: '',
  height: ''
}

const stickerSizeSlice = createSlice({
  name: 'sticker-size',
  initialState,
  reducers: {
    addStikerSize(state, action: PayloadAction<ISticker>) {
      state.height = action.payload.height;
      state.lenght = action.payload.lenght;
    },
    deleteStickerSize(state) {
      state.height = '';
      state.lenght = '';
    }
  }
})

export const { addStikerSize, deleteStickerSize } = stickerSizeSlice.actions;

export default stickerSizeSlice.reducer;
