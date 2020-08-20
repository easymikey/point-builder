import React, {
  FC,
  ChangeEvent,
  MutableRefObject,
} from 'react';
import styled from 'styled-components';

const StyledInput = styled.input<InputProps>`
  width: 250px;
  border: 2px;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  border-style: solid;

  border-color: #53a7ed;
  outline: none;
`;



export interface InputProps {
  inputRef: MutableRefObject<
    HTMLInputElement | undefined
  >;
  value: string;
  onChange: (
    event: ChangeEvent<HTMLInputElement>,
  ) => void;
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
