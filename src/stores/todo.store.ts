import { create } from 'zustand'
import { mountStoreDevtool } from 'simple-zustand-devtools';

export type Todo = {
  id: number | string;
  content: string;
};

export type TodoState = {
  todoList: Todo[];
};

export type TodoActions = {
  addTodo: (todo:Todo) => void;
  removeAllTodo: () => void;
  initialize: () => Promise<void>;
};

export const useTodoStore = create<TodoState & TodoActions>((set) => ({
  todoList: [],
  addTodo: (todo:Todo) => set((state) => ({ todoList: [...state.todoList, todo ]})),
  removeAllTodo: () => set({ todoList: []}),
  initialize: async () => {
    set({todoList: [{
      id: 1,
      content: 'todo 1'
    }]})
  }
}))



if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('todoStore', useTodoStore);
}