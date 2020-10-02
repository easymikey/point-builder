import React, { FC } from 'react';
import Button from '../Button';

interface GeoPointItemProps {
  label: string | undefined;
  checked: boolean;
  handleOnChangePoint: () => void;
  handleOnDeletePoint: () => void;
}

const GeoPointItem: FC<GeoPointItemProps> = ({
  label,
  checked,
  handleOnChangePoint,
  handleOnDeletePoint,
}) => (
  <label className="geo-point-item">
    <div>
      <input
        className="geo-point-item__checkbox"
        type="checkbox"
        value={label}
        checked={checked}
        onChange={handleOnChangePoint}
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
