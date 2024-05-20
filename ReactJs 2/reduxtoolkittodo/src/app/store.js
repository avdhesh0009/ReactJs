import {configureStore} from '@reduxjs/toolkit';
// yeh core redux se aya hai na ki react redux se
import todoReducer from '../features/todo/todoSlice';
export const store=configureStore({
    reducer:todoReducer
})