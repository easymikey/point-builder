import React, { FC } from 'react';
import { GeoPointListProps } from '../../../types';
import GeoPointItem from '../../atoms/GeoPointItem';
import Header from '../../atoms/Header';

const GeoPointList: FC<GeoPointListProps> = ({
  pointList,
  handleOnChangeCheckedPoint,
  handleOnDeletePoint
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
