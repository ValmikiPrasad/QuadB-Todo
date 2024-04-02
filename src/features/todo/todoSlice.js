import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
        todos: []
}
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
        setStore:(state,action)=>{
            state.todos = action.payload;
        },
        completeTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed; // Toggle the completed status
            }
        }
    }
})  

export const {addTodo, removeTodo,setStore,completeTodo} = todoSlice.actions

export default todoSlice.reducer