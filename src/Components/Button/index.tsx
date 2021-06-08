import React from 'react';
import styled from 'styled-components';
import { EditIcon, TrashIcon } from '../../icons';

type IconNames = 'trash' | 'edit';

const iconsMap: { [iconName in IconNames]: () => JSX.Element } = {
  edit: EditIcon,
  trash: TrashIcon,
};

export const StyledButton = styled.button<{ color: string; icon: IconNames }>`
  margin: 5px;
  border: ${({ icon }) => (Boolean(icon) ? 'none' : '1px solid black')};
  border-radius: 3px;
  color: ${({ color }) => color || 'black'};
  width: 60px;
  height: 30px;
`;

export const Button: React.FC<{
  type?: 'submit' | 'reset' | 'button';
  color?: string;
  icon?: IconNames;
  disabled?: boolean;
  onClick?: () => void;
}> = ({ type = 'button', color = 'black', icon = 'edit', disabled, onClick, children }) => {
  const IconComponent = icon && iconsMap[icon];

  return (
    <StyledButton type={type} disabled={disabled} color={color} onClick={onClick} icon={icon}>
      {IconComponent && <IconComponent />}
      {children}
    </StyledButton>
  );
};
