import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, TodoI, TodosStateI } from './todos-slice';
import { RootStateI } from '../../store';
import { fetchingStatuses } from '../../types';
import { ListItem } from './ListItem';
import { Loader } from '../../Components/Loader';
import { TodoListWrapper, ListItemsWrapper } from '../../Components/styles';

const { pending, fulfilled, rejected } = fetchingStatuses;

export const TodoList = () => {
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
    <TodoListWrapper>
      {fetchingStatus === pending && <Loader />}
      {fetchingStatus === fulfilled && (
        <ListItemsWrapper>
          {todos.map((todo: TodoI) => (
            <ListItem {...todo} />
          ))}
        </ListItemsWrapper>
      )}
      {fetchingStatus === rejected && <p>{error}</p>}
    </TodoListWrapper>
  );
};
