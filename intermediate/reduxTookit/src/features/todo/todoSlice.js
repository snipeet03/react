import { createSlice, nanoid  } from '@reduxjs/toolkit'

const intialState = {
    todos: [
        { id : 1, text : "hello world "}
    ]
}

export const todoSlice = createSlice({
    name : 'todo', 
    intialState, 
    reducers : { 
        addTodo : (state , action ) => { 
            const todo = {
                id : nanoid(), 
                text : action.payload.text
            }
            state.todos.push(todo)
        }, 
        removeTodo: (state , action ) => { state.todos = state.todos.filter((todo) => todo.id !== action.payload)}, 
        
        updateTodo : (state , action ) => {
            const { id , newText } = action.payload
            const todo = state.find( t => t.id === id )
            if(todo){
                todo.text = newText; 
            }
        },  
        
        toogleTodo : (state, action ) => { 
            const id = action.payload; 
            const todo = state.find( t => t.id === id ) 
            if(todo){
                todo.completed != todo.completed
            }
        }
    }
})



export const { addTodo, removeTodo , updateTodo} = todoSlice.actions 
export default todoSlice.reducer


