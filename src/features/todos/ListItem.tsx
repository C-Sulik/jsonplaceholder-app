import React from 'react';
import { useDispatch } from 'react-redux';
import { Checkbox } from '../../Components/Checkbox';
import { TodoI, StateFetchingStatuses, updateTodo } from './todos-slice';
import { Button } from '../../Components/Button/';
import { ListItemTitle, ListItemWrapper } from './styles';
import { Loader } from '../../Components/Loader';

export const ListItem: React.FC<TodoI & { fetchingStatus: StateFetchingStatuses }> = ({
  id,
  title,
  completed,
  fetchingStatus,
}) => {
  const dispatch = useDispatch();

  const togleChackbox = () => dispatch(updateTodo({ id, payload: { completed: !completed } }));
  return (
    <ListItemWrapper>
      {/* <Checkbox checked={completed} onChange={() => dispatch(handleComplete)} /> */}
      {fetchingStatus.todo.includes(id) ? (
        <Loader />
      ) : (
        <Checkbox checked={completed} handleChenge={togleChackbox} />
      )}
      <ListItemTitle>{title}</ListItemTitle>
      <Button color="pink">Edit</Button>
      <Button color="lime">Delete</Button>
    </ListItemWrapper>
  );
};
