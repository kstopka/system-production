import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AppCtx, useActions, useContextState } from "../../contexted";
import {
  IAppActions,
  IAppState,
  IMaterial,
  IPart,
} from "../../contexted/App/types";
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

export const useAdditionalParts = (singlePart: IPart) => {
  const { database } = useContextState<IAppState>(AppCtx, ["database"]);
  const { reload } = useActions<IAppActions>(AppCtx, "reload");

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
        idParts: singlePart.idParts,
        materialParts: Number(formValues.materialParts),
        quantityOrderParts: Number(formValues.quantityOrderParts),
        quantityOccupiedParts: Number(formValues.quantityOccupiedParts),
        quintityMagazinParts: Number(formValues.quintityMagazinParts),
      };
      const response = await Api.updatePart(prepareFormValues);
      console.log("Api.updatePart", response);
      reload(true);
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

  useEffect(() => {
    setValue("nameParts", singlePart.nameParts);
    setValue("materialParts", singlePart.materialParts);
    handleMaterialParts(singlePart.materialParts);
    setValue("quintityMagazinParts", singlePart.quintityMagazinParts);
    setValue("quantityOrderParts", singlePart.quantityOrderParts);
    setValue("quantityOccupiedParts", singlePart.quantityOccupiedParts);
  }, [singlePart]);

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
    setValue,
  };
};
