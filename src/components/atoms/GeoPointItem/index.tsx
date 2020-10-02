import React, { FC } from 'react';
import Button from '../Button';

interface GeoPointItemProps {
  label: string | undefined;
  checked: boolean;
  handleOnChangeCheckedPoint: () => void;
  handleOnDeletePoint: () => void;
}

const GeoPointItem: FC<GeoPointItemProps> = ({
  label,
  checked,
  handleOnChangeCheckedPoint,
  handleOnDeletePoint,
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
