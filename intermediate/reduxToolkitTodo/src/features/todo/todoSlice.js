import { createSlice, nanoid } from "@reduxjs/toolkit";

initialState = {
    todos: [
        {
            id : 1, 
            text : "Go to Gym ",
        }, 
    ], 
}


export const todoSlice = createSlice({
    name  :"todo", 
    initialState, 
    reducers : {
        addTodo : (state, action ) => {
            const todo = { id : nanoid(), text : action.payload } 
            state.todos.push(todo); 
        }, 
        removeTodo : (state, actiom ) => {
            state.todos = state.todos.filter( todo => todo.id !== action.payload )
        }, 
        
    }
})