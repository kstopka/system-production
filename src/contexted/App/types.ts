import { ReactNode, Dispatch } from "react";

interface IMaterials {
  idMaterial: number;
  nameMaterial: string;
  priceMaterial: number;
  unitMaterial: string;
}

interface IDatabase {
  materials: IMaterials[];
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
    };

interface IAppActions {
  loaded: () => void;
  loading: () => void;
  setDatabase: (database: IDatabase) => void;
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
  IMaterials,
  IDatabase,
  IAppState,
  IAppActions,
  AppActionType,
  AppProviderProps,
  IAppContext,
};
