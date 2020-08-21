import React from 'react';
import AddPointForm from '../../moleculas/AddPointForm';
import PointList from '../../moleculas/PointList';
import PointListItem from '../../atoms/PointListItem';

const List = () => (
  <div>
    <AddPointForm
      inputRef={React.useRef()}
      value=""
      onChange={(event) =>
        console.log('change', event)
      }
      onSubmit={(event) => {
        event.preventDefault();
        console.log('change', event)
      }}
    />
    <PointList>
      <PointListItem name="point1" />
      <PointListItem name="point2" />
      <PointListItem name="point3" />
      <PointListItem name="point4" />
    </PointList>
  </div>
);

export default List;
