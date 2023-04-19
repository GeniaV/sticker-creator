import { configureStore } from "@reduxjs/toolkit";
import excelFileReducer from "./excelFileSlice";
import stickerSizeReducer from "./stickerSizrSlice";
import stickerInfoReducer from "./stikerInfoReducer";

const store = configureStore({
  reducer: {
    data: excelFileReducer,
    size: stickerSizeReducer,
    info: stickerInfoReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
