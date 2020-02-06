import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../store/reducers/index';
import { onDeleteTodo, changeTodoState } from '../store/actions/todos';
import styled from 'styled-components';

const TodoList: React.FC = props => {
    const { items } = useSelector((state: AppState) => state.TodosReducer);

    const dispatch = useDispatch();

    return (
        <List>
            {items
                ? items.map(({ id, title, completed }) =>
                      completed === false ? (
                          <Box key={id}>
                              <Title>{title}</Title>
                              <div>
                                  <DoneBtn
                                      onClick={() =>
                                          dispatch(changeTodoState(id))
                                      }
                                  >
                                      Done
                                  </DoneBtn>
                                  <Button
                                      onClick={() => dispatch(onDeleteTodo(id))}
                                  >
                                      &#10006;
                                  </Button>
                              </div>
                          </Box>
                      ) : null,
                  )
                : null}
        </List>
    );
};

export default TodoList;

const List = styled.ul`
    margin: 20px;
    padding: 0 !important;
`;

const Box = styled.li`
    min-height: 60px;
    font-size: 20px;
    background-color: #c0e4fa;
    border-radius: 5px;
    text-decoration: none;
    list-style-type: none;
    max-width: 400px;
    margin: 10px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
`;

const Button = styled.span`
    cursor: pointer;
    font-size: 20px;
    &:hover {
        color: #7ec9f7;
    }
`;

const Title = styled.span`
    text-transform: uppercase;
`;

const DoneBtn = styled.span`
    color: #2569ef;
    font-size: 0.7em;
    margin-right: 5px;
    padding: 0.05em 0.5em;
    border: 2px solid #2569ef;
    border-radius: 3px;
    cursor: pointer;
    text-transform: uppercase;
    text-decoration: none;
    &:hover {
        background-color: #2569ef;
        color: #fff;
    }
`;
