/* eslint-disable react-hooks/exhaustive-deps */
import { AppProviderProps } from "./types";

import React, { useReducer, useEffect, useLayoutEffect, useMemo } from "react";

import AppCtx from "./ctx";
import reducer from "./reducer";
import initialState from "./state";
import databaseJson from "./database.json";

const AppProvider: React.FC<AppProviderProps> = ({
  children,
  onLoad = () => false,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const database = useMemo(() => databaseJson, [databaseJson]);

  const getDatabase = async () => {
    // TODO:
    // const { response } = await DatabaseApi.getDatabase();
    dispatch({
      type: "setDatabase",
      payload: database || {},
    });
  };

  useLayoutEffect(() => {
    onLoad(dispatch);
    getDatabase();
  }, []);

  return (
    <AppCtx.Provider
      value={{
        state: { ...state },
        dispatch,
      }}
    >
      {children}
    </AppCtx.Provider>
  );
};

export { AppProvider, AppCtx };
