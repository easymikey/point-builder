import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Point } from '../src/components/moleculas/GeoPointList';
import Map from '../src/components/organisms/Map';
import PointBlock from '../src/components/organisms/PointBlock';

const Wrapper = styled.div`
  margin-top: 50px;
  padding: 50px;
  width: 850px;

  margin: auto;
  display: flex;
  justify-content: space-between;
`;

const App: FC = () => {
  const [pointList, setPointList] = useState<(Point | never)[]>(
    [],
  );

  const [coodinates, setCoordinates] = useState<
    (number[] | never)[]
  >([]);

  const getCoodinates = (points: Point[]) => {
    const coodinates = points.map(({ geometry }) => geometry);
    return coodinates;
  };

  React.useEffect(() => {
    const coordinates = getCoodinates(pointList);
    setCoordinates(coordinates);
  }, [pointList]);

  const handleGeometryChange = (
    event: any,
    changedId: number,
  ) => {
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
    <Wrapper>
      <Map
        pointList={pointList}
        geometry={coodinates}
        handleGeometryChange={handleGeometryChange}
      />
      <PointBlock
        pointList={pointList}
        setPointList={setPointList}
      />
    </Wrapper>
  );
};

export default App;
