import { ReactNode, Dispatch } from "react";

export interface IMaterial {
  idMaterial: number;
  nameMaterial: string;
  priceMaterial: number;
  unitMaterial: string;
}
export interface IPart {
  idParts: number;
  nameParts: string;
  materialParts: number;
  quintityMagazinParts: number;
  quantityOrderParts: number;
  quantityOccupiedParts: number;
}

export interface IDatabase {
  materials: IMaterial[];
  parts: IPart[];
}

export interface IAppState {
  imBusy: boolean;
  isModalOpen: boolean;
  database: IDatabase;
}

export type AppActionType =
  | { type: "loaded" }
  | { type: "loading" }
  | {
      type: "setDatabase";
      payload: IDatabase;
    }
  | {
      type: "setMaterials";
      payload: IMaterial[];
    }
  | {
      type: "addMaterial";
      payload: IMaterial;
    }
  | {
      type: "setParts";
      payload: IPart[];
    }
  | {
      type: "addPart";
      payload: IPart;
    };

export interface IAppActions {
  loaded: () => void;
  loading: () => void;
  setDatabase: (database: IDatabase) => void;
  setMaterials: (materials: IMaterial[]) => void;
  addMaterial: (material: IMaterial) => void;
  setParts: (parts: IPart[]) => void;
  addPart: (part: IPart) => void;
}

export interface AppProviderProps {
  children: ReactNode;
  onLoad?: (dispatch: Dispatch<AppActionType>) => void;
}

export interface IAppContext {
  state: IAppState;
  dispatch: Dispatch<AppActionType>;
}
