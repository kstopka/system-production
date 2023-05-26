/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { defaultValues, schema } from "./utils";
import FormTextInput from "../atoms/FormTextInput";
import FormSelect from "../atoms/FormSelect";
import "./style.css";
import { AdditionalMaterialFormProps } from "./types";
import { AppCtx, useActions, useContextState } from "../../contexted";
import { IAppActions, IAppState } from "../../contexted/App/types";

const AdditionalMaterialForm: React.FC<AdditionalMaterialFormProps> = () => {
  const { database } = useContextState<IAppState>(AppCtx, "database");
  const { unitsMaterial } = database;

  const { addMaterial } = useActions<IAppActions>(AppCtx, "addMaterial");

  const [isLoading, setIsLoading] = useState(false);
  const [unitMaterial, setUnitMaterial] = useState<string>(
    unitsMaterial && unitsMaterial.length > 0 ? unitsMaterial[0].code : ""
  );

  const methods = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });
  const { handleSubmit, reset, setValue } = methods;

  const handleUnitMaterial = (value: string) => {
    setUnitMaterial(value);
  };

  const onSubmit: SubmitHandler<typeof defaultValues> = async (formValues) => {
    try {
      // TODO: add endpoint
      const response: number = 0;
      // const { response }: { response: number } = await Api.sendNewMaterial(formValues);
      addMaterial({
        ...formValues,
        idMaterial: response,
        priceMaterial: Number(formValues.priceMaterial),
      });
      reset(defaultValues);
      setUnitMaterial(unitsMaterial[0].code);
      setValue("unitMaterial", unitsMaterial[0].code);
    } catch (err) {
      console.error("error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setValue("unitMaterial", unitMaterial);
  }, [unitMaterial]);

  useEffect(() => {
    setUnitMaterial(
      unitsMaterial && unitsMaterial.length > 0 ? unitsMaterial[0].code : ""
    );
  }, [unitsMaterial]);

  return (
    <div className="wrapperForm">
      <h2>AdditionalMaterialForm</h2>
      <FormProvider {...methods}>
        <form
          className="form"
          id="material-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormTextInput
            name="nameMaterial"
            placeholder="Nazwa Materiału"
            label="Nazwa Materiału"
          />
          <FormTextInput
            name="priceMaterial"
            placeholder="Cena Materiału"
            label="Cena Materiału"
          />
          <FormSelect
            name="unitMaterial"
            label="Jednostka Materiału"
            array={unitsMaterial}
            state={unitMaterial}
            setState={handleUnitMaterial}
          />

          <div className="wrapperButton">
            <button className={`primaryBtn ${isLoading ? "loading" : ""}`}>
              {isLoading ? "Proszę czekać" : "Wyślij"}
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default AdditionalMaterialForm;
