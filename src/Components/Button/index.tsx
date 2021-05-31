import React from 'react';
import styled from 'styled-components';

export const StyledButton = styled.button<{ color: string }>`
  margin: 5px;
  padding: 5px;
  color: ${({ color }) => color || 'black'};
`;

export const Button: React.FC<{
  type?: 'submit' | 'reset' | 'button';
  color?: string;
  disabled?: boolean;
  onClick: () => void;
}> = ({ type = 'button', color = 'black', disabled, onClick, children }) => {
  return (
    <StyledButton type={type} disabled={disabled} color={color} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
