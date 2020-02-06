import { combineReducers } from 'redux';
import TodosReducer from './TodosReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    TodosReducer,
    form: formReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
