import React from 'react';
import { Checkbox } from '../../Components/Checkbox';
import { TodoI } from './todos-slice';
import { Button } from '../../Components/Button/';
import { ListItemTitle, ListItemWrapper } from './styles';

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
