import React from 'react';
import styled from 'styled-components';
import { TodoI } from './todos-slice';
import { Button } from '../../Components/Button/';
import { ListItemTitle, ListItemWrapper } from './styles';

export const StyledCheckbox = styled.input`
  width: 20px;
  height: 20px;
  margin: 10px;
`;

const Checkbox: React.FC<{ checked: boolean }> = ({ checked }) => {
  return <StyledCheckbox type="checkbox" checked={checked}></StyledCheckbox>;
};

export const ListItem: React.FC<TodoI> = ({ title, completed }) => {
  return (
    <ListItemWrapper>
      <Checkbox checked={completed} />
      <ListItemTitle>{title}</ListItemTitle>
      <Button color="pink">Edit</Button>
      <Button color="lime">Delete</Button>
    </ListItemWrapper>
  );
};
