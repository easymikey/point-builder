import React, { FC } from 'react';
import styled from 'styled-components';
import Header from '../../atoms/Header';
import PointListItem from '../../atoms/PointListItem';

const StyledPointList = styled.div`
  width: 400px;
  max-height: 21rem;
  overflow-y: auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 0.5rem;
`;

export interface Point {
  id: number;
  pointName: string;
  checked: boolean;
}

interface PointListProps {
  points: (Point | never)[];
  handleChangeChecked: (index: number) => void;
}

const PointList: FC<PointListProps> = ({
  points,
  handleChangeChecked,
}) => (
  <StyledPointList>
    <Header title="Ваши точки на карте" />
    {points &&
      points.map(({ pointName, checked, id }, index) => (
        <PointListItem
          key={id}
          label={pointName}
          checked={checked}
          onChange={() => handleChangeChecked(index)}
        />
      ))}
  </StyledPointList>
);
export default PointList;
