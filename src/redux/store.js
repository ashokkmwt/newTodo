import taskReducer from "./reducers/taskReducers";
import { configureStore } from "@reduxjs/toolkit";


const store = configureStore(
    {
        reducer:{
            taskReducer:taskReducer
        }
    }
)

export default store;