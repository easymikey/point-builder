import React, { FC, useState } from 'react';
import { Point } from '../src/components/moleculas/GeoPointList';
import Map from '../src/components/organisms/Map';
import GeoPointBlock from '../src/components/organisms/PointBlock';

const App: FC = () => {
  const [pointList, setPointList] = useState<(Point | never)[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  const updateLoadingState = () => {
    setIsLoading(false);
  };

  const [coodinates, setCoordinates] = useState<(number[] | never)[]>(
    [],
  );

  const getCoodinates = (points: Point[]) => {
    const coodinates = points.map(({ geometry }) => geometry);
    return coodinates;
  };

  React.useEffect(() => {
    const coordinates = getCoodinates(pointList);
    setCoordinates(coordinates);
  }, [pointList]);

  const handleGeometryChange = (event: any, changedId: string) => {
    const { geometry } = event.originalEvent.target;
    const coodrinates = geometry.getCoordinates();
    const newPointList = pointList.slice().map((pointItem) => {
      const { id } = pointItem;
      return id === changedId
        ? { ...pointItem, geometry: coodrinates }
        : pointItem;
    });
    setPointList(newPointList);
  };

  return (
    <div className="app">
      <GeoPointBlock
        pointList={pointList}
        setPointList={setPointList}
      />
      <Map
        pointList={pointList}
        geometry={coodinates}
        handleGeometryChange={handleGeometryChange}
        isLoading={isLoading}
        updateLoadingState={updateLoadingState}
      />
    </div>
  );
};

export default App;
