import React from 'react';
import AddTodoForm from '../components/AddTodoForm';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/actions/todos';
import { uuid } from 'uuidv4';

interface Props {}

export const AddTodoContainer = () => {
    const dispatch = useDispatch();

    const submit = (values: Props) => {
        const enteredText = Object.values(values);
        const userId = Number(uuid());
        const id = uuid();
        const completed = false;
        dispatch(addTodo(userId, id, enteredText[0], completed));
    };

    return <AddTodoForm onSubmit={submit} />;
};
