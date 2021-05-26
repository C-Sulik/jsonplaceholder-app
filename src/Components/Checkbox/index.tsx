import React from 'react';
import styled from 'styled-components';

export const StyledCheckbox = styled.input`
  width: 20px;
  height: 20px;
  margin: 10px;
`;

export const Checkbox: React.FC<{
  checked: boolean;
  handleChenge: () => void;
}> = ({ checked, handleChenge }) => {
  return (
    <StyledCheckbox type="checkbox" checked={checked} onChange={handleChenge}></StyledCheckbox>
  );
};
