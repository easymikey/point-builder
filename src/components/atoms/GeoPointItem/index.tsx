import React, { FC } from 'react';
import { GeoPointItemProps } from '../../../types';
import Button from '../Button';

const GeoPointItem: FC<GeoPointItemProps> = ({
  label,
  checked,
  handleOnChangeCheckedPoint,
  handleOnDeletePoint
}) => (
  <label className="geo-point-item">
    <div>
      <input
        className="geo-point-item__checkbox"
        type="checkbox"
        value={label}
        checked={checked}
        onChange={handleOnChangeCheckedPoint}
      />
      {label}
    </div>
    {checked && (
      <Button
        color="secondary"
        type="button"
        buttonName="удалить"
        onClick={handleOnDeletePoint}
      />
    )}
  </label>
);

export default GeoPointItem;
