import { IAppState } from "./types";

const initialState: IAppState = {
  imBusy: true,
  isModalOpen: false,
  database: {
    materials: [],
  },
};

export default initialState;
