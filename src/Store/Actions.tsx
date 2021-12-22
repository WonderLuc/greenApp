import { EDownloadActions, ISetActiveAction } from './types';

export function setDownloadActivity(payload: boolean): ISetActiveAction {
  return {
    type: EDownloadActions.SET_ACTIVE,
    payload,
  };
}
