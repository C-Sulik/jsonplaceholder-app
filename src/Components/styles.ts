import styled from 'styled-components';

export const StyledMainWrapper = styled.main`
  font-family: Roboto Condensed;
  font-size: 25px;
  text-align: center;
  display: flex;
`;
export const StyledTodoListMenu = styled.section`
  width: 20%;
  background-color: #91a3b0;
`;
export const TodoListWrapper = styled.section`
  width: 60%;
  background-color: #b9d9eb;
`;
export const StyledTodoListTitle = styled.h2``;

export const ListItemsWrapper = styled.ul`
  list-style: none;
`;

export const ListItemWrapper = styled.li`
  display: flex;
`;

export const ListItemTitle = styled.h3``;

export const StyledButton = styled.button<{ color: string }>`
  color: ${({ color }) => color || 'black'};
`;
