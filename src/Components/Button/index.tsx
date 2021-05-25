import React from 'react';
import styled from 'styled-components';

export const StyledButton = styled.button<{ color: string }>`
  color: ${({ color }) => color || 'black'};
`;

export const Button: React.FC<{ type?: 'submit' | 'reset' | 'button'; color: string }> = ({
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
