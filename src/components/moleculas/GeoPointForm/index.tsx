import React, { FC, SyntheticEvent } from 'react';
import Button from '../../atoms/Button';
import Input, { InputProps } from '../../atoms/Input';

interface GeoPointForm extends InputProps {
  onSubmit: (event: SyntheticEvent) => void;
}

const GeoPointForm: FC<GeoPointForm> = ({
  ref,
  onChange,
  onSubmit,
}) => (
  <form className="geo-point-form" onSubmit={onSubmit}>
    <Input ref={ref} onChange={onChange} />
    <Button type="submit" buttonName="Добавить" onClick={onSubmit} />
  </form>
);

export default GeoPointForm;
