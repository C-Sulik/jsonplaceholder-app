import React from 'react';
import styled from 'styled-components';

export const StyledButton = styled.button<{ color: string }>`
  margin: 5px;
  padding: 5px;
  color: ${({ color }) => color || 'black'};
`;

export const Button: React.FC<{
  type?: 'submit' | 'reset' | 'button';
  color: string;
  onClick: () => void;
}> = ({ type = 'button', children, color, onClick }) => {
  return (
    <StyledButton type={type} color={color} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
