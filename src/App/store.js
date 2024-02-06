import { configureStore } from "@reduxjs/toolkit";
import userAuthSlice from "../feature/user.slice";

export default configureStore({
  reducer: {
    user: userAuthSlice, 
  },
});
