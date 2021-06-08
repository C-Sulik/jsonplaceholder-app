import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Checkbox } from '../../Components/Checkbox';
import { TodoI, StateFetchingStatuses, updateTodo, deleteTodo } from './todos-slice';
import { Button } from '../../Components/Button/';
import { ListItemTitle, ListItemWrapper, ButtonsWrapper } from './styles';

const TitleEditInput = styled.input`
  margin: 10px;
  font-size: 18px;
`;

const TitleEditForm = styled.form`
  display: flex;
  margin-left: 10%;
`;

export const ListItem: React.FC<TodoI & { fetchingStatus: StateFetchingStatuses }> = ({
  id,
  title,
  completed,
  fetchingStatus,
}) => {
  const dispatch = useDispatch();
  const [titleEdit, setTitleEdit] = useState(title);
  const [isEdit, setIsEdit] = useState(false);
  const isLoading = fetchingStatus.todos.has(id);

  const toggleIsEdit = () => setIsEdit(!isEdit);

  const handleEditTitle = (event: React.ChangeEvent<HTMLInputElement>) =>
    setTitleEdit(event.target.value);

  const handleDeleteTodo = () => dispatch(deleteTodo(id));

  const toggleTodoCompleted = () =>
    dispatch(updateTodo({ id, payload: { completed: !completed } }));

  const handleUpdateTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(updateTodo({ id, payload: { title: titleEdit } }));
    setIsEdit(false);
  };

  return (
    <ListItemWrapper>
      <Checkbox isLoading={isLoading} checked={completed} onChange={toggleTodoCompleted} />
      {isEdit ? (
        <TitleEditForm onSubmit={handleUpdateTodo}>
          <TitleEditInput type="text" value={titleEdit} onChange={handleEditTitle} />
          <Button type="submit"></Button>
        </TitleEditForm>
      ) : (
        <ListItemTitle>{title}</ListItemTitle>
      )}
      <ButtonsWrapper>
        <Button color="pink" disabled={isLoading} onClick={toggleIsEdit} icon="edit">
          {/* Edit */}
        </Button>
        <Button color="lime" disabled={isLoading} onClick={handleDeleteTodo} icon="trash">
          {/* Delete */}
        </Button>
      </ButtonsWrapper>
    </ListItemWrapper>
  );
};
