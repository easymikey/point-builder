import React, { memo } from 'react';

const Spinner = () => (
  <div className="spinner-wrapper">
    <div className="spinner" />
  </div>
);

export default memo(Spinner);
