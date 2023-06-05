import { IAppState, IDatabase, IMaterial, IPart } from "./types";

class AppActions {
  loaded = (state: IAppState) => ({
    ...state,
    imBusy: false,
  });

  loading = (state: IAppState) => ({
    ...state,
    imBusy: true,
  });
  reload = (state: IAppState, payload: boolean) => ({
    ...state,
    reload: payload,
  });
  setDatabase = (state: IAppState, payload: IDatabase) => ({
    ...state,
    database: payload,
  });

  setMaterials = (state: IAppState, payload: IMaterial[]) => ({
    ...state,
    database: { ...state.database, materials: payload },
  });

  addMaterial = (state: IAppState, payload: IMaterial) => ({
    ...state,
    database: {
      ...state.database,
      materials: [...state.database.materials, payload],
    },
  });

  setParts = (state: IAppState, payload: IPart[]) => ({
    ...state,
    database: { ...state.database, parts: payload },
  });

  addPart = (state: IAppState, payload: IPart) => ({
    ...state,
    database: {
      ...state.database,
      parts: [...state.database.parts, payload],
    },
  });
}

const actions = new AppActions();
export default actions;
