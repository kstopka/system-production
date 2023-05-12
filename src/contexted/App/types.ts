import { ReactNode, Dispatch } from "react";

interface IMaterial {
  idMaterial: number;
  nameMaterial: string;
  priceMaterial: number;
  unitMaterial: string;
}

interface IDatabase {
  materials: IMaterial[];
}

interface IAppState {
  imBusy: boolean;
  isModalOpen: boolean;
  database: IDatabase;
}

type AppActionType =
  | { type: "loaded" }
  | { type: "loading" }
  | {
      type: "setDatabase";
      payload: IDatabase;
    }
  | {
      type: "addMaterial";
      payload: IMaterial;
    };

interface IAppActions {
  loaded: () => void;
  loading: () => void;
  setDatabase: (database: IDatabase) => void;
  addMaterial: (material: IMaterial) => void;
}

interface AppProviderProps {
  children: ReactNode;
  onLoad?: (dispatch: Dispatch<AppActionType>) => void;
}

interface IAppContext {
  state: IAppState;
  dispatch: Dispatch<AppActionType>;
}

export type {
  IMaterial,
  IDatabase,
  IAppState,
  IAppActions,
  AppActionType,
  AppProviderProps,
  IAppContext,
};
