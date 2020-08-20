import React, { FC, ReactElement } from 'react';
import styled from 'styled-components';

const StyledPointList = styled.div`
  width: 400px;
  max-height: 21rem;
  overflow-y: auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 0.5rem;
`;



interface PointListProps {
  children: ReactElement[];
}

const PointList: FC<PointListProps> = ({ children }) => (
  <StyledPointList>{children}</StyledPointList>
);

export default PointList;
