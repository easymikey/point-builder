import React, { FC, SyntheticEvent } from 'react';
import styled from 'styled-components';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import { InputProps } from '../../atoms/Input';

const InputFormWrapper = styled.form`
  width: 400px;
  height: 2.5rem;
  margin-bottom: 1rem;

  display: flex;
  justify-content: space-between;
`;

interface AddPointFormProps extends InputProps {
  onSubmit: (event: SyntheticEvent) => void;
}

const InputForm: FC<AddPointFormProps> = ({
  inputRef,
  value,
  onChange,
  onSubmit,
}) => (
  <InputFormWrapper onSubmit={onSubmit}>
    <Input
      value={value}
      inputRef={inputRef}
      onChange={onChange}
    />
    <Button
      type="submit"
      buttonName="Добавить"
      onClick={onSubmit}
    />
  </InputFormWrapper>
);

export default InputForm;
