import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

export const storage = configureStore({
    reducer: todoReducer
})