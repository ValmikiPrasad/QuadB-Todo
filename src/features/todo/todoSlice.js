import { createSlice, nanoid } from '@reduxjs/toolkit';

// Define initial state
const initialState = {
    todos: []
}

// Create todoSlice
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        // Reducer to add a new todo
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), // Generate unique ID for todo
                text: action.payload // Extract todo text from action payload
            }
            state.todos.push(todo); // Add new todo to state
        },
        // Reducer to remove a todo
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload ); // Filter out todo with specified ID
        },
        // Reducer to set todos from local storage
        setStore: (state, action) => {
            state.todos = action.payload; // Set todos from action payload
        },
        // Reducer to mark a todo as completed or incomplete
        completeTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload); // Find todo with specified ID
            if (todo) {
                todo.completed = !todo.completed; // Toggle the completed status
            }
        }
    }
});

// Export action creators
export const { addTodo, removeTodo, setStore, completeTodo } = todoSlice.actions;

// Export todoReducer
export default todoSlice.reducer;