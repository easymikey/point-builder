import React, { FC } from 'react';
import styled from 'styled-components';

const StyledHeader = styled.h1`
  margin: 0;
  height: 3rem;
  width: 100%;
  border-bottom-width: 1px;

  border-bottom-color: rgba(199, 197, 197, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-style: solid;
`;



interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({ title }) => (
  <StyledHeader>{title}</StyledHeader>
);

export default Header;
