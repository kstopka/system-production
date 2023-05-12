import { IAppState, IDatabase, IMaterial } from "./types";

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

  addMaterial = (state: IAppState, payload: IMaterial) => ({
    ...state,
    database: {
      ...state.database,
      materials: [...state.database.materials, payload],
    },
  });
}

const actions = new AppActions();
export default actions;
