import { ChangeEvent, SyntheticEvent } from 'react';

export interface GeoPointItemProps {
  label: string | undefined;
  checked: boolean;
  handleOnChangeCheckedPoint: () => void;
  handleOnDeletePoint: () => void;
}

export interface HeaderProps {
  title: string;
}

export interface InputProps {
  namePoint: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface GeoPointFormProps extends InputProps {
  onSubmit: (event: SyntheticEvent) => void;
}

export interface Point {
  id: string;
  pointName: string;
  geometry: number[];
  checked: boolean;
}

export interface GeoPointListProps {
  pointList: (Point | never)[];
  handleOnChangeCheckedPoint: (index: string) => void;
  handleOnDeletePoint: (id: string) => void;
}

export interface GeoPointsOnMapProps {
  pointList: (Point | never)[];
  handleGeometryChange: (event: any, name: string) => void;
}

export interface MapProps extends GeoPointsOnMapProps {
  geometry: (number[] | never)[];
  isLoading: boolean;
  updateLoadingState: () => void;
}

export interface GeoPointBlockProps {
  pointList: (Point | never)[];
  setPointList: (list: Point[]) => void;
}
