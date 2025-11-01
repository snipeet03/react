import {configureStore} from '@reduxjs/toolkit';
import  { addTodo , removeTodo } from '../features/todo/todoSlice';
import todoReducer from '../features/todo/todoSlice'


const store = configureStore({
    reducer : todoReducer
});


