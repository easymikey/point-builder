import React, { FC } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button<ButtonType>`
  width: 150px;
  border: 2px;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  border-style: solid;

  background-color: #53a7ed;
  border-color: #53a7ed;
  color: white;
  outline: none;
`;



interface ButtonType {
  type: 'button' | 'submit';
  onClick: (event: any) => void;
}

interface ButtonProps extends ButtonType {
  buttonName: string;
}

const Button: FC<ButtonProps> = ({
  type = 'submit',
  onClick,
  buttonName,
}) => (
  <StyledButton type={type} onClick={onClick}>
    {buttonName}
  </StyledButton>
);

export default Button;
