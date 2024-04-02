import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

// Configure Redux store

export const storage = configureStore({
    reducer: todoReducer
})