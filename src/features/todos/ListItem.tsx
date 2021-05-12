import React from 'react';
import styled from 'styled-components';
import { TodoI } from './todos-slice';
import { ListItemWrapper, ListItemTitle, StyledButton } from '../../Components/styles';

interface ListItemI {
  title: string;
}

const Checkbox: React.FC<{ checked: boolean }> = ({ checked }) => {
  return <input type="checkbox" checked={checked}></input>;
};

const DeleteBtn = () => {
  return <button>Delete</button>;
};

const Button: React.FC<{ type?: 'submit' | 'reset' | 'button'; color: string }> = ({
  type = 'button',
  children,
  color,
}) => {
  return (
    <StyledButton type={type} color={color}>
      {children}
    </StyledButton>
  );
};
// https://material-ui.com/ru/components/checkboxes/
// https://material-ui.com/ru/components/buttons/
// https://github.com/mui-org/material-ui/blob/next/packages/material-ui/src/Button/Button.js
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
