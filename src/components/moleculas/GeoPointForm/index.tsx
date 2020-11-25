import React, { forwardRef, ForwardRefRenderFunction } from 'react';
import { GeoPointFormProps } from '../../../types';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';

const GeoPointForm: ForwardRefRenderFunction<
  HTMLInputElement,
  GeoPointFormProps
> = ({ namePoint, onSubmit }, ref) => (
  <form className="geo-point-form" onSubmit={onSubmit}>
    <Input ref={ref} namePoint={namePoint} />
    <Button type="submit" buttonName="Добавить" onClick={onSubmit} />
  </form>
);

export default forwardRef(GeoPointForm);
