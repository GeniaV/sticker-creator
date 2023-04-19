import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IExcelData, TExcelDataState } from "../../utils/types";

const initialState: TExcelDataState = {
  data: [],
}

const excelDtaSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    uploadData(state, action: PayloadAction<IExcelData[]>) {
      state.data = action.payload;
    },
    removeData(state) {
      state.data = [];
    }
  }
})

export const { uploadData, removeData } = excelDtaSlice.actions;

export default excelDtaSlice.reducer;
