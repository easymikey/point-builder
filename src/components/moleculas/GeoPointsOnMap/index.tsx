import React, { FC } from 'react';
import { Placemark } from 'react-yandex-maps';
import { GeoPointsOnMapProps } from '../../../types';

const GeoPointListOnMap: FC<GeoPointsOnMapProps> = ({
  pointList,
  handleGeometryChange
}) => (
  <>
    {pointList &&
      pointList.map(({ pointName, geometry, id }, index) => (
        <Placemark
          key={index}
          geometry={geometry}
          properties={{
            iconCaption: pointName
          }}
          options={{ draggable: true }}
          onDragEnd={(event: any) => handleGeometryChange(event, id)}
        />
      ))}
  </>
);

export default GeoPointListOnMap;
