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
  const getId = (size: number = 16) => {
    const randomString = [...Array(size)]
      .map(() => Math.floor(Math.random() * 36).toString(36))
      .join('');

    return randomString;
  };

  const handleChangeChecked = (index: string) => {
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
    const id = getId(16);
    const geometry = [55.75, 37.57];
    const newPoint = {
      pointName,
      id,
      geometry,
      checked: false,
    };
    if (pointName !== '') {
      setPointList([...pointList, newPoint]);
      setPointName('');
    }
  };

  const deletePoint = (deletedId: string) => {
    const newPointList = pointList.slice().filter(({ id }) => {
      return id !== deletedId;
    });
    setPointList(newPointList);
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
        deletePoint={deletePoint}
      />
    </div>
  );
};

export default PointBlock;
