import React, {
  ChangeEvent,
  forwardRef,
  ForwardRefRenderFunction,
  memo,
} from 'react';

export interface InputProps {
  namePoint: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps
> = ({ namePoint }, ref) => (
  <input className="input-submit" ref={ref} onChange={namePoint} />
);

export default memo(forwardRef<HTMLInputElement, InputProps>(Input));
