import { combineReducers } from 'redux';
import points from './mockDB';
import {
  DownloadActions, EDownloadActions, IDownloadState, IPointsState,
} from './types';

function ReducerDownload(state: IDownloadState = { isActive: false }, action: DownloadActions): IDownloadState {
  switch (action.type) {
    case EDownloadActions.SET_ACTIVE:
      return { ...state, isActive: action.payload };
    default:
      return state;
  }
}

function ReducerPoint(state: IPointsState = { points }, action: any): IPointsState {
  return state;
}

const reducer = combineReducers({ download: ReducerDownload });

export default reducer;
