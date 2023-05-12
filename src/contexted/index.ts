/* eslint-disable */
import { useContext, Context } from "react";

import { AppProvider, AppCtx } from "./App/Provider";
import { WindowProvider, WindowCtx } from "./Window/Provider";

interface ElasticObject {
  [key: string]: any;
}

const useActions = <T>(ctx: Context<any>, selected: string | string[]): T => {
  const { dispatch } = useContext<any>(ctx);

  if (Array.isArray(selected)) {
    return selected.reduce(
      (actions: ElasticObject, name: string) => ({
        ...actions,
        [name]: (payload: any) =>
          dispatch({
            type: name,
            payload,
          }),
      }),
      {}
    ) as any;
  }
  return {
    [selected]: (payload: any) =>
      dispatch({
        type: selected,
        payload,
      }),
  } as any;
};

const useContextState = <T>(
  ctx: Context<any>,
  selected: string | string[] = "*"
): T => {
  const { state } = useContext<any>(ctx);

  if (Array.isArray(selected)) {
    return selected.reduce(
      (states: ElasticObject, name: string) => ({
        ...states,
        [name]: state[name],
      }),
      {}
    ) as any;
  }
  return selected === "*"
    ? state
    : ({
        [selected]: state[selected],
      } as any);
};

export {
  useActions,
  useContextState,
  AppProvider,
  AppCtx,
  WindowProvider,
  WindowCtx,
};
