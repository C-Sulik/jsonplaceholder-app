import React from 'react';
import styled from 'styled-components';
import { Loader } from '../../Components/Loader';

export const StyledCheckbox = styled.input`
  min-width: 20px;
  min-height: 20px;
  /* padding: 10px; */
  margin: 10px;
  cursor: pointer;
`;

export const Checkbox: React.FC<{
  checked: boolean;
  onChange: () => void;
  isLoading?: boolean;
}> = ({ checked, isLoading, onChange }) => {
  return isLoading ? (
    <Loader />
  ) : (
    <StyledCheckbox type="checkbox" checked={checked} onChange={onChange}></StyledCheckbox>
  );
};
