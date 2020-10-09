import React, {
  forwardRef,
  ForwardRefRenderFunction,
  memo
} from 'react';
import { InputProps } from '../../../types';

const Input: ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps
> = ({ namePoint }, ref) => (
  <input className="input-submit" ref={ref} onChange={namePoint} />
);

export default memo(forwardRef<HTMLInputElement, InputProps>(Input));
