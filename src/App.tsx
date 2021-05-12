import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, TodoI, TodosStateI } from './features/todos/todos-slice';
import { fetchingStatuses } from './types';
import { StyledMainWrapper, StyledTodoListMenu } from './Components/styles';
import { RootStateI } from './store';
import { Loader } from './Components/Loader';
import { TodoList } from './features/todos/TodoList';

const { pending, fulfilled, rejected } = fetchingStatuses;

export const App = () => {
  const dispatch = useDispatch();
  const {
    error,
    list: todos,
    fetchingStatus,
  } = useSelector<RootStateI, TodosStateI>((state) => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <StyledMainWrapper>
      <StyledTodoListMenu>
        <div>Menu</div>
      </StyledTodoListMenu>
      <TodoList />
    </StyledMainWrapper>
  );
};

// https://codepen.io/arsh-shaikh/pen/LYxKavy
