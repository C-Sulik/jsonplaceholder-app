import React from 'react';
import { GlobalStyle, StyledMainWrapper } from './styles';
import { TodoList } from './features/todos/TodoList';

export const App = () => {
  return (
    <StyledMainWrapper>
      <GlobalStyle />
      <TodoList />
    </StyledMainWrapper>
  );
};
