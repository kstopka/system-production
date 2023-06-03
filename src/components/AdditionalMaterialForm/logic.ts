import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AppCtx, useActions } from "../../contexted";
import { IAppActions } from "../../contexted/App/types";
import Api from "../../fakeAPI/API";
import { defaultValues, schema } from "./utils";

interface IResponse {
  message: string;
  status: "info" | "error" | "success";
}

export const useAlert = () => {
  const { addMaterial } = useActions<IAppActions>(AppCtx, "addMaterial");

  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<IResponse>({
    message: "",
    status: "info",
  });

  const methods = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });
  const { reset, handleSubmit } = methods;

  const onSubmit: SubmitHandler<typeof defaultValues> = async (formValues) => {
    try {
      const response = await Api.addMaterial(formValues);
      console.log(response);
      addMaterial({
        ...formValues,
        idMaterial: response.data.insertId,
        priceMaterial: Number(formValues.priceMaterial),
      });
      setResponse({
        status: "success",
        message: "Dane poprawnie wysłane",
      });
      reset(defaultValues);
    } catch (err: any) {
      setResponse({
        status: "error",
        message: err.data.message,
      });
    } finally {
      setIsLoading(false);
      setIsAlertVisible(true);
    }
  };

  const onCloseAlert = () => {
    setIsAlertVisible(false);
    setResponse({ message: "", status: "info" });
  };

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
    handleSubmit,
    onSubmit,
    onCloseAlert,
  };
};
