import { SubmitHandler, UseFormReturn } from "react-hook-form";
import { IAuthState } from "../../contexted/Auth/types";

import { defaultValues } from "./utils";

type TLoginDefaultState = typeof defaultValues;

export interface IResponse {
  message: string;
  status: "info" | "error" | "success";
}

export interface ILoginData {
  data: {
    message: string;
  };
  userData: Omit<IAuthState, "isBusy" | "loggedIn">;
}

export interface IUseLogin {
  isAlertVisible: boolean;
  isLoading: boolean;
  methods: UseFormReturn<TLoginDefaultState>;
  response: IResponse;
  onSubmit: any;
  // onSubmit: (
  //   formValues: TLoginDefaultState
  // ) => SubmitHandler<TLoginDefaultState>;
  onCloseAlert: () => void;
}
