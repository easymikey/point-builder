import React, { FC } from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  width: 100%;
  margin: 0;
  height: 2rem;
  border-bottom-width: 1px;

  color: #474242;
  border-bottom-color: rgba(199, 197, 197, 0.5);

  display: flex;
  border-bottom-style: solid;
  align-items: center;

  white-space: nowrap;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledCheckbox = styled.input`
  margin: 0 0.5rem;
`;



interface PointListItemProps {
  label: string | undefined;
  checked: boolean;
  onChange: () => void;
}

const PointListItem: FC<PointListItemProps> = ({
  label,
  checked,
  onChange,
}) => (
  <StyledLabel>
    <StyledCheckbox
      type="checkbox"
      value={label}
      checked={checked}
      onChange={onChange}
    />
    {label}
  </StyledLabel>
);

export default PointListItem;
