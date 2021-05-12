import styled from 'styled-components';

export const StyledButton = styled.button<{ color: string }>`
  color: ${({ color }) => color || 'black'};
`;
