import React, {
  ChangeEvent,
  forwardRef,
  ForwardRefRenderFunction,
  memo,
} from 'react';

export interface InputProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps
> = ({ onChange }, ref) => (
  <input className="input-submit" ref={ref} onChange={onChange} />
);

export default memo(forwardRef<HTMLInputElement, InputProps>(Input));
