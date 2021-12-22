export interface IDownloadState {
  isActive: boolean;
}

export interface IPoint {
  name: string;
  latitude: number;
  longitude: number;
  materials: string[];
  worktime: undefined | string;
}

export interface IPointsState {
  points: IPoint[];
}

// Common state after combineReducers
export interface IState {
  download: IDownloadState;
  pointState: IPointsState;
}

export enum EDownloadActions {
  SET_ACTIVE = 'SET_ACTIVE',
}

export interface ISetActiveAction {
  type: EDownloadActions.SET_ACTIVE;
  payload: boolean;
}

export type DownloadActions = ISetActiveAction;
