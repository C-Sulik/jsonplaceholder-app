import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, TodoI, TodosStateI } from './todos-slice';
import { RootStateI } from '../../store';
import { fetchingStatuses } from '../../types';
import { ListItem } from './ListItem';
import { Loader } from '../../Components/Loader';
import { TodoListWrapper, ListItemsWrapper } from './styles';

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
      {fetchingStatus.list === pending && <Loader />}
      {fetchingStatus.list === fulfilled && (
        <ListItemsWrapper>
          {todos.map((todo: TodoI) => (
            <ListItem {...todo} fetchingStatus={fetchingStatus} key={todo.id} />
          ))}
        </ListItemsWrapper>
      )}
      {fetchingStatus.list === rejected && <p>{error}</p>}
    </TodoListWrapper>
  );
};
