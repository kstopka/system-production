import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import URL_PATHS from "../../constants/routes";
import { AuthCtx, useActions, useContextState } from "../../contexted";
import { IAuthActions, IAuthState } from "../../contexted/Auth/types";
import AuthApi from "../../fakeAPI/AuthApi";
import { ILoginData, IResponse, IUseLogin } from "./types";
import { defaultValues, schema } from "./utils";

export const useLogin = (): IUseLogin => {
  const loggedIn = useContextState<IAuthState>(AuthCtx, ["loggedIn"]);
  const { logIn } = useActions<IAuthActions>(AuthCtx, ["logIn"]);

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<IResponse>({
    message: "",
    status: "info",
  });
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const methods = useForm<typeof defaultValues>({
    defaultValues,
    resolver: yupResolver(schema),
  });
  const { reset } = methods;

  const onSubmit: SubmitHandler<typeof defaultValues> = (formValues) => {
    setIsLoading(true);
    AuthApi.loginUser(formValues)
      .then((res: ILoginData) => {
        logIn(res.userData);
        navigate(URL_PATHS.home.slug);
        reset();
        setResponse({
          status: "success",
          message: res.data.message,
        });
      })
      .catch((err: ILoginData) => {
        setResponse({
          status: "error",
          message: err.data.message,
        });
      })
      .finally(() => {
        setIsLoading(false);
        setIsAlertVisible(true);
      });
  };

  const onCloseAlert = () => {
    setIsAlertVisible(false);
    setResponse({ message: "", status: "info" });
  };

  useEffect(() => {
    if (!loggedIn) {
      navigate(URL_PATHS.account.slug);
    }
  }, [loggedIn]);

  useEffect(() => {
    const redirectToLoginTimer = setTimeout(() => {
      setIsAlertVisible(false);
      setResponse((prevstate) => {
        return { ...prevstate, message: "" };
      });
    }, 5000);

    return () => clearTimeout(redirectToLoginTimer);
  }, [response.message, response.status]);

  return {
    isLoading,
    isAlertVisible,
    response,
    methods,
    onSubmit,
    onCloseAlert,
  };
};
