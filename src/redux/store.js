import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counter/counterSlice";
// import loggerMiddleware from "redux-logger"
import logger from "./middleware/Logger";

export const store = configureStore({
    reducer: {
        counter: counterSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)    
})