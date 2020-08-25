import React, { FC, ChangeEvent, MutableRefObject } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input<InputProps>`
  width: 230px;
  border: 2px;
  font-size: 1.2rem;
  border-radius: 0.2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  border-style: solid;

  border-color: #d3d3d4;
  outline: none;

  &:hover {
    border-color: hsl(240, 1%, 72%);
  }

  &:focus {
    outline: none;
    border-color: #2d90e0;
    box-shadow: 0 0 0 2px hsla(220, 90%, 56%, 0.2);
  }
`;

export interface InputProps {
  inputRef: MutableRefObject<HTMLInputElement | undefined>;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({
  inputRef,
  value,
  onChange,
}) => (
  <StyledInput
    inputRef={inputRef}
    value={value}
    onChange={onChange}
  />
);

export default Input;
