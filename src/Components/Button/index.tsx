import React from 'react';
import styled from 'styled-components';

export const StyledButton = styled.button<{ color: string }>`
  margin: 5px;
  padding: 5px;
  color: ${({ color }) => color || 'black'};
  width: 60px;
  height: 30px;
`;

export const Button: React.FC<{
  type?: 'submit' | 'reset' | 'button';
  color?: string;
  icon?: 'delete' | 'edit';
  disabled?: boolean;
  onClick?: () => void;
}> = ({ type = 'button', color = 'black', disabled, onClick, children }) => {
  return (
    <StyledButton type={type} disabled={disabled} color={color} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
