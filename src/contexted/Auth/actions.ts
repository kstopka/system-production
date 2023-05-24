/* eslint-disable @typescript-eslint/no-unsafe-assignment */

/* eslint-disable @typescript-eslint/naming-convention */

/* eslint-disable @typescript-eslint/no-unsafe-member-access */

/* eslint-disable */

import Cookies from "js-cookie";
import initialState from "./state";
import { IAuthState, LoadAuthPayloadType } from "./types";

class AuthActions {
  logIn = (state: IAuthState, { payload }: { payload: any }) => {
    console.log("CtxAuth logIn", payload);
    const { id, level, email, first_name, last_name, token } = payload;
    Cookies.set("token", token, { expires: 2 });
    return {
      ...state,
      loggedIn: true,
      id,
      level,
      email,
      first_name,
      last_name,
    };
  };

  logOut = () => {
    Cookies.remove("token");
    return initialState;
  };

  loadAuth = (
    state: IAuthState,
    { payload }: { payload: LoadAuthPayloadType }
  ) => {
    console.log("CtxAuth loadAuth", payload);

    const { auth } = payload;

    return {
      ...state,
      ...auth,
    };
  };

  setAuthBusy = (
    state: IAuthState,
    { payload }: { payload: { isBusy: boolean } }
  ) => {
    const { isBusy } = payload;

    return {
      ...state,
      isBusy,
    };
  };

  // setAccountDetails = (
  //   state: IAuthState,
  //   { payload }: { payload: Record<string, string> }
  // ) => {
  //   console.log("CtxAuth setAccountDetails", payload);
  //   const {
  //     newEmail: email,
  //     newFirstName: first_name,
  //     newLastName: last_name,
  //     newPhone: phone,
  //   } = payload;
  //   return {
  //     ...state,
  //     first_name,
  //     last_name,
  //     phone,
  //     email,
  //   };
  // };
}

const actions = new AuthActions();
export default actions;
