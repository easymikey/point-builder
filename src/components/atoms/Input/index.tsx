import React, {
  ChangeEvent,
  FC,
  memo,
  MutableRefObject,
} from 'react';

export interface InputProps {
  ref: MutableRefObject<HTMLInputElement | null>;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({ ref, onChange }) => (
  <input className="input-submit" ref={ref} onChange={onChange} />
);

export default memo(Input);
