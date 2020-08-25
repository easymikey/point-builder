import React, {
  FC,
  useState,
  useRef,
  ChangeEvent,
  SyntheticEvent,
} from 'react';
import AddPointForm from '../../moleculas/AddGeoPointForm';
import PointList, { Point } from '../../moleculas/GeoPointList';

interface PointBlockProps {
  pointList: (Point | never)[];
  setPointList: (list: Point[]) => void;
}

const PointBlock: FC<PointBlockProps> = ({
  pointList,
  setPointList,
}) => {
  const getId = () => pointList.length;

  const handleChangeChecked = (index: number) => {
    const newPointList = pointList.slice().map((pointItem) => {
      const { id, checked } = pointItem;
      return id === index
        ? { ...pointItem, checked: !checked }
        : pointItem;
    });
    setPointList(newPointList);
  };

  const addPoint = (event: SyntheticEvent) => {
    event.preventDefault();
    const id = getId();
    const geometry = [55.75, 37.57];
    const newPoint = {
      pointName,
      id,
      geometry,
      checked: false,
    };
    if (pointName !== '') {
      setPointList([...pointList, newPoint]);
    }
  };

  const pointRef = useRef();
  const [pointName, setPointName] = useState<string>('');

  const handleChangePointName = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const { value: name } = event.currentTarget;
    setPointName(name);
  };

  return (
    <div>
      <AddPointForm
        inputRef={pointRef}
        value={pointName}
        onChange={handleChangePointName}
        onSubmit={addPoint}
      />
      <PointList
        pointList={pointList}
        handleChangeChecked={handleChangeChecked}
      />
    </div>
  );
};

export default PointBlock;
