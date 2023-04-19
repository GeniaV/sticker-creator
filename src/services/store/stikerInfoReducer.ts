import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TStikerInfo } from "../../utils/types";

const initialState: TStikerInfo = {
  barcode: 111111111111,
  item: '',
  color: '',
  size: 0,
}

const stickerInfoSlice = createSlice({
  name: 'sticker-info',
  initialState,
  reducers: {
    addStikerInfo(state, action: PayloadAction<TStikerInfo>) {
      state.item = action.payload.item;
      state.color = action.payload.color;
      state.size = action.payload.size;
      state.barcode = action.payload.barcode;
    },
    deleteStickerInfo(state) {
      state.item = '';
      state.color = '';
      state.size = 0;
      state.barcode = 111111111111;
    }
  }
})

export const { addStikerInfo, deleteStickerInfo } = stickerInfoSlice.actions;

export default stickerInfoSlice.reducer;
