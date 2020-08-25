import React, { FC } from 'react';
import {
  YMaps,
  Map,
  FullscreenControl,
  ZoomControl,
  Polyline,
} from 'react-yandex-maps';
import GeoPointsOnMap, {
  GeoPointsOnMapProps,
} from '../../moleculas/GeoPointsOnMap';

const mapState = {
  center: [55.76, 37.64],
  zoom: 9,
  controls: [],
};

const polylineOptions = {
  balloonCloseButton: false,
  strokeColor: '#000',
  strokeWidth: 4,
  strokeOpacity: 0.5,
};

const zoomControlOptions = {
  float: 'right',
  size: 'auto',
};

interface MapProps extends GeoPointsOnMapProps {
  geometry: (number[] | never)[];
}

const MyMap: FC<MapProps> = ({
  pointList,
  geometry,
  handleGeometryChange,
}) => (
  <YMaps>
    <Map defaultState={mapState} width={400} height={400}>
      <GeoPointsOnMap
        pointList={pointList}
        handleGeometryChange={handleGeometryChange}
      />
      <Polyline geometry={geometry} options={polylineOptions} />
      <FullscreenControl />
      <ZoomControl options={zoomControlOptions} />
    </Map>
  </YMaps>
);

export default MyMap;
