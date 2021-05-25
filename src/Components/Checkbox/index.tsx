import React from 'react';
import styled from 'styled-components';

export const StyledCheckbox = styled.input`
  width: 20px;
  height: 20px;
  margin: 10px;
`;

export const Checkbox: React.FC<{ checked: boolean }> = ({ checked }) => {
  return <StyledCheckbox type="checkbox" checked={checked}></StyledCheckbox>;
};
