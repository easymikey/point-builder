import React, { FC } from 'react';
import GeoPointItem from '../../atoms/GeoPointItem';
import Header from '../../atoms/Header';

export interface Point {
  id: string;
  pointName: string;
  geometry: number[];
  checked: boolean;
}

interface GeoPointListProps {
  pointList: (Point | never)[];
  handleOnChangeCheckedPoint: (index: string) => void;
  handleOnDeletePoint: (id: string) => void;
}

const GeoPointList: FC<GeoPointListProps> = ({
  pointList,
  handleOnChangeCheckedPoint,
  handleOnDeletePoint,
}) => (
  <div className="geo-point-list">
    <Header title="Ваши точки на карте" />
    {pointList &&
      pointList.map(({ pointName, checked, id }) => (
        <GeoPointItem
          key={id}
          label={pointName}
          checked={checked}
          handleOnChangeCheckedPoint={() =>
            handleOnChangeCheckedPoint(id)
          }
          handleOnDeletePoint={() => handleOnDeletePoint(id)}
        />
      ))}
  </div>
);
export default GeoPointList;
