import React from 'react';
import {
  YMaps,
  Map,
  Placemark,
  FullscreenControl,
  ZoomControl,
  Polyline,
} from 'react-yandex-maps';

const MyMap = () => (
  <YMaps>
    <Map
      defaultState={{
        center: [55.75, 37.57],
        zoom: 9,
      }}
      width={400}
      height={400}
    >
      <Placemark
        geometry={[55.684758, 37.738521]}
        properties={{
          iconCaption: 'точка 1',
        }}
        options={{ draggable: true }}
      />
      <Polyline
        geometry={[
          [55.684758, 37.738521],
          [55.8, 37.4],
          [55.7, 37.5],
          [55.7, 37.4],
        ]}
        options={{
          balloonCloseButton: false,
          strokeColor: '#000',
          strokeWidth: 4,
          strokeOpacity: 0.5,
        }}
      />
      <FullscreenControl />
      <ZoomControl
        options={{
          float: 'right',
          size: 'auto',
        }}
      />
    </Map>
  </YMaps>
);

export default MyMap;
