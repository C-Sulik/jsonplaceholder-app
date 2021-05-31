import React from 'react';
import { useDispatch } from 'react-redux';
import { Checkbox } from '../../Components/Checkbox';
import { TodoI, StateFetchingStatuses, updateTodo, deleteTodo } from './todos-slice';
import { Button } from '../../Components/Button/';
import { ListItemTitle, ListItemWrapper, ButtonsWrapper } from './styles';

export const ListItem: React.FC<TodoI & { fetchingStatus: StateFetchingStatuses }> = ({
  id,
  title,
  completed,
  fetchingStatus,
}) => {
  const dispatch = useDispatch();

  const handleCompleteTodo = () => dispatch(updateTodo({ id, payload: { completed: !completed } }));
  const handleDeleteTodo = () => dispatch(deleteTodo(id));

  return (
    <ListItemWrapper>
      <Checkbox
        isLoading={fetchingStatus.todo.includes(id)}
        checked={completed}
        onChange={handleCompleteTodo}
      />

      <ListItemTitle>{title}</ListItemTitle>
      <ButtonsWrapper>
        {/* <Button color="pink">Edit</Button> */}
        <Button color="lime" onClick={handleDeleteTodo}>
          Delete
        </Button>
      </ButtonsWrapper>
    </ListItemWrapper>
  );
};
