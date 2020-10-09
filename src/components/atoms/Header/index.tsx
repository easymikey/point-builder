import React, { FC, memo } from 'react';
import { HeaderProps } from '../../../types';

const Header: FC<HeaderProps> = ({ title }) => <h1>{title}</h1>;

export default memo(Header);
