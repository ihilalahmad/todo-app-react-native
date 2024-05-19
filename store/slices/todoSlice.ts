import { ITodoType } from '@/constants/Types';
import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'userTodos',
  initialState: [] as ITodoType[],
  reducers: {
    addTodo: (state, action) => {
      const newTodo: ITodoType = {
        id: action.payload.id,
        title: action.payload.title,
        isCompleted: false,
      };
      state.push(newTodo);
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    completeTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) todo.isCompleted = !todo.isCompleted;
    },
  },
});

export const { addTodo, deleteTodo, completeTodo } = todoSlice.actions;
export default todoSlice.reducer;
