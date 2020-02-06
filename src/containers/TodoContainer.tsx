import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from '../utils/axios';
import { setItems } from '../store/actions/todos';
import { AppState } from '../store/reducers/index';
import TodoList from '../components/TodoList';
import Spinner from '../UI/Spinner';
import { AddTodoContainer } from './PageForm';

const Todo: React.FC = () => {
    const { items } = useSelector((state: AppState) => state.TodosReducer);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchFunc = async () => {
            if (items.length === 0) {
                setLoading(true);
                let res = await axios.get(
                    'https://jsonplaceholder.typicode.com/todos',
                );
                setLoading(false);
                let data = res.data;
                dispatch(setItems(data.slice(0, 10)));
            }
        };
        fetchFunc();
    }, [dispatch, items.length]);

    return (
        <div>
            <AddTodoContainer />
            <TodoList />
            {loading && <Spinner />}
        </div>
    );
};

export default Todo;
