import {
    SET_ITEMS,
    ON_DELETE_TODO,
    ADD_TODO,
    ActionTypes,
    CHANGE_TODO_STATE,
} from './types'
import { TodoModel } from '../../models/todo.model'

export const setItems = (items: TodoModel[]): ActionTypes => {
    return {
        type: SET_ITEMS,
        payload: items,
    }
}

export const onDeleteTodo = (id: string): ActionTypes => {
    return {
        type: ON_DELETE_TODO,
        id,
    }
}

export const addTodo = (
    userId: number,
    id: string,
    text: string,
    completed: boolean
): ActionTypes => {
    return {
        type: ADD_TODO,
        userId,
        id,
        text,
        completed,
    }
}

export const changeTodoState = (id: string): ActionTypes => {
    return {
        type: CHANGE_TODO_STATE,
        id,
    }
}
