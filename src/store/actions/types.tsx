import { TodoModel } from '../../models/todo.model';

export const SET_ITEMS = 'SET_ITEMS';
export const ON_DELETE_TODO = 'ON_DELETE_TODO';
export const ADD_TODO = 'ADD_TODO';
export const CHANGE_TODO_STATE = 'CHANGE_TODO_STATE';

interface SetItems {
    type: typeof SET_ITEMS;
    payload: TodoModel[];
}

interface OnDeleteTodo {
    type: typeof ON_DELETE_TODO;
    id: string;
}

interface AddTodo {
    type: typeof ADD_TODO;
    userId: number;
    id: string;
    text: string;
    completed: boolean;
}

interface changeTodoState {
    type: typeof CHANGE_TODO_STATE;
    id: string;
}

export type ActionTypes = SetItems | OnDeleteTodo | AddTodo | changeTodoState;
