import * as React from 'react';
import {
  FullscreenControl,
  Map,
  Polyline,
  YMaps,
  ZoomControl
} from 'react-yandex-maps';
import { MapProps } from '../../../types';
import Spinner from '../../atoms/Spinner';
import GeoPointsOnMap from '../../moleculas/GeoPointsOnMap';

const mapState = {
  center: [55.76, 37.64],
  zoom: 9,
  controls: []
};

const polylineOptions = {
  balloonCloseButton: false,
  strokeColor: '#000',
  strokeWidth: 4,
  strokeOpacity: 0.5
};

const zoomControlOptions = {
  float: 'right',
  size: 'auto'
};

const MyMap: React.FC<MapProps> = ({
  pointList,
  geometry,
  handleGeometryChange,
  isLoading,
  updateLoadingState
}) => (
  <>
    <YMaps>
      <Map
        defaultState={mapState}
        width={400}
        height={400}
        onLoad={() => updateLoadingState()}
      >
        <GeoPointsOnMap
          pointList={pointList}
          handleGeometryChange={handleGeometryChange}
        />
        <Polyline geometry={geometry} options={polylineOptions} />
        <FullscreenControl />
        <ZoomControl options={zoomControlOptions} />
      </Map>
    </YMaps>
    {isLoading && <Spinner />}
  </>
);

export default MyMap;
