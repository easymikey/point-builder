import React, { FC, useState, useRef, ChangeEvent, SyntheticEvent } from 'react';
import AddPointForm from '../../moleculas/AddPointForm';
import PointList, { Point } from '../../moleculas/PointList';

const List: FC = () => {
  const [pointList, setPointList] = useState<(Point | never)[]>(
    [],
  );

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
    const newPoint = {
      pointName,
      id,
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
        points={pointList}
        handleChangeChecked={handleChangeChecked}
      />
    </div>
  );
};

export default List;
