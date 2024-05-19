import { RootState } from '../store';

export const useUserTodos = (state: RootState) => state.todosReducer;
