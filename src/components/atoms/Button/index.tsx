import React, { FC } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 150px;
  border: 2px;
  font-size: 1.2rem;
  border-radius: 0.2rem;
  transition: 0.2s;
  margin: 0 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  border-style: solid;

  background-color: ${({ color }) =>
    color === 'primary' ? '#53a7ed' : '#ed5653'};
  border-color: ${({ color }) =>
    color === 'primary' ? '#53a7ed' : '#ed5653'};
  color: white;
  outline: none;

  &:hover {
    border-color: ${({ color }) =>
      color === 'primary' ? '#2d90e0' : ' #eb4744'};
    background-color: ${({ color }) =>
      color === 'primary' ? '#2d90e0' : '#eb4744'};
  }

  &:focus {
    outline: none;
    border-color: ${({ color }) =>
      color === 'primary' ? '#2d90e0' : ' #eb4744'};
    background-color: ${({ color }) =>
      color === 'primary' ? '#2d90e0' : '#eb4744'};
    box-shadow: 0 0 0 2px hsla(220, 90%, 56%, 0.2);
  }

  &:active {
    transform: translateX(4px);
  }
`;

interface ButtonProps {
  color?: 'primary' | 'secondary';
  type: 'button' | 'submit';
  buttonName: string;
  onClick: (event: any) => void;
}

const Button: FC<ButtonProps> = ({
  color = 'primary',
  type = 'submit',
  onClick,
  buttonName,
}) => (
  <StyledButton type={type} onClick={onClick} color={color}>
    {buttonName}
  </StyledButton>
);

export default Button;
