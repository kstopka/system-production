import { AppActionType, IAppState } from "./types";

import actions from "./actions";
import initialState from "./state";

function appReducer(state = initialState, action: AppActionType): IAppState {
  switch (action.type) {
    case "loaded":
      return actions.loaded(state);
    case "loading":
      return actions.loading(state);
    case "setDatabase":
      return actions.setDatabase(state, action.payload);
    case "addMaterial":
      return actions.addMaterial(state, action.payload);
    default:
      throw new Error("Wrong action type in app reducer");
  }
}

export default appReducer;
