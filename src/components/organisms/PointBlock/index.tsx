import React, {
  ChangeEvent,
  FC,
  SyntheticEvent,
  useRef,
  useState
} from 'react';
import { GeoPointBlockProps } from '../../../types';
import GeoPointForm from '../../moleculas/GeoPointForm';
import GeoPointList from '../../moleculas/GeoPointList';

const GeoPointBlock: FC<GeoPointBlockProps> = ({
  pointList,
  setPointList
}) => {
  const gerenateId = (size = 16) => {
    const randomString = [...Array(size)]
      .map(() => Math.floor(Math.random() * 36).toString(36))
      .join('');

    return randomString;
  };

  const checkPointOnList = (index: string) => {
    const newPointList = pointList.slice().map((pointItem) => {
      const { id, checked } = pointItem;
      return id === index
        ? { ...pointItem, checked: !checked }
        : pointItem;
    });
    setPointList(newPointList);
  };

  const addPointToMap = (event: SyntheticEvent) => {
    event.preventDefault();
    const id = gerenateId(16);
    const geometry = [55.75, 37.57];
    const newPoint = {
      pointName,
      id,
      geometry,
      checked: false
    };
    if (pointName !== '') {
      setPointList([...pointList, newPoint]);
      setPointName('');
    }
  };

  const deletePointFromMap = (deletedId: string) => {
    console.log('hello', deletedId);
    const newPointList = pointList.slice().filter(({ id }) => {
      return id !== deletedId;
    });
    console.log(newPointList);
    setPointList(newPointList);
  };

  const pointRef = useRef<HTMLInputElement | null>(null);
  const [pointName, setPointName] = useState<string>('');

  const namePoint = (event: ChangeEvent<HTMLInputElement>) => {
    const { value: name } = event.currentTarget;
    setPointName(name);
  };

  return (
    <div>
      <GeoPointForm
        ref={pointRef}
        namePoint={namePoint}
        onSubmit={addPointToMap}
      />
      <GeoPointList
        pointList={pointList}
        handleOnChangeCheckedPoint={checkPointOnList}
        handleOnDeletePoint={deletePointFromMap}
      />
    </div>
  );
};

export default GeoPointBlock;
