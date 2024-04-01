import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import userSliceBusines from "./slicesBusiness/userSliceBusiness";

export const store = configureStore({
    reducer: {
        user: userSlice,
        business: userSliceBusines
    }
})
export default store.dispatch;