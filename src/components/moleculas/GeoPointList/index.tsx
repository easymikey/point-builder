import React, { FC } from 'react';
import styled from 'styled-components';
import Header from '../../atoms/Header';
import PointListItem from '../../atoms/GeoPointItem';

const StyledPointList = styled.div`
  width: 400px;
  max-height: 21rem;
  overflow-y: auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 0.5rem;
`;

export interface Point {
  id: string;
  pointName: string;
  geometry: number[];
  checked: boolean;
}

interface PointListProps {
  pointList: (Point | never)[];
  handleChangeChecked: (index: string) => void;
  deletePoint: (id: string) => void;
}

const PointList: FC<PointListProps> = ({
  pointList,
  handleChangeChecked,
  deletePoint,
}) => (
  <StyledPointList>
    <Header title="Ваши точки на карте" />
    {pointList &&
      pointList.map(({ pointName, checked, id }, index) => (
        <PointListItem
          key={id}
          label={pointName}
          checked={checked}
          onChange={() => handleChangeChecked(id)}
          deletePoint={() => deletePoint(id)}
        />
      ))}
  </StyledPointList>
);
export default PointList;
