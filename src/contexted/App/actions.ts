import { IAppState, IDatabase } from "./types";

class AppActions {
  loaded = (state: IAppState) => ({
    ...state,
    imBusy: false,
  });

  loading = (state: IAppState) => ({
    ...state,
    imBusy: true,
  });
  setDatabase = (state: IAppState, payload: IDatabase) => ({
    ...state,
    database: payload,
  });
}

const actions = new AppActions();
export default actions;
