import styled from 'styled-components';
import { StyledButton } from './styled';

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
