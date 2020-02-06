import {
    ActionTypes,
    SET_ITEMS,
    ON_DELETE_TODO,
    ADD_TODO,
    CHANGE_TODO_STATE,
} from '../actions/types';

interface InitialState {
    items: { userId: number; id: string; title: string; completed: boolean }[];
}

export const initialState: InitialState = {
    items: [],
};

export const TodosReducer = (
    state = initialState,
    action: ActionTypes,
): InitialState => {
    switch (action.type) {
        case SET_ITEMS:
            return {
                ...state,
                items: action.payload,
            };
        case ON_DELETE_TODO:
            return {
                ...state,
                items: state.items.filter(item => action.id !== item.id),
            };
        case ADD_TODO:
            return {
                ...state,
                items: state.items.concat({
                    userId: action.userId,
                    id: action.id,
                    title: action.text,
                    completed: action.completed,
                }),
            };
        case CHANGE_TODO_STATE:
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.id
                        ? {
                              ...item,
                              completed: true,
                          }
                        : item,
                ),
            };
        default:
            return state;
    }
};

export default TodosReducer;
