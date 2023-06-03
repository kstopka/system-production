import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AppCtx, useActions, useContextState } from "../../contexted";
import { IAppActions, IAppState, IMaterial } from "../../contexted/App/types";
import Api from "../../fakeAPI/API";
import { defaultValues, schema } from "./utils";

interface IResponse {
  message: string;
  status: "info" | "error" | "success";
}

const prepareArray = (arr: IMaterial[]) =>
  arr.map(({ idMaterial, nameMaterial }) => ({
    name: nameMaterial,
    code: idMaterial,
  }));

export const useAdditionalParts = () => {
  const { database } = useContextState<IAppState>(AppCtx, ["database"]);
  const { addPart } = useActions<IAppActions>(AppCtx, "addPart");

  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<IResponse>({
    message: "",
    status: "info",
  });
  const [materialParts, setMaterialParts] = useState<number | string>(
    database.materials[0]?.idMaterial || 1
  );
  const handleMaterialParts = (value: number | string) => {
    setMaterialParts(value);
  };
  const materialsParts = prepareArray(database.materials);

  const methods = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });
  const { reset, handleSubmit, setValue } = methods;

  const onSubmit: SubmitHandler<typeof defaultValues> = async (formValues) => {
    try {
      const prepareFormValues = {
        ...formValues,
        materialParts: Number(formValues.materialParts),
        quantityOrderParts: 0,
        quantityOccupiedParts: 0,
      };
      const response = await Api.addPart(prepareFormValues);
      console.log("Api.addPart", response);
      addPart({
        ...prepareFormValues,
        idParts: response.data.insertId,
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

  useEffect(() => {
    setValue("materialParts", Number(materialParts));
  }, [materialParts]);

  return {
    isLoading,
    isAlertVisible,
    response,
    methods,
    materialsParts,
    materialParts,
    handleMaterialParts,
    handleSubmit,
    onSubmit,
    onCloseAlert,
  };
};
