import React, {
  forwardRef,
  ForwardRefRenderFunction,
  SyntheticEvent,
} from 'react';
import Button from '../../atoms/Button';
import Input, { InputProps } from '../../atoms/Input';

interface GeoPointForm extends InputProps {
  onSubmit: (event: SyntheticEvent) => void;
}

const GeoPointForm: ForwardRefRenderFunction<
  HTMLInputElement,
  GeoPointForm
> = ({ onChange, onSubmit }, ref) => (
  <form className="geo-point-form" onSubmit={onSubmit}>
    <Input ref={ref} onChange={onChange} />
    <Button type="submit" buttonName="Добавить" onClick={onSubmit} />
  </form>
);

export default forwardRef(GeoPointForm);
