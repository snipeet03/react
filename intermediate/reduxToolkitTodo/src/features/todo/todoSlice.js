import { createSlice, nanoid } from "@reduxjs/toolkit";

// ✅ Always use const when defining your initialState
const initialState = {
  todos: [
    {
      id: 1,
      text: "Go to Gym",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // ✅ Add Todo
    addTodo: (state, action) => {
      const todo = { id: nanoid(), text: action.payload };
      state.todos.push(todo);
    },

    // ✅ Remove Todo (fixed typo)
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
  },
});

// ✅ Export actions & reducer
export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
